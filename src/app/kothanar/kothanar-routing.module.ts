import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KothanarPage } from './kothanar.page';

const routes: Routes = [
  {
    path: '',
    component: KothanarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KothanarPageRoutingModule {}
