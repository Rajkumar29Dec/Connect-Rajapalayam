import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialworkersPage } from './socialworkers.page';

const routes: Routes = [
  {
    path: '',
    component: SocialworkersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialworkersPageRoutingModule {}
