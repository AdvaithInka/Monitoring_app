import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Add if using forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitoringJobsComponent } from './components/monitoring-jobs/monitoring-jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';   // Example Material module
import { MatTableModule } from '@angular/material/table';     // Example Material module
import { FormFieldsComponent } from './components/form-fields/form-fields.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitoringJobsComponent,
    FormFieldsComponent,
    ActionButtonsComponent,
    ContentTableComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,       // Example Material module
    MatTableModule,        // Example Material module
    FormsModule,           // Add this if you're using template-driven forms
    ReactiveFormsModule    // Add this if you're using reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
