import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrderStatus'
})
export class FilterOrderStatusPipe implements PipeTransform {

  transform(value: Array<any>, arg: string): Array<any> {
     if (!value) return [];
    const result = [];
    for (const order of value) {
      (order.status === arg) ? result.push(order): null;
    }
   return result;
  }

}
