import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name = 'This is from child to parent component';
  @Input() inputFromParent : any;

  @Output() updatedData = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  postData(){
    this.updatedData.emit(this.name)
  }

}
