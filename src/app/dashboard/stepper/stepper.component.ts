import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css']
})
export class StepperComponent {
  public selected: [string] = [''];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  Cohert = [
    {value: 'Wave', viewValue: 'Wave'},
    {value: 'Capsule', viewValue: 'Capsule'},
    {value: 'SBA', viewValue: 'SBA'}
  ];

  Waves = [
    {value: 'Wave1', viewValue: 'Wave1'},
    {value: 'Wave2', viewValue: 'Wave2'},
    {value: 'Wave3', viewValue: 'Wave3'},
    {value: 'Wave4', viewValue: 'Wave4'},
    {value: 'Wave5', viewValue: 'Wave5'},
    {value: 'Wave6', viewValue: 'Wave6'},
    {value: 'Wave7', viewValue: 'Wave7'},
  ];
  constructor(private _formBuilder: FormBuilder, private router: Router) { }

   getReport(value: string){
    this.selected.push(value);
    this.selected.splice(0,1);
    console.log("selects", this.selected);
    this.router.navigateByUrl('/reports');

   }
  newOrg(value: string){
    this.selected.push(value);
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
}
