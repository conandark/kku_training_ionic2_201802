import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Response, Headers} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: Http) {

  }

  showAlert(){
     alert("Alert MSG");
  }





}
