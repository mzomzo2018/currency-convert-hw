import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true,
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(value: number, rate: number, currencySymbol: string): string {
    if (!rate || !value) return '';
    return `${currencySymbol} ${(value * rate).toFixed(2)}`;
  }
}
