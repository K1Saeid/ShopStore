import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../app/app/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from '../app/app/layouts/auth-layout/auth-layout.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SigninComponent } from './features/auth/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // hoofd paginas
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
     
      {
        path: 'products',
        loadComponent: () =>
          import('../app/Core/container/container.component')
            .then(m => m.ContainerComponent)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent, // paginas de authenticatie
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  }
];
