import { Routes } from '@angular/router';

//components
import { ErrorComponent } from "./error.component";

export const ErrorRoutes: Routes = [
  { path: '', component: ErrorComponent, pathMatch: 'full' }
];

