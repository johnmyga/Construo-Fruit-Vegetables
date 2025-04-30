import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { filter: null },
    pathMatch: 'full'
  },
  {
    path: 'fruits',
    component: ProductListComponent,
    data: { filter: 'Fruit' }
  },
  {
    path: 'vegetables',
    component: ProductListComponent,
    data: { filter: 'Vegetable' }
  },
  // Fallback
  { path: '**', redirectTo: '' }
];
