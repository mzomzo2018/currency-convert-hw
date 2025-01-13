import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatterPipe } from '../currency-formatter.pipe';
import { CurrencyPricesService } from '../currency-prices.service';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, CurrencyFormatterPipe, FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  providers: [CurrencyPricesService],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('500ms ease-in')])
    ])
  ]
})
export class CurrencyConverterComponent implements OnInit {
  rates: { [key: string]: number } = {};
  selectedCurrency = 'USD';
  amount: number = 0;
  currencyKeys: string[] = [];
  currencyFrom = 'USD';

  constructor(private currencyService: CurrencyPricesService) {}

  ngOnInit() {
    this.currencyService.getExchangeRates(this.currencyFrom).subscribe((data: any) => {
      this.rates = data.rates;
      this.currencyKeys = Object.keys(this.rates);
    });
  }

  currencyChange(): void {
    console.log(this.currencyFrom)
    this.ngOnInit()
  }
}
