import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompounderPage } from './compounder.page';

const routes: Routes = [
  {
    path: '',
    component: CompounderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompounderPageRoutingModule {}
