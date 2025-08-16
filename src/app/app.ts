import { Component } from '@angular/core';
import { CompanyInfo } from './data/inventory.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Sistema de Inventario para "Fashion Trends"'; [cite: 1]
  companyInfo = CompanyInfo;
}