import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';

import { ContactusComponent } from './pages/contactus/contactus.component';


import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

import { ReviewComponent } from './pages/review/review.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingleComponent } from './pages/single/single.component';


const routes: Routes = [
  {
    path:'', component : HomeComponent
  },
  {
    path:'about', component : AboutComponent
  },
  {
    path:'services', component : ServicesComponent
  },
  {
    path:'gallery', component : GalleryComponent
  },
 
  {
    path:'contactus', component : ContactusComponent
  },
  {
    path:'login', component : LoginComponent
  },
  {
    path:'single', component : SingleComponent
  },
 
  {
    path:'review', component : ReviewComponent
  },
  {
    path:'dashboard',component : DashboardComponent
  },
  
  
  
  // {path: '',redirectTo:'login',pathMatch:'full'},
  // {
  //   path:"",
  //   loadChildren:() => import("./modules/public/public.module").then(m=>m.PublicModule)
  // },
  // {
  //   path:"dashboard",
  //   loadChildren:() => import("./modules/dashboard/dashboard.module").then(m=>m.DashboardModule)
  // }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
