// order-management.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderManagementRoutingModule } from './order-management-routing.module'; // Import routing module

@NgModule({
  declarations: [OrderListComponent, OrderDetailsComponent],
  imports: [CommonModule, OrderManagementRoutingModule], // Include routing module
})
export class OrderManagementModule {}
