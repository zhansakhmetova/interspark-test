import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobsService} from "../../core/services/jobs.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {
  jobForm: FormGroup;
  title = 'Create a Job!';

  constructor(private jobsService: JobsService, private router: Router) {
    this.jobForm = new FormGroup({
      job_title: new FormControl("", Validators.required),
      job_start_date: new FormControl("", Validators.required),
      job_number: new FormControl("",  [Validators.required, Validators.max(7), Validators.min(7)]),
      job_close_date: new FormControl("", Validators.required),
      experience_required: new FormControl(false, Validators.required),
      number_of_openings: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      job_notes: new FormControl("", Validators.required),
    });
  }

  submit(jobForm: any) {
    jobForm = this.jobForm.value;
    this.jobsService.createJob(jobForm)
      .subscribe(
        () => this.router.navigate(['/jobs']),
        (err: HttpErrorResponse) => {console.log(err.message)}
      );
  }

}
