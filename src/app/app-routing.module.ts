import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'productpage',
    component: ProductpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
