import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})

export class Form4Component implements OnInit {
  
  userForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      panCard: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    })

  }

  submit(){
    console.log(this.userForm.value)
  }

}
