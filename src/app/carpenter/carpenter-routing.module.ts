import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarpenterPage } from './carpenter.page';

const routes: Routes = [
  {
    path: '',
    component: CarpenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarpenterPageRoutingModule {}
