import { Directive, NgModule } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: "[emailDirective]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true
        }
    ]
})

export class EmailValidatorDirective implements Validator {

    validate(control: AbstractControl) {
        console.log(control.value)
        let val = control.value;

        if(!val.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
            return {emailValidation: true}
        } 
        return null
    }
}

