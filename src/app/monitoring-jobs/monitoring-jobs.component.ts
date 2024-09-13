import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-monitoring-jobs',
  templateUrl: './monitoring-jobs.component.html',
  styleUrls: ['./monitoring-jobs.component.css']
})
export class MonitoringJobsComponent {
  // Add form controls, data models, or methods here
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      registrationDate: [null],
      releaseDate: [null]
    });
  }
}
