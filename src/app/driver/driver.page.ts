import { Component, OnInit } from '@angular/core';
import {user} from '../shared/user';
import {userService } from '../shared/user.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {
  UsersArray = [];
  phone="";
  constructor(
    private apiService: userService

  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.apiService.getUserListDriver();
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
    this.apiService.getUserListDriver().valueChanges().subscribe(res => {
      console.log('Fetched users list!')
    })  }
    callfn(){
      this.phone=(<HTMLInputElement>document.getElementById('buttoncall')).value;
      window.open('tel:'+this.phone);
    }
}
