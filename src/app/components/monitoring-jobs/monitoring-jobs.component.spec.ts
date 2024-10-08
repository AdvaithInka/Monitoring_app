import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringJobsComponent } from './monitoring-jobs.component';

describe('MonitoringJobsComponent', () => {
  let component: MonitoringJobsComponent;
  let fixture: ComponentFixture<MonitoringJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoringJobsComponent]
    });
    fixture = TestBed.createComponent(MonitoringJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
