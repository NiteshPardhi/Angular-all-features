import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  modal:any;
  constructor() { }

  ngOnInit(): void {
    this.modal = document.getElementById('myModal');
  }

  openPopup(){
    this.modal.style.display = 'block';
  }

  closePopup(){
    this.modal.style.display = 'none';
  }

  showNormalPopup(){
    Swal.fire('Here is Normal Popup......!')
  }

  showSuccessPopup(){
    Swal.fire({
      title:'Here is Success Popup...!',
      icon:'success'
    })
  }

  showErrorPopup(){
    Swal.fire({
      title: "Oops...",
      text: "Something went wrong....!",
      icon:'error'
    })
  }

  showQuestionPopup(){
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }

  showHtmlPopup(){
    Swal.fire({
      title:'HTML Popup..!',
      text: 'This is HTML Popup',
      icon: 'info',
      html: `<a href="#">Links Here </a>`
    })
  }

  showDeleteCancelPopup(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
      }
    })
  }

}
