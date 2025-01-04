import { Component, OnInit } from '@angular/core';
import { TemplateForm } from '../modals/template-form-modal';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  _model = new TemplateForm();
  _empId:any;
  totalData:any = [];
  filterData:any = [];
  formData:any = [];
  // _model = {
  //   firstName: '',
  //   middleName: '',
  //   lastName: '',
  //   mobileNo: '',
  //   email: '',
  //   dateOfBirth: '',
  //   nationality: '',
  //   address: '',
  //   id :'0'
  // }
  
  constructor(private activateRoute: ActivatedRoute, private router: Router) { 
  }
  
  ngOnInit(): void {
    this._empId = this.activateRoute.snapshot.paramMap.get('id');

    this.totalData = JSON.parse(localStorage.getItem('templateFormData') || '{}');

    if((this.totalData != null || this.totalData != undefined) && this._empId){
      this.filterData = this.totalData.filter((item:any) => {
        return item.id == this._empId;
      })
      this._model = this.filterData[0];
    }

  }

  onSubmit(formDetails: NgForm){
    // console.log(formDetails.value)
    // console.log(this._model);
    let modelData = this._model;
    
    
    let index = this.totalData.findIndex((item:any) => {
      return this._empId == item.id
    })
    if(this._empId){
      this.formData[index] = {...modelData};
      alert('Data Update Successfully');
      this.router.navigate(['/home/dashboard']);
    } else {
      // this.formData.push({
      //   firstName: modelData.firstName,
      //   middleName: modelData.middleName,
      //   lastName: modelData.lastName,
      //   mobileNo: modelData.middleName,
      //   email: modelData.email,
      //   dateOfBirth: modelData.dateOfBirth,
      //   nationality: modelData.nationality,
      //   address: modelData.address,
      //   id: modelData.id
      // });
      this.formData.push(modelData)
      //console.log(this.formData);
      alert('Data Added Successfully');
      this.router.navigate(['/home/dashboard']);
      this.reset();
    }
     
    localStorage.setItem('templateFormData', JSON.stringify(this.formData));
  }

  reset(){
    this._model = new TemplateForm();
  }

}
