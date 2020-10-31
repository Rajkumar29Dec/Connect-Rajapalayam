import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireDatabaseModule} from '@angular/fire/database'


var firebaseConfig = {
  apiKey: "AIzaSyAJc2Unw6-DoX5szitLFBpp-L-Dz9ZRK7k",
  authDomain: "helpersaroundus.firebaseapp.com",
  databaseURL: "https://helpersaroundus.firebaseio.com",
  projectId: "helpersaroundus",
  storageBucket: "helpersaroundus.appspot.com",
  messagingSenderId: "388766221646",
  appId: "1:388766221646:web:6444e7af043d8f91bd0a1f",
  measurementId: "G-1RX73FKFPW"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
