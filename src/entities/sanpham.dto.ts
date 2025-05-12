// This file will be moved to a new file named dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateSanphamDto {
  @ApiProperty({ example: 'SP001' })
  @IsString()
  masanpham: string;

  @ApiProperty({ example: 'Product Name' })
  @IsString()
  tensanpham: string;

  @ApiProperty({ example: 'product-slug' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({ example: 'Tablet' })
  @IsOptional()
  @IsString()
  dangbaoche?: string;

  @ApiProperty({ example: 'Used for pain relief' })
  @IsOptional()
  @IsString()
  congdung?: string;

  @ApiProperty({ example: 'Adults' })
  @IsOptional()
  @IsString()
  chidinh?: string;

  @ApiProperty({ example: 'Not for children under 12' })
  @IsOptional()
  @IsString()
  chongchidinh?: string;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  thuockedon?: boolean;

  @ApiProperty({ example: 'Short description' })
  @IsOptional()
  @IsString()
  motangan?: string;

  @ApiProperty({ example: 'General public' })
  @IsOptional()
  @IsString()
  doituongsudung?: string;

  @ApiProperty({ example: 'Store in a cool place' })
  @IsOptional()
  @IsString()
  luuy?: string;

  @ApiProperty({ example: '2023-01-01' })
  @IsOptional()
  @IsString()
  ngaysanxuat?: string;

  @ApiProperty({ example: 24 })
  @IsOptional()
  @IsNumber()
  hansudung?: number;

  @ApiProperty({ example: 10000 })
  @IsOptional()
  @IsNumber()
  gianhap?: number;
}

export class UpdateSanphamDto extends CreateSanphamDto {}

export class SanphamResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  masanpham: string;

  @ApiProperty()
  tensanpham: string;

  @ApiProperty()
  slug?: string;

  @ApiProperty()
  dangbaoche?: string;

  @ApiProperty()
  congdung?: string;

  @ApiProperty()
  chidinh?: string;

  @ApiProperty()
  chongchidinh?: string;

  @ApiProperty()
  thuockedon?: boolean;

  @ApiProperty()
  motangan?: string;

  @ApiProperty()
  doituongsudung?: string;

  @ApiProperty()
  luuy?: string;

  @ApiProperty()
  ngaysanxuat?: string;

  @ApiProperty()
  hansudung?: number;

  @ApiProperty()
  gianhap?: number;
}

export class SearchSanphamDto {
  @ApiPropertyOptional({ example: 'SP001' })
  masanpham?: string;

  @ApiPropertyOptional({ example: 'Product Name' })
  tensanpham?: string;

  @ApiPropertyOptional({ example: 'product-slug' })
  slug?: string;

  @ApiPropertyOptional({ example: 'Tablet' })
  dangbaoche?: string;

  @ApiPropertyOptional({ example: 'Used for pain relief' })
  congdung?: string;

  @ApiPropertyOptional({ example: 'Adults' })
  chidinh?: string;

  @ApiPropertyOptional({ example: 'Not for children under 12' })
  chongchidinh?: string;

  @ApiPropertyOptional({ example: true })
  thuockedon?: boolean;

  @ApiPropertyOptional({ example: 'Short description' })
  motangan?: string;

  @ApiPropertyOptional({ example: 'General public' })
  doituongsudung?: string;

  @ApiPropertyOptional({ example: 'Store in a cool place' })
  luuy?: string;

  @ApiPropertyOptional({ example: '2023-01-01' })
  ngaysanxuat?: string;

  @ApiPropertyOptional({ example: 24 })
  hansudung?: number;

  @ApiPropertyOptional({ example: 10000 })
  gianhap?: number;
} 