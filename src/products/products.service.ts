import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sanpham } from '../entities/sanpham.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Sanpham)
    private sanphamRepository: Repository<Sanpham>,
  ) {}

  async getProducts(page: number, limit: number, search?: string): Promise<{ data: Sanpham[]; total: number }> {
    const query = this.sanphamRepository.createQueryBuilder('sanpham');

    if (search) {
      query.where('sanpham.name LIKE :search', { search: `%${search}%` });
    }

    const [data, total] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total };
  }
}
