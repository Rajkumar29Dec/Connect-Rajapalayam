import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialworkersPageRoutingModule } from './socialworkers-routing.module';

import { SocialworkersPage } from './socialworkers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialworkersPageRoutingModule
  ],
  declarations: [SocialworkersPage]
})
export class SocialworkersPageModule {}
