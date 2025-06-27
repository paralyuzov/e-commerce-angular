import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CpuComponent } from './cpu/cpu.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cpu', component: CpuComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
