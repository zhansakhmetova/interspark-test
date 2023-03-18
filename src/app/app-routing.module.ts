import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full'
  },
  {
    path: 'jobs',
    loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: 'jobs/new',
    loadChildren: () => import('./components/create-job/create-job.module').then(m => m.CreateJobModule)
  },
  {
    path: 'jobs/:id',
    loadChildren: () => import('./components/job-details/job-details.module').then(m => m.JobDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
