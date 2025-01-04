import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  forChild = 'Data for Child from parent component..!';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(ChildComponent) child:any;
  forParent = '';
  onclick(){
    this.forParent = this.child.name;

    //also share parent data to child with viewchild
    this.child.name = 'ghghjjkjhghmnbhb'
  }


  getData(data:any){
    this.forParent = data

  }

}
