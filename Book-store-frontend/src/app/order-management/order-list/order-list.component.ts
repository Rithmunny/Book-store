import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../order.service';

interface Order {
  id: number;
  customerName: string;
  status: 'pending' | 'shipped' | 'completed';
  totalAmount: number;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  orders$: Observable<Order[]>;

  constructor(private orderService: OrderService) {
    this.orders$ = this.orderService.getOrders();
  }
}
