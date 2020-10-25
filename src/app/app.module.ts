import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamComponent } from './pages/team/team.component';
import { RegisterComponent } from './pages/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    LoginComponent,
    TeamComponent,
    RegisterComponent,
    Error404Component,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
