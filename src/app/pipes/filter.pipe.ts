import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  transform(value: Array<any>,arg: string): Array<any> {
    if (!value) return [];
    const result = []
    for (const item of value) {
      (item.type === arg || item.status === arg) ? result.push(item): null
    }
   return result; 
  }

}
