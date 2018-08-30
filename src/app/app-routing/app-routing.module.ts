import { RouterModule, Routes } from '@angular/router';
import {IndexModule} from "../pages/index/index.module";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => IndexModule,
    // canActivate: [  CanActivateViaAuthGuard ]}, 
  },
  { path: "**", redirectTo: '/wrong-url'  },
];