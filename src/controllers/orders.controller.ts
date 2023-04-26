import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrdersController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  getAllOrders = async (_req: Request, res: Response) => {
    try {
      const orders = await this.service.getAllOrders();
    
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Orders Controller failed' });
    }
  };
}

export default OrdersController;