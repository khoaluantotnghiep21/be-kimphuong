import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getMetadataArgsStorage, Repository } from 'typeorm';
import { Sanpham } from '../entities/entities/Sanpham';
import { CreateSanphamDto, UpdateSanphamDto, SanphamResponseDto, SearchSanphamDto } from '../entities/sanpham.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SanphamService {
  constructor(
    @InjectRepository(Sanpham)
    private readonly sanphamRepository: Repository<Sanpham>,
  ) {}

  async getAll(): Promise<SanphamResponseDto[]> {
    const sanphams = await this.sanphamRepository.find();
    return sanphams.map(sanpham => plainToClass(SanphamResponseDto, sanpham));
  }

  async getById(id: string): Promise<SanphamResponseDto> {
    const sanpham = await this.sanphamRepository.findOne({ where: { id } });
    if (!sanpham) {
      throw new NotFoundException('Sanpham not found');
    }
    return plainToClass(SanphamResponseDto, sanpham);
  }

async search(criteria: Partial<SearchSanphamDto>, page: number, take: number): Promise<SanphamResponseDto[]> {
  const skip = (page - 1) * take;
  const query = this.sanphamRepository.createQueryBuilder('sanpham');

  // Get valid column names from entity metadata
  const validColumns = getMetadataArgsStorage()
    .columns.filter(col => col.target === Sanpham)
    .map(col => col.propertyName);

  // Add dynamic filters based on user input
  Object.keys(criteria).forEach(key => {
    if (criteria[key] !== undefined && validColumns.includes(key)) {
      query.andWhere(`sanpham.${key} = :${key}`, { [key]: criteria[key] });
    }
  });

  // Apply pagination and ordering
  query.skip(skip).take(take).orderBy('sanpham.tensanpham', 'ASC');

  const sanphams = await query.getMany();
  return sanphams.map(sanpham => plainToClass(SanphamResponseDto, sanpham));
}
  async create(createSanphamDto: CreateSanphamDto): Promise<SanphamResponseDto> {
    const sanpham = this.sanphamRepository.create(createSanphamDto);
    await this.sanphamRepository.save(sanpham);
    return plainToClass(SanphamResponseDto, sanpham);
  }

  async update(id: string, updateSanphamDto: UpdateSanphamDto): Promise<SanphamResponseDto> {
    await this.sanphamRepository.update(id, updateSanphamDto);
    const updatedSanpham = await this.sanphamRepository.findOne({ where: { id } });
    if (!updatedSanpham) {
      throw new NotFoundException('Sanpham not found');
    }
    return plainToClass(SanphamResponseDto, updatedSanpham);
  }

  async softDelete(id: string): Promise<void> {
    const sanpham = await this.sanphamRepository.findOne({ where: { id } });
    if (!sanpham) {
      throw new NotFoundException('Sanpham not found');
    }
    // sanpham.deletedAt = new Date();
    await this.sanphamRepository.save(sanpham);
  }
} 