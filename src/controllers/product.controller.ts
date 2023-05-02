import { Request, Response } from 'express';
import { Product } from '../interfaces';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public createProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.service.createProduct(req.body as Product);

      return res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Product Controller failed' });
    }
  };

  public getAllProducts = async (_req: Request, res: Response) => {
    try {
      const products = await this.service.getAllProducts();
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Product Controller get products failed' });
    }
  };
}
