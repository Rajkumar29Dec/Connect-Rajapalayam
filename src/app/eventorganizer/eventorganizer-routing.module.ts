import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventorganizerPage } from './eventorganizer.page';

const routes: Routes = [
  {
    path: '',
    component: EventorganizerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventorganizerPageRoutingModule {}
