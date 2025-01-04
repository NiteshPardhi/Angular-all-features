import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-controller',
  templateUrl: './input-controller.component.html'
})
export class InputControllerComponent implements OnInit {

  @Input() _label!: {labelTitle:string, lableClass: string};
  @Input() _input!: {inputPlaceholder: string, inputClass: string, inputType: string};

  formControlVal!: FormGroup;
  @Input() group!: string;
  @Input() _formControlName!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.formControlVal = this.rootFormGroup.control?.get(this.group) as FormGroup;
  }

}
