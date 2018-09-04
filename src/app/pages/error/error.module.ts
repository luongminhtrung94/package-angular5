import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorRoutes } from "./error.routes";
import { SharedModule } from "../../shared/shared.module";


import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ErrorRoutes),
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
