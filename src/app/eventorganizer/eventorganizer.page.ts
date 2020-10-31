import { Component, OnInit } from '@angular/core';
import {user} from '../shared/user';
import {userService} from '../shared/user.service';
 @Component({
  selector: 'app-eventorganizer',
  templateUrl: './eventorganizer.page.html',
  styleUrls: ['./eventorganizer.page.scss'],
})
export class EventorganizerPage implements OnInit {
  UsersArray = [];
  phone="";
  constructor(
    private apiService: userService

  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.apiService.getUserListEventorganizer();
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
    this.apiService.getUserListEventorganizer().valueChanges().subscribe(res => {
      console.log('Fetched users list!')
    })  }
    callfn(){
      this.phone=(<HTMLInputElement>document.getElementById('buttoncall')).value;
      window.open('tel:'+this.phone);
    }
}
