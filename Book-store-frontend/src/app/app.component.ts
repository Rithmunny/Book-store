import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { OrderManagementModule } from './order-management/order-management.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, OrderManagementModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected to styleUrls
})
export class AppComponent {}
