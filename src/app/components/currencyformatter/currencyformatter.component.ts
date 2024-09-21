import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',

  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  selectedCurrency: string = 'USD';
  formattedAmount: string = '';

  formatCurrency() {
    if (this.amount !== null) {
      const options = { style: 'currency', currency: this.selectedCurrency };
      // @ts-ignore
      this.formattedAmount = new Intl.NumberFormat('en-US', options).format(this.amount);
    }
  }
}
