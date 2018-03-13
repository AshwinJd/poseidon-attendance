import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule ,MatButtonModule, MatCheckboxModule,MatSelectModule, MatOptionModule, MatListOption} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import {FormBuilder,FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { CommonModule } from "@angular/common";

import { DashboardComponent } from './dashboard.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StepperComponent
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    
  ],
  exports: [
    DashboardComponent
  ],
  providers: [FormBuilder],
})
export class DashboardModule { }
