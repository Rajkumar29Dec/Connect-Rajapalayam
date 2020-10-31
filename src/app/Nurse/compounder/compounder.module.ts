import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompounderPageRoutingModule } from './compounder-routing.module';

import { CompounderPage } from './compounder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompounderPageRoutingModule
  ],
  declarations: [CompounderPage]
})
export class CompounderPageModule {}
