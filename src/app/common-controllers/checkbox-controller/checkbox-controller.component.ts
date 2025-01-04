import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-checkbox-controller',
  templateUrl: './checkbox-controller.component.html'
})
export class CheckboxControllerComponent implements OnInit {

  @Input() label!: {labelTitle: string, labelClass: string};
  @Input() checkbox!: {checkboxClass: string};
  @Input() _formControlName!: string;
  formControlVal!: FormGroup;
  @Input() group!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.formControlVal = this.rootFormGroup.control.get(this.group) as FormGroup;
  }

}
