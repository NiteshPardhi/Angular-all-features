import { AbstractControl } from "@angular/forms";

//for 10 digit mobile Number validator
export function MobileNumberValidator (control: AbstractControl) {
    if(isNaN(control.value) || new String(control.value).length > 10 || new String(control.value).length < 10){
        return {validMobileNo: true}
    } else {
        return null;
    }

}

//for only number is required
export function OnlyNumberValidator (control: AbstractControl){
    var val = control.value;
    if(!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
        return {onlyNumberValidator: true}
    } else if (val.length > 2){
        return {lengthValidator: true}
    }
    return null
}

//for only character is required
export function OnlyCharacterValidator (control: AbstractControl){
    let val = control.value;
    if(!val.toString().match(/^[a-zA-Z\s]*$/)){
        return {onlyCharacterValidator: true}
    }
    return null
}

//for website url validator
export function WebsiteUrlValidator (control: AbstractControl){
    let val = control.value;
    if(!(val.startsWith('https://') || val.startsWith('http://')) ){
        return { websiteUrlValidator: true}
    } else if ( !val.endsWith('.io')){
        return { websiteUrlValidator1: true}
    } 
    return null;
}

//for email domain validatior
export function EmailDomainValidator (control: AbstractControl){
    let val = control.value;
    if(!val.includes('gmail.com')){
        return {emailDomainValidator: true}
    }
    return null
}