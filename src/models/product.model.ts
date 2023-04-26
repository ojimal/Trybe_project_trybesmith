import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces';
import connection from './connection';

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  // public so this method can be access outside the class

  public async createProduct(product: Product): Promise<Product> {
    try {
      const { name, amount } = product;
      const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
        'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
        [name, amount],
      );
      return { id: insertId, ...product };
    } catch (error) {
      console.error('Failed to insert to database:', error);
      throw error;
    }
  }
}
