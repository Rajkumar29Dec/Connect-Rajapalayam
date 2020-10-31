import { Component, OnInit } from '@angular/core';
import {user} from '../shared/user';
import {userService} from '../shared/user.service';


@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.page.html',
  styleUrls: ['./plumber.page.scss'],
})
export class PlumberPage implements OnInit {

  UsersArray = [];
  phone="";
  constructor(
    private apiService: userService

  ) { }

  
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.apiService.getUserListPlumber();
    bookingRes.snapshotChanges().subscribe(res => {
      this.UsersArray = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.UsersArray.push(a as user);
      })
    })
  }
  fetchBookings() {
    this.apiService.getUserListPlumber().valueChanges().subscribe(res => {
      console.log('Fetched users list!')
    })  }
    callfn(){
      this.phone=(<HTMLInputElement>document.getElementById('buttoncall')).value;
      window.open('tel:'+this.phone);
    }
}
