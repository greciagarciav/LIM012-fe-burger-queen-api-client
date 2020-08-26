import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class filterPipe implements PipeTransform {

  transform(value: Array<any>,arg: string): Array<any> {

    const result = []
    for (const item of value) {
      if(item.type === arg){
        result.push(item)
      }else if(item.status === arg){
        result.push(item)
      }
      // (item.type === arg || item.status === arg) ? result.push(item): null
    }

    
   return result; 
  }

}
