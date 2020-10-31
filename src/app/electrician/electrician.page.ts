import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../shared/User';
import { userService } from '../shared/user.service';


@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.page.html',
  styleUrls: ['./electrician.page.scss'],
})
export class ElectricianPage implements OnInit {
  UsersArray = [];
  phone="";
  constructor(
    private apiService: userService
  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.apiService.getUserListElectrician();
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
    this.apiService.getUserListElectrician().valueChanges().subscribe(res => {
      console.log('Fetched users list!')
    })  }
    callfn(){
      this.phone=(<HTMLInputElement>document.getElementById('buttoncall')).value;
      window.open('tel:'+this.phone);
    }
}
