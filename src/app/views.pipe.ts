import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'views'
})
export class ViewsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
