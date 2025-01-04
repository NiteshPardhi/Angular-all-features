import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text1 = 'Hello this is one way data binding';
  text2 = 'Nitesh';
  
  constructor() { }

  ngOnInit(): void {
  }

}
