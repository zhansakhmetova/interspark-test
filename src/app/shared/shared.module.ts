import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobFormComponent} from "./job-form/job-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [JobFormComponent],
  exports: [
    JobFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
