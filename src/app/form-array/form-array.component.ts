import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  registrationForm!: FormGroup;
  formData:any = [];
  submitted:boolean = false;
  _empId:any;
  totalData:any =[];
  existData:any =[];
  filterData:any = [];

  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute,
    private router: Router) { 
    this._empId = this.activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      mobileNo: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      id: new FormControl(),
      address: this.fb.array([this.getNewAddress()])
    })

    this.totalData = JSON.parse(localStorage.getItem('dataFormArray') || '[]');

    this.filterData = this.totalData.filter((item:any) => {
      return item.id == this._empId;
    })

    this.registrationForm.patchValue(this.filterData[0]);
    this.updateAddressData();
  }
  
  onSubmit(){
    //console.log(this.registrationForm.value);
    let submittedData = this.registrationForm.value;
    
    if(this.registrationForm.invalid) {
      return;
    }

    this.existData = this.formData;
    let existData = this.existData.filter((item:any) => {
      return item.email == submittedData.email
    })
    if(existData.length > 0){
      alert('Email is Already Exist');
      return;
    }

    if(this._empId){
      let index = this.totalData.findIndex((item:any) => {
        return this._empId == item.id
      })
      this.formData[index] = submittedData;
      alert('Data Update Successfully');
      localStorage.setItem('dataFormArray', JSON.stringify(this.formData));
      this.router.navigate(['/home/dashboard']);
    } else {
      this.formData.push(submittedData);
      alert('Data Added Successfully');
      localStorage.setItem('dataFormArray', JSON.stringify(this.formData));
      this.router.navigate(['/home/dashboard']);
    }
     
    
    
  }

  //for get formArray
  getAddress(){
    return this.registrationForm.get('address') as FormArray;
  }

  //get forArray controls
  getNewAddress(){
    return this.fb.group({
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required)
    }) as FormGroup;
  }

  addAddress(){
   this.getAddress().push(this.getNewAddress());
  }

  deleteAddress(index:any){
    this.getAddress().removeAt(index);
  }

  //for update formArray
  updateAddressData(){
    if(this.filterData[0]){
      this.filterData[0].address.map((item:any)=> {
        this.getAddress().push(this.fb.group({
          city: new FormControl(item.city, Validators.required),
          state: new FormControl(item.state, Validators.required)
      }))
    })

      this.getAddress().removeAt(0)
    }
  }

  reset(){
    this.registrationForm.reset();
  }

}
