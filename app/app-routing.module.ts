import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './nav-components/about/about.component';
import { ContactComponent } from './nav-components/contact/contact.component';
import { LoginComponent } from './nav-components/contact/login/login.component';
import { HomeComponent } from './nav-components/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
