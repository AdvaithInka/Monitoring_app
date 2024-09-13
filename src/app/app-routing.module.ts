import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringJobsComponent } from './monitoring-jobs/monitoring-jobs.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/monitoring-jobs', pathMatch: 'full' },
  { path: 'monitoring-jobs', component: MonitoringJobsComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
