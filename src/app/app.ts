import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './components/inventory/inventory';
import { CompanyInfo } from './data/inventory.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    InventoryComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Sistema de Inventario para "Fashion Trends"';
  companyInfo = CompanyInfo;
}