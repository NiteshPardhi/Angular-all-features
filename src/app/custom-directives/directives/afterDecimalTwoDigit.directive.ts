import { Directive, ElementRef, HostListener } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    selector: "[afterDecimalTwoDigitDirective]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: AfterDecimalTwoDigitValidatorDirective,
            multi: true
        }
    ]
})

export class AfterDecimalTwoDigitValidatorDirective {

    private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);

    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-'];

    constructor(private el: ElementRef) {}

    @HostListener('keydown', ['$event'])
    
    onKeyDown(event: KeyboardEvent) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }

}