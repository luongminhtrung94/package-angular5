import { Routes } from '@angular/router';

//components
import { LoginComponent } from "./login.component";

export const LoginRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

