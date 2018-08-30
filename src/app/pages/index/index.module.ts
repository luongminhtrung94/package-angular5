import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from "../../shared/shared.module";
import { IndexRoutes } from "./index.routes";

//components
import { IndexComponent } from "./index.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(IndexRoutes),
  ],
  declarations: [IndexComponent],
  exports:[
    IndexComponent
  ],
})
export class IndexModule { }