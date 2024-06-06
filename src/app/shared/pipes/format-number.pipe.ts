import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return;
    // 1,000   4 % 4 = 0
    // 10,000   5 % 4 = 1
    // 100,000   6 % 4 = 2
    // 1,000,000  7 % 4 = 3
    // 10,000,000  8 % 4 = 0
    // 100,000,000  9 % 4 = 1
    // 1,000,000,000 10 % 4 = 2
  }
}
