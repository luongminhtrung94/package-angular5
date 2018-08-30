import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule } from "@angular/common/http";

//components
import { ButtonComponent } from "../components/button/button.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[HttpClientModule],
  declarations: [
    ButtonComponent
  ]
})
export class SharedModule { }