import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.page.html',
  styleUrls: ['./helper.page.scss'],
})
export class HelperPage implements OnInit {

  constructor(private dbfire:AngularFireDatabase) { }

  ngOnInit() {
  }

  register_helper(){
    var name: any;
    var email: any;
    var city: string;
    var work: string;
    var gender: any;
    var phone: any;
    var password: any;
    name=(<HTMLInputElement>document.getElementById('disp_name_helper')).value;
    email=(<HTMLInputElement>document.getElementById('email_helper')).value;
    // city=(<HTMLInputElement>document.getElementById('city_helper')).value;
    gender=(<HTMLInputElement>document.getElementById('gender_helper')).value;
    work=(<HTMLInputElement>document.getElementById('work_helper')).value;
    password=(<HTMLInputElement>document.getElementById('pswd_helper')).value;
    phone=(<HTMLInputElement>document.getElementById('phone_helper')).value;
    city="rajapalayam";

    this.dbfire.database.ref('helper').child(city).child(work).push().set({
        Name:name,
        Email:email,
        Password:password,
        Phone:phone,
        Gender:gender,
        City:city,
        Work:work
    });
    (<HTMLInputElement>document.getElementById('disp_name_helper')).value="";
   (<HTMLInputElement>document.getElementById('email_helper')).value="";
    (<HTMLInputElement>document.getElementById('pswd_helper')).value="";
    // (<HTMLInputElement>document.getElementById('city_helper')).value="";
    (<HTMLInputElement>document.getElementById('gender_helper')).value="";
    (<HTMLInputElement>document.getElementById('work_helper')).value="";
    (<HTMLInputElement>document.getElementById('phone_helper')).value="";
}

}
