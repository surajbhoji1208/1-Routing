import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './nav-components/home/home.component';
import { AboutComponent } from './nav-components/about/about.component';
import { ContactComponent } from './nav-components/contact/contact.component';
import { LoginComponent } from './nav-components/contact/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
