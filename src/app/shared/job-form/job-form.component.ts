import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent {
  @Input() title = "";
  @Input() jobForm: FormGroup;
  @Input() isEdit = false;
  @Output() delete = new EventEmitter();
  @Output() submitForm = new EventEmitter();

  constructor() {
  }

  onSubmit() {
    this.submitForm.emit();
  }

  deleteJob() {
    this.delete.emit();
  }


}
