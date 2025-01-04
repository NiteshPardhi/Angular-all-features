import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titlecase'
})

export class TitlecasePipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        //first i split whole the line after space and store it in to the val constant 
        const val = value.split(' ');
        //console.log(val)

        //then make a loop with that val constant 
        for (let index = 0; index < val.length; index++) {

            //then store that loop in to the pic constant 
            const elem = val[index];
            //console.log(elem)

            //then i'll convert that words first latte in to in to the uppercase
            const title = elem.charAt(0).toUpperCase();
            //console.log(title)

            //then i fetch the latters after the 1st and convert that all in to the lowercase 
            val[index] = title + elem.substr(1).toLowerCase();
           // console.log(val[index])
        }

        //then join all the words again with the space
        return val.join(' ');

    }
}