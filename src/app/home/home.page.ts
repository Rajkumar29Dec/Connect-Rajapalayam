import { Component, DefaultIterableDiffer } from '@angular/core';
import {Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { auth } from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router:Router,
    private afauth:AngularFireAuth,
    private dbstoreuser:AngularFirestore
    ) {}

  async  gotouser(){
    await  this.afauth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(result){
      const User=result.user;
      localStorage.setItem("Username",User.displayName);
      localStorage.setItem("UserMail",User.email);
      localStorage.setItem("Userid",User.uid);
      this.router.navigateByUrl('user');

      console.log(User.displayName);
    }).catch(function(err){
      console.log(err);
    })
    this.router.navigateByUrl('user');
}

  gotohelper(){
    this.router.navigateByUrl('helper')

  }
  gotoaboutus(){
    this.router.navigateByUrl('aboutus');
  }
}
