
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpClientModule} from "@angular/common/http"
import {MatSliderModule} from '@angular/material/slider';
import { NgImageSliderModule } from 'ng-image-slider';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/addcontacts/register.component';


@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SearchComponent,
    AllUsersComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatSliderModule,
    NgImageSliderModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
