import { Injectable } from '@angular/core';
import { user } from './User';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class userService {
  userList: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }



  // Get List
  getUserListElectrician() {
    this.userList = this.db.list('/helper/rajapalayam/electrician');
    console.log(this.userList);
    return this.userList;
  }

  getUserListKothanar() {
    this.userList = this.db.list('/helper/rajapalayam/mason');
    console.log(this.userList);
    return this.userList;
  }
   getUserListNurse() {
    this.userList = this.db.list('/helper/rajapalayam/nurse');
    console.log(this.userList);
    return this.userList;
  } 
  getUserListPlumber() {
    this.userList = this.db.list('/helper/rajapalayam/plumber');
    console.log(this.userList);
    return this.userList;
  }
  getUserListPainter() {
    this.userList = this.db.list('/helper/rajapalayam/painter');
    console.log(this.userList);
    return this.userList;
  }
  getUserListSocialworker() {
    this.userList = this.db.list('/helper/rajapalayam/socialworker');
    console.log(this.userList);
    return this.userList;
  }
   getUserListDriver() {
    this.userList = this.db.list('/helper/rajapalayam/driver');
    console.log(this.userList);
    return this.userList;
  }
   getUserListCarpenter() {
    this.userList = this.db.list('/helper/rajapalayam/carpenter');
    console.log(this.userList);
    return this.userList;
  }
  getUserListEventorganizer() {
    this.userList = this.db.list('/helper/rajapalayam/eventorganizer');
    console.log(this.userList);
    return this.userList;
  }
  getUserListAuto() {
    this.userList = this.db.list('/helper/rajapalayam/auto');
    console.log(this.userList);
    return this.userList;
  }
}