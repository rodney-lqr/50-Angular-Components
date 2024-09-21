import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  usdAmount: number | null = null;
  phpAmount: number | null = null;
  conversionRate: number = 56; // Conversion rate: 1 USD = 56 PHP

  // Method to convert USD to PHP
  convertCurrency() {
    if (this.usdAmount !== null) {
      this.phpAmount = this.usdAmount * this.conversionRate;
    }
  }
}
