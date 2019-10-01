import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: any, format = 'HH:mm D MMMM YYYY'): string {
    return (moment.unix(value)).local().format(format);
  }

}
