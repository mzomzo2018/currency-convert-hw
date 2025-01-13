import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyPricesService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/{}'; // Example API endpoint
  constructor(private http: HttpClient) { }

  getExchangeRates(currencyFrom: any): Observable<any> {
    this.apiUrl = this.apiUrl.replace('{}', currencyFrom);
    return this.http.get<any>(this.apiUrl);
  }
}
