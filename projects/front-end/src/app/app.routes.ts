import { Routes } from '@angular/router';
import { colisRoutes } from './features/colis/colis.routes';

export const routes: Routes = [
  {
    path: 'colis',
    loadChildren: () => import('./features/colis/colis.routes').then(m => m.colisRoutes)
  }
];
