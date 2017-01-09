
import { Injectable } from '@angular/core';

@Injectable()
export class Endpoints {

    //API_PATH: string = window.location.origin; // http://localhost:8000/
   //API_PATH: string = (window.location.origin.indexOf('heroku') >= 0) ? 'https://ionic-urban-art.herokuapp.com' : "http://localhost:8000"; 
   API_PATH: string = "https://ionic-urban-art.herokuapp.com";

  getLogin(){
    return this.API_PATH + "/sessions/create";
  }

  getSignup(){
    return this.API_PATH + "/users";
  }

  getWorks(){
      return this.API_PATH + "/works"
  }

  postWork(){
      return this.API_PATH + "/works"
  }
  getCategories(){
      return this.API_PATH + "/categories"
  }
  getArtists(){
      return this.API_PATH + "/artists"
  }
/*  postCategory(){
      return this.API_PATH + "/category"
  }*/

  postImage() {
      return this.API_PATH + "/images"
  }
}
  