import { ApiProperty } from '@nestjs/swagger';
import  { PageMetaDtoParameters } from './page-meta-dto-parameters';

export class PageMetaDto {
    @ApiProperty()
    readonly currentPage: number;
  
    @ApiProperty()
    readonly pageSize: number;
  
    @ApiProperty()
    readonly count: number;
  
    @ApiProperty()
    readonly totalPages: number;
  
    @ApiProperty()
    readonly hasPreviousPage: boolean;
  
    @ApiProperty()
    readonly hasNextPage: boolean;
  
    constructor({ pageOptionsDto, itemCount }: PageMetaDtoParameters) {
      this.currentPage = +(pageOptionsDto.currentPage || 0);
      this.pageSize = +(pageOptionsDto.pageSize || 10);
      this.count = itemCount;
      this.totalPages = Math.ceil(this.count / this.pageSize);
      this.hasPreviousPage = this.currentPage > 1;
      this.hasNextPage = this.currentPage < this.totalPages;
    }
  }
  