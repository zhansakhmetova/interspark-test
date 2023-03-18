import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Job} from "../models/job.model";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.url}`);
  }

  getDetails(id: any): Observable<Job> {
    return this.http.get<Job>(`${environment.url}/${id}`);
  }

  createJob(jobForm: FormGroup): Observable<Job[]> {
    return this.http.post<Job[]>(`${environment.url}`, jobForm);
  }

  editJob(jobForm: FormGroup, id: number): Observable<Job[]> {
    return this.http.put<Job[]>(`${environment.url}/${id}`, jobForm)
  }

  deleteJob(id: number): Observable<Job[]> {
    return this.http.delete<Job[]>(`${environment.url}/${id}`);
  }
}
