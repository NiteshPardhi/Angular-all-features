import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, args: any): any {
        if (!value || !args) {
            return value;
          } else {
            //if the value or search value is there then this filtering will fire
            return value.filter((item: any) => {
                console.log(item)
               return item.includes(args.toLowerCase())
            });
          }
    }
}