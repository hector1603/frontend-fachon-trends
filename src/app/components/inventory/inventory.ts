import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/inventory.data';
import { TotalStockComponent } from '../total-stock/total-stock';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    TotalStockComponent
  ],
  templateUrl: './inventory.html', 
  styleUrls: ['./inventory.css']
})
export class InventoryComponent implements OnInit {
  products: Product[] = PRODUCTS;
  totalStockPerBranch: { [key: string]: number } = {};
  totalGlobalStock: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalStockPerBranch();
    this.calculateTotalGlobalStock();
  }

  calculateTotalStockPerBranch(): void {
    if (this.products.length > 0) {
      const firstProduct = this.products[0];
      for (const branch in firstProduct.stock) {
        if (Object.prototype.hasOwnProperty.call(firstProduct.stock, branch)) {
          this.totalStockPerBranch[branch] = 0;
        }
      }

      this.products.forEach(product => {
        for (const branch in product.stock) {
          if (Object.prototype.hasOwnProperty.call(product.stock, branch)) {
            this.totalStockPerBranch[branch] += product.stock[branch];
          }
        }
      });
    }
  }

  calculateTotalGlobalStock(): void {
    this.totalGlobalStock = 0;
    for (const branch in this.totalStockPerBranch) {
      if (Object.prototype.hasOwnProperty.call(this.totalStockPerBranch, branch)) {
        this.totalGlobalStock += this.totalStockPerBranch[branch];
      }
    }
  }

  getBranches(): string[] {
    if (this.products.length > 0) {
      return Object.keys(this.products[0].stock);
    }
    return [];
  }
}