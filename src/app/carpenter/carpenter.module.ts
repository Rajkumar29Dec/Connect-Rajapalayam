import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarpenterPageRoutingModule } from './carpenter-routing.module';

import { CarpenterPage } from './carpenter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarpenterPageRoutingModule
  ],
  declarations: [CarpenterPage]
})
export class CarpenterPageModule {}
