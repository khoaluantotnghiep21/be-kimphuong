import { Injectable } from '@nestjs/common';
import { GetProductsDto } from '../entities/get-products.dto';

@Injectable()
export class ProductService {
  async getProducts(query: GetProductsDto): Promise<any> {
    const { page = 1, limit = 10, search } = query;

    // Here you would implement the logic to fetch products from the database
    // For example, using a repository or ORM to query the database

    // Simulate fetching products with pagination and filtering
    const allProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
      // ... more products
    ];

    let filteredProducts = allProducts;
    if (search) {
      filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      total: filteredProducts.length,
      page,
      limit,
      data: paginatedProducts,
    };
  }
} 