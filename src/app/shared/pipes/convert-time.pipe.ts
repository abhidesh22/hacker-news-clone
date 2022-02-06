import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(timeValue: number | undefined, ...args: unknown[]): string {
    if(timeValue) {
      return moment(timeValue * 1000).fromNow();
    }
    return '';
  }

}
