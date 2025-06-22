import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CpuComponent } from './cpu/cpu.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cpu', component: CpuComponent },
];
