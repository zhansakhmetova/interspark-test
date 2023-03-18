import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {JobsComponent} from "./jobs.component";

export const route: Route[] = [{
  path: '',
  component: JobsComponent
}]

@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class JobsModule { }
