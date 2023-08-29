import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'misedificios',
    loadComponent: () => import('./pages/misedificios/misedificios.page').then( m => m.MisedificiosPage)
  },
  {
    path: 'mihistorial',
    loadComponent: () => import('./pages/mihistorial/mihistorial.page').then( m => m.MihistorialPage)
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
];
