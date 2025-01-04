import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailDomainValidator, MobileNumberValidator, OnlyCharacterValidator, OnlyNumberValidator, WebsiteUrlValidator } from '../validations/custom-validator';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  validationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      contact_number: new FormControl('', [Validators.required, MobileNumberValidator, OnlyNumberValidator]),
      name: new FormControl('', [Validators.required, OnlyCharacterValidator]),
      age: new FormControl('', [Validators.required, OnlyNumberValidator]),
      email: new FormControl('', [Validators.required, EmailDomainValidator]),
      website: new FormControl('', [Validators.required, WebsiteUrlValidator])
    })
  }

  submit(){
    console.log(this.validationForm.value)
  }

}
