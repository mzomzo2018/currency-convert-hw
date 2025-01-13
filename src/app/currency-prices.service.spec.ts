import { TestBed } from '@angular/core/testing';

import { CurrencyPricesService } from './currency-prices.service';

describe('CurrencyPricesService', () => {
  let service: CurrencyPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
