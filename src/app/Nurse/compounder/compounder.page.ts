import { Component, OnInit } from '@angular/core';
import {user} from 'src/app/shared/user';
import {userService} from 'src/app/shared/user.service';

@Component({
  selector: 'app-compounder',
  templateUrl: './compounder.page.html',
  styleUrls: ['./compounder.page.scss'],
})
export class CompounderPage implements OnInit {
  UsersArray = [];
  phone="";
  constructor(
    private apiService: userService

  ) { }

  
  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.apiService.getUserListAuto();
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
    this.apiService.getUserListAuto().valueChanges().subscribe(res => {
      console.log('Fetched users list!')
    })  }
    callfn(){
      this.phone=(<HTMLInputElement>document.getElementById('buttoncall')).value;
      window.open('tel:'+this.phone);
    }
}
