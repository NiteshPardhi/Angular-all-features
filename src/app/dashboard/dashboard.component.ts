import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  p: number = 1;
  data:any = [];
  dataFormArray:any = [];
  modal:any;
  templateFormData:any = [];
  
  constructor(private authService: AuthService, private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('addedData') || '[]');
    //console.log('data',this.data);

    this.modal = document.getElementById('myModal')
    //console.log(this.modal)
    
    this.dataFormArray = JSON.parse(localStorage.getItem('dataFormArray') || '[]');
    console.log(this.dataFormArray)

    this.templateFormData = JSON.parse(localStorage.getItem('templateFormData') || '[]');
    //console.log(this.templateFormData)
  }

  _index:any;
  openModal(index:any){
    this.modal.style.display = 'block';
    this._index = index;
  }

  editData(id:any){
    this.router.navigate(['home/registration/' + id]);
  }

  deleteData(){
    this.spinner.show();

    setTimeout(() => {
      this.data.splice(this._index, 1);
      //console.log('data',this.data);

      localStorage.setItem('addedData', JSON.stringify(this.data));
      this.spinner.hide();
    }, 1000)
    
    this.modal.style.display = 'none';
  }

  closePopup(){
    this.modal.style.display = 'none';
  }

  editFormArrayData(id:any){
    this.router.navigate(['home/formArray/' + id]);
  }

  deleteFormArrayData(index:any) {
    this.dataFormArray.splice(index, 1);
  }

  editTemFormData(id:any){
    this.router.navigate(['home/template-form/' + id]);
  }

  deleteTemFormData(index:any) {
    this.templateFormData.splice(index, 1);
  }

}
