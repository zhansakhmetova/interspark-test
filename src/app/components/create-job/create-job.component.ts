import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JobsService} from "../../core/services/jobs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {
  jobForm!: FormGroup;

  constructor(private jobsService: JobsService, private router: Router) {
    this.jobForm = new FormGroup({
      'job_title': new FormControl("", Validators.required),
      'job_start_date': new FormControl(""),
      'job_number': new FormControl(""),
      'job_close_date': new FormControl(""),
      'experience_required': new FormControl(""),
      'number_of_openings': new FormControl(""),
      'job_notes': new FormControl("",  Validators.required),
    })

  }

  submit() {
    this.jobsService.createJob(this.jobForm.value).subscribe(
      () => this.router.navigate(['/jobs']),
    );
  }

}
