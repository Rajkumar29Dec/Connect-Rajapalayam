import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KothanarPageRoutingModule } from './kothanar-routing.module';

import { KothanarPage } from './kothanar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KothanarPageRoutingModule
  ],
  declarations: [KothanarPage]
})
export class KothanarPageModule {}
