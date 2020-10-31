import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'electrician',
    loadChildren: () => import('./electrician/electrician.module').then( m => m.ElectricianPageModule)
  },
  {
    path: 'painter',
    loadChildren: () => import('./painter/painter.module').then( m => m.PainterPageModule)
  },
  {
    path: 'kothanar',
    loadChildren: () => import('./kothanar/kothanar.module').then( m => m.KothanarPageModule)
  },
  {
    path: 'socialworkers',
    loadChildren: () => import('./socialworkers/socialworkers.module').then( m => m.SocialworkersPageModule)
  },
  {
    path: 'compounder',
    loadChildren: () => import('./Nurse/compounder/compounder.module').then( m => m.CompounderPageModule)
  },
  {
    path: 'taxi',
    loadChildren: () => import('./auto/taxi/taxi.module').then( m => m.TaxiPageModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'plumber',
    loadChildren: () => import('./plumber/plumber.module').then( m => m.PlumberPageModule)
  },
  {
    path: 'eventorganizer',
    loadChildren: () => import('./eventorganizer/eventorganizer.module').then( m => m.EventorganizerPageModule)
  },
  {
    path: 'carpenter',
    loadChildren: () => import('./carpenter/carpenter.module').then( m => m.CarpenterPageModule)
  },
  {
    path: 'helper',
    loadChildren: () => import('./helper/helper.module').then( m => m.HelperPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
