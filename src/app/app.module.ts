import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  FormGroup }   from '@angular/forms';
import {  MatButtonModule} from  '@angular/material';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module'
import {DashboardModule} from './dashboard/dashboard.module';
import { CreationModule } from './creation/creation.module';
import {ReportsModule } from './reports/reports.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    RouterModule,
    CreationModule,
    ReportsModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
