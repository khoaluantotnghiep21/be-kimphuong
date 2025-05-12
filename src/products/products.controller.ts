import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.' })
  getAllProducts(
    @Query('filter') filter?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sortBy') sortBy: string = 'id',
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
  ) {
    // Example implementation with pagination and sorting
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      // ... more products
    ];

    // Apply filtering
    const filteredProducts = filter
      ? products.filter(product => product.name.includes(filter))
      : products;

    // Apply sorting
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortOrder === 'ASC') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const paginatedProducts = sortedProducts.slice(startIndex, startIndex + limit);

    return paginatedProducts;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiResponse({ status: 200, description: 'Return a single product.' })
  getProductById(@Param('id') id: string) {
    // Example implementation
    return { id, name: `Product ${id}` };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.' })
  createProduct(@Body() product: any) {
    // Example implementation
    return { id: 3, ...product };
  }
}
