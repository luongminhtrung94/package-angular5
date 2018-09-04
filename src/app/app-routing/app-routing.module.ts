import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: "./pages/index/index.module#IndexModule",
    // canActivate: [  CanActivateViaAuthGuard ]}, 
  },{
    path: 'login',
    loadChildren: "./pages/login/login.module#LoginModule",
  },{
    path: 'wrong-url',
    loadChildren: "./pages/error/error.module#ErrorModule",
  },
  { path: "**", redirectTo: '/wrong-url'  },
];