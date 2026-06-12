import { Routes } from '@angular/router';
import { colisRoutes } from './features/colis/colis.routes';

export const routes: Routes = [
  {
    path: 'colis',
    loadChildren: () => import('./features/colis/colis.routes').then(m => m.colisRoutes)
  },
  {
    path: 'delivers',
    loadChildren: () => import('./features/delivers/delivers.routes').then(m => m.deliversRoutes)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/produits/products.routes').then(m => m.productsRoutes)
  }
];
