import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  isSaved = false;
  userDetailsForm!: FormGroup;

  constructor() {
    this.userDetailsForm = new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl(''),
      mobileNo: new FormControl(''),
      address: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> {
    if (this.userDetailsForm.dirty || this.userDetailsForm.touched) {
      const result = window.confirm(
        'There are unsaved changes! Are   you sure?'
      );
      return of(result);
    }
    return of(true);
  }

  onSubmit() {
    this.isSaved = true;
  }

}
