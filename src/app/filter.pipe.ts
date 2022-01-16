import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, filterString:string, propName: string): any {
  //   if (value.length  === 0 ||  filterString === ''){
  //     return value;
  //   }
  //   const  resultArray = [];
  //   for (const item of value) {
  //     if (item[propName]  === filterString) {
  //       resultArray.push(item)
  //     }
  //   }
  //   return resultArray;
  // }

  transform(value: any, term: any) {
    if (!term) { return value; } 
    return value.filter((item: any) => {
      for (let prop in item) {
        if (typeof item[prop] === 'string' && 
          item[prop].toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return true;
        }
      }
      return false;
    });
  }

  

}
