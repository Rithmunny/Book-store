import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Order {
  id: number;
  customerName: string;
  status: 'pending' | 'shipped' | 'completed';
  items: string[];
  totalAmount: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, customerName: 'John Doe', status: 'pending', items: ['Item1'], totalAmount: 100 },
    { id: 2, customerName: 'Jane Smith', status: 'shipped', items: ['Item2', 'Item3'], totalAmount: 200 },
  ];

  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);

  getOrders(): Observable<Order[]> {
    return this.ordersSubject.asObservable();
  }

  updateOrderStatus(orderId: number, newStatus: 'pending' | 'shipped' | 'completed'): void {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.ordersSubject.next(this.orders); // Emit updated orders
    }
  }

  getOrderById(orderId: number): Order | undefined {
    return this.orders.find((o) => o.id === orderId);
  }
}
