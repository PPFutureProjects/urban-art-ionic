import { Component } from '@angular/core';

import {WorksService} from '../../providers/works.service';

declare var google;
/*
  Generated class for the Map component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'map',
  template: "<div id='map_canvas'></div>"
})
export class Map {

  items: any = []
  constructor(private worksService: WorksService) {
       
  }

  map: any;
  styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    }
  ];

  init(lat:number, long:number, zoom:number=12) {

    this.map = new google.maps.Map(document.getElementById("map_canvas"), {
          center: new google.maps.LatLng(lat, long),
          zoom: zoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP
     });
     this.map.setOptions({styles: this.styles});
     console.log(this.map);
      this.worksService.load().then((data)=>{

        console.log("this.items =",data)
        this.items = data;
        this.setMarkers(this.map);
      })  
     
  }

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.


  setMarkers(map) {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    for (var i = 0; i < this.items.length; i++) {
      var work = this.items[i];
      var image = {
        url: "assets/images/works/" + work.photos[0],
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
      console.log("creating marker",work)

      var marker = new google.maps.Marker({
        position: {lat: work.pos[1], lng: work.pos[0]},
        map: map,
        icon: image,
        shape: shape,
        title: work.title,
        zIndex: work[3]
      });
    }
  }

}
