import { Routes } from '@angular/router';
import { ProductListComponent } from '../app/Core/container/product-list/product-list.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];
