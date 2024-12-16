import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

interface Order {
  id: number;
  customerName: string;
  status: 'pending' | 'shipped' | 'completed';
  items: string[];
  totalAmount: number;
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  order: Order | undefined;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
    const orderId = +this.route.snapshot.paramMap.get('id')!;
    this.order = this.orderService.getOrderById(orderId);
  }

  updateStatus(newStatus: 'pending' | 'shipped' | 'completed') {
    if (this.order) {
      this.orderService.updateOrderStatus(this.order.id, newStatus);
    }
  }
}
