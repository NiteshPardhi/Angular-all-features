import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dropdown-controller',
  templateUrl: './dropdown-controller.component.html'
})
export class DropdownControllerComponent implements OnInit {

  @Input() dropdown!: {dropdownClass: string, dropdownPlaceholder: string}
  @Input() label!: {labelTitle: string, labelClass: string};

  @Input() dropdownRecords:any = [];
  @Input() staticData: any = []
  @Input() _formControlName!: string;
  @Input() group!: string;
  formControlVal!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.dropdownRecords = this.staticData;
    this.formControlVal = this.rootFormGroup.control.get(this.group) as FormGroup;
  }

}
