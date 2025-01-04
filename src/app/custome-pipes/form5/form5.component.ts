import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

  items = [
    { title: "third", value: "three", digit: 44 },
    { title: "second", value: "two", digit: 14 },
    { title: "first", value: "one", digit: 100 },
    { title: "fourth", value: "four", digit: 400 },
    { title: "fifth", value: "five", digit: 500 },
  ];

  searchTerm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
