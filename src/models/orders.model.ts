import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order } from '../interfaces';

export default class OrderModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getAllOrders = async () => {
    try {
      const [orders] = await this.connection.execute<(Order & RowDataPacket)[]>(
        `SELECT o.id, o.user_id AS userId, 
          JSON_ARRAYAGG(p.id) as productsIds
          FROM Trybesmith.orders AS o
          JOIN Trybesmith.products AS p ON p.order_id = o.id
          GROUP BY o.id`);
      return orders;        
    } catch (error) {
      console.error('Failed to get orders from database:', error);
      throw error;
    }
  };
}