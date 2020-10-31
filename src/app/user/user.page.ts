import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseApp} from '@angular/fire';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  
  constructor(
    private router:Router,
    private dbuserref:AngularFireDatabase
    ) { }

  ngOnInit() {
    const name_user=localStorage.getItem("Username");
    const email_user=localStorage.getItem("UserMail");
    document.getElementById('name_user_display').innerHTML=name_user;
    document.getElementById('email_user_display').innerHTML=email_user;
  }


  gotoelectrician(){
    this.router.navigateByUrl('electrician')

  }
  gotopainter(){
    this.router.navigateByUrl('painter')

  }
  gotomason(){
    this.router.navigateByUrl('kothanar')

  }
  gotocarpenter(){
    this.router.navigateByUrl('carpenter')

  }
  gotoeventorganizer(){
    this.router.navigateByUrl('eventorganizer')

  }
  gotoplumber(){
    this.router.navigateByUrl('plumber')

  }
  gotodriver(){
    this.router.navigateByUrl('driver')

  }
  gotoautoortaxi(){
    this.router.navigateByUrl('taxi')

  }
  gotonurseorcompounder(){
    this.router.navigateByUrl('compounder')

  }
  gotosocialworkers(){
    this.router.navigateByUrl('socialworkers')

  }


}
