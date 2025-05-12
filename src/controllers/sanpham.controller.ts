import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SanphamService } from '../services/sanpham.service';
import { CreateSanphamDto, UpdateSanphamDto, SanphamResponseDto } from '../entities/sanpham.dto';
import { SearchSanphamDto } from '../entities/dto/dto';


@Controller('sanpham')
@ApiTags('sanpham')
export class SanphamController {
  constructor(private readonly sanphamService: SanphamService) {}
/**
   * 
   * @param files 
   * @param body 
   * @param req 
   * @returns 
   */
  // Swagger
  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.', type: [SanphamResponseDto] })
  async getAll(): Promise<SanphamResponseDto[]> {
    return this.sanphamService.getAll();
  }

  @Get('search')
  @ApiOperation({ summary: 'Search products with optional criteria' })
  @ApiResponse({ status: 200, description: 'Return search results based on optional criteria.', type: [SanphamResponseDto] })
  async search(
    @Query() searchParams: SearchSanphamDto,
    @Query('page') page: number,
    @Query('take') take: number
  ): Promise<SanphamResponseDto[]> {
    // Separate page and take from searchParams
    const criteria = { ...searchParams };
    return this.sanphamService.search(criteria, page, take);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @ApiResponse({ status: 200, description: 'Return a single product.', type: SanphamResponseDto })
  async getById(@Param('id') id: string): Promise<SanphamResponseDto> {
    return this.sanphamService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.', type: SanphamResponseDto })
  async create(@Body() createSanphamDto: CreateSanphamDto): Promise<SanphamResponseDto> {
    return this.sanphamService.create(createSanphamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.', type: SanphamResponseDto })
  async update(@Param('id') id: string, @Body() updateSanphamDto: UpdateSanphamDto): Promise<SanphamResponseDto> {
    return this.sanphamService.update(id, updateSanphamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Soft delete a product' })
  @ApiResponse({ status: 200, description: 'The product has been successfully soft deleted.' })
  async softDelete(@Param('id') id: string): Promise<void> {
    return this.sanphamService.softDelete(id);
  }
} 