import {Component, OnInit} from '@angular/core';
import {JobsService} from "../../core/services/jobs.service";
import {Observable} from "rxjs";
import {Job} from "../../core/models/job.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs$: Observable<Job[]>;

  constructor(private jobsService: JobsService, private router: Router) {
  }

  ngOnInit(): void {
    this.jobs$ = this.jobsService.getJobs();
  }

  getDetailsByID(id: number) {
    this.router.navigate([`/jobs/${id}`]);
  }

}
