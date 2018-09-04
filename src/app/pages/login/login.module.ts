import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from "./login.routes";
import { SharedModule } from "../../shared/shared.module";

//component
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(LoginRoutes),
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { }
