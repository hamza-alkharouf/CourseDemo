import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEUR'
})
export class USDtoEURPipe implements PipeTransform {

  transform(value:number): number {
    return value* 0.8;
  }

}
