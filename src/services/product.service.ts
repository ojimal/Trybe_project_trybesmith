import ProductModel from '../models/product.model';
import { Product } from '../interfaces';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  createProduct = async (product: Product): Promise<Product> => {
    try {
      const createdProduct = await this.model.createProduct(product);
      return createdProduct;
    } catch (error) {
      console.error('Service failed to create Product:', error);
      throw error;
    }
  };

  getAllProducts = async (): Promise<Product[]> => {
    try {
      return await this.model.getAllProducts();    
    } catch (error) {
      console.error('Service failed to create Product:', error);
      throw error;
    }
  };
}

export default ProductService;
