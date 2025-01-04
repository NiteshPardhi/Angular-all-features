import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-common-controls',
  templateUrl: './common-controls.component.html'
})
export class CommonControlsComponent implements OnInit {

  nationality: any = [
    {value: 'Hindu', id: 2},
    {value: 'Muslim', id: 3},
    {value: 'Cristial', id: 4}
  ];

  form = new FormGroup({
    test : this.fb.group({
      first_name: new FormControl(null , [Validators.required]),
      last_name: new FormControl(null , [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      mobile_no: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      nationality: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      isCheck: new FormControl(null, [Validators.required])
    })
  })

  constructor(private fb: FormBuilder, private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
  }

  onSubmit(){}

  onReset(){
    this.form.reset();
  }

}
