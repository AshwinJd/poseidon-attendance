import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule ,MatButtonModule, MatCheckboxModule,MatSelectModule, MatOptionModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { CommonModule } from "@angular/common";

import { CreationComponent } from './creation.component';

@NgModule({
  declarations: [
    CreationComponent
  ],
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatInputModule,
    CommonModule
  ],
  exports: [
    CreationComponent
  ],
  providers: [],
})
export class CreationModule { }
