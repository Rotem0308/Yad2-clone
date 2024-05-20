import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length === 3) value += '-';
    return value;
  }
}
