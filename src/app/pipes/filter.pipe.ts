import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  transform(value: Array<any>,arg: string): Array<any> {

    const result = []
    for (const product of value) {
      (product.type === arg) ? result.push(product): null
    }
   return result; 
  }

}
