import OrderModel from '../models/orders.model';

class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  getAllOrders = async () => {
    try {
      return await this.model.getAllOrders();
    } catch (error) {
      console.error('Service failed to get Orders:', error);
      throw error;
    }
  };
}

export default OrderService;