import OrderModel from '../models/orders.model';
import { Order } from '../interfaces';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  getAllOrders = async (): Promise<Order[]> => {
    try {
      return await this.model.getAllOrders();
    } catch (error) {
      console.error('Service failed to get Orders:', error);
      throw error;
    }
  };
}

export default OrderService;