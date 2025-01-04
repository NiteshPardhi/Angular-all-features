import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-textarea-controller',
  templateUrl: './textarea-controller.component.html'
})
export class TextareaControllerComponent implements OnInit {

  @Input() label!: {labelTitle: string, labelClass: string}
  @Input() textarea!: {textareaClass: string, placeholder: string}
  @Input() _formControlName!: string;

  formControlVal!: FormGroup;
  @Input() group!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.formControlVal = this.rootFormGroup.control.get(this.group) as FormGroup;
  }

}
