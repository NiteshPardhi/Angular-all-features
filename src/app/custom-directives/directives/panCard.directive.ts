import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[panCardDirective]',
    providers:[
        {
            provide: NG_VALIDATORS,
            useExisting: PanCardValidationDirective,
            multi: true
        }
    ]
})

export class PanCardValidationDirective implements Validator{
    
    validate(control: AbstractControl) {
        if(control.value != null){
            if( !(control.value.startsWith('M') || control.value.startsWith('N') || control.value.startsWith('S')) ) {
                //console.log('iffff',control.value)
                return { pancardValidation1: true}
            } 
            else if ( control.value.length != 10 ){
                //console.log('elseeee',control.value)
               return { pancardLength: true}  
            }
            else if ( !control.value.endsWith('5') ){
                //console.log('elseeee',control.value)
               return { pancardValidation2: true}  
            }
        }

        return null
    }
}