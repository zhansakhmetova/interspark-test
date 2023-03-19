import {Component, OnInit} from '@angular/core';
import {JobsService} from "../../core/services/jobs.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Job} from "../../core/models/job.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  jobForm: FormGroup;
  id: number;
  jobInfo: Job;
  title = 'Edit the Job!';
  isEdit = true;

  constructor(private jobsService: JobsService, private route: ActivatedRoute, private router: Router) {
    this.jobForm = new FormGroup({
      job_title: new FormControl("", Validators.required),
      job_start_date: new FormControl(""),
      job_number: new FormControl(""),
      job_close_date: new FormControl(""),
      experience_required: new FormControl(""),
      number_of_openings: new FormControl(""),
      job_notes: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.id = params['id'])
    this.jobsService.getDetails(this.id).subscribe(
      (res) => {
        this.jobInfo = res;
        this.setJobFormValues();
      },
      (err: HttpErrorResponse) => {console.log(err.message)}
    );
  }

  setJobFormValues() {
    this.jobForm.patchValue({
      job_title: this.jobInfo.job_title,
      job_start_date: this.jobInfo.job_start_date,
      experience_required: this.jobInfo.experience_required,
      job_number: this.jobInfo.job_number,
      job_close_date: this.jobInfo.job_close_date,
      job_notes: this.jobInfo.job_notes,
      number_of_openings: this.jobInfo.number_of_openings
    })
  }

  submit(jobForm: FormGroup) {
    jobForm = this.jobForm.value;
    this.jobsService.editJob(jobForm, this.id)
      .subscribe(
        () => this.router.navigate(['/jobs']),
        (err: HttpErrorResponse) => {console.log(err.message)}
      );
  }

  deleteJobByID() {
    this.jobsService.deleteJob(this.id).subscribe(
      () => this.router.navigate(['/jobs']),
      (err: HttpErrorResponse) => {console.log(err.message)}
    )
  }
}
