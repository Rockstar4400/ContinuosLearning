import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvesmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    private investmentService = inject(InvesmentService);

    results = this.investmentService.resultData.asReadonly();
}
