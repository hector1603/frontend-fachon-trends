import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-stock',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './total-stock.html',
  styleUrls: ['./total-stock.css']
})
export class TotalStockComponent {
  @Input() totalStockPerBranch: { [key: string]: number } = {};
  @Input() totalGlobalStock: number = 0;
  
  constructor() { }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}