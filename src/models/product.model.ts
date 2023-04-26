import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces';
import connection from './connection';

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  // public so this method can be access outside the class

  public createProduct = async (product: Product): Promise<Product> => {
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
  };

  public getAllProducts = async (): Promise<Product[]> => {
    try {
      const [products] = await this.connection.execute<(Product & RowDataPacket)[]>(
        'SELECT * FROM Trybesmith.products;');
      return products;     
    } catch (error) {
      console.error('Failed to get all products from database:', error);
      throw error;
    }
  };
}
