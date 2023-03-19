import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {CreateJobComponent} from "./create-job.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

export const route: Route[] = [{
  path: '',
  component: CreateJobComponent
}]

@NgModule({
  declarations: [CreateJobComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    CommonModule,
    SharedModule
  ]
})
export class CreateJobModule { }
