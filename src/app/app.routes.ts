import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';

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
  { path: 'cart', component: CartPageComponent },

  { path: 'product/:id', component: ProductDetailComponent },
  // Fallback
  { path: '**', redirectTo: '' }
];
