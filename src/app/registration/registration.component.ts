import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  formData:any = [];
  submitted:boolean = false;
  id:any;
  _addedData:any = [];
  modal:any

  constructor(private authService: AuthService, private router: Router, activateRoute: ActivatedRoute) { 
    this.id = activateRoute.snapshot.paramMap.get('id');
    //console.log('id',this.id);
  }

  
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required])
    })

    this._addedData = JSON.parse(localStorage.getItem('addedData') || '[]');

    let filterData = this._addedData.filter((item:any) => {
      return item.id == this.id;
    })

    this.registrationForm.patchValue(filterData[0]);

    this.modal = document.getElementById('myModal')

  }

  onSubmit(){
    this.modal.style.display = 'block';
  }

  closePopup(){
    this.modal.style.display = 'none';
  }

  submitReactiveForm(){
    this.submitted = true;

    this.formData = this.registrationForm.value;
    console.log(this.formData)

    if(this.registrationForm.invalid){
      alert('please Fill All Data....')
      this.modal.style.display = 'none';
      return;
    } 

    
    if(this.id){
      let ind = this._addedData.findIndex((item:any) => {
        return item.id == this.id; 
      })
      this._addedData[ind] = this.formData;
      this.modal.style.display = 'none';
      alert('Data Updated Succcessfull....')
      this.router.navigate(['/home/dashboard']);
    } else {
      this._addedData.push(this.formData);
      this.modal.style.display = 'none';
      alert('Added SucessFully....')
      this.router.navigate(['/home/dashboard']);
    }

    localStorage.setItem('addedData', JSON.stringify(this._addedData));
  }

  resetReactiveForm(){
    this.registrationForm.reset();
  }

}
