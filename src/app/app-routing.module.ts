import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './services/auth.guard';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/addcontacts/register.component';

const routes: Routes = [
  
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'register', component:RegistrationComponent},
  {
    path : "all-users", component : AllUsersComponent
  },
  {
    path : "search" , component : SearchComponent
  },
  {
    path : "register2" , component : RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
