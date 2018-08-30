import { Routes } from '@angular/router';

//components
import { IndexComponent } from "./index.component";

export const IndexRoutes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' }
];

