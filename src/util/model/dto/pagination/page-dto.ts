
import { ApiResponseProperty } from '@nestjs/swagger';
import { PageMetaDto } from './page-meta.dto';
export class PageDto<T> {
    @ApiResponseProperty()
    readonly rows: T[];
  
    @ApiResponseProperty()
    readonly currentPage: number;
  
    @ApiResponseProperty()
    readonly pageSize: number;
  
    @ApiResponseProperty()
    readonly count: number;
  
    @ApiResponseProperty()
    readonly totalPages: number;
  
    @ApiResponseProperty()
    readonly hasPreviousPage: boolean;
  
    @ApiResponseProperty()
    readonly hasNextPage: boolean;
  
    constructor(data: T[], meta: PageMetaDto) {
      this.rows = data;
      this.currentPage = meta.currentPage;
      this.pageSize = meta.pageSize;
      this.count = meta.count;
      this.totalPages = meta.totalPages;
      this.hasPreviousPage = meta.hasPreviousPage;
      this.hasNextPage = meta.hasNextPage
    }
  }
  