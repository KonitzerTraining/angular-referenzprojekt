import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Pipe({
  name: 'currencyDe'
})
export class CurrencyDePipe implements PipeTransform {
  private currency: CurrencyPipe;

  constructor() {
     this.currency = new CurrencyPipe('de-DE', 'EUR');
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.currency.transform(value);
  }

}
