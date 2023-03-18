import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {JobDetailsComponent} from "./job-details.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

export const route: Route[] = [{
  path: '',
  component: JobDetailsComponent
}]

@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(route),
    CommonModule,
    SharedModule
  ]
})
export class JobDetailsModule { }
