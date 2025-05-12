import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Order } from 'src/util/enum/order.enum';


export interface QueryStringPayload {
  pageSize?: number;
  currentPage?: number;
  sortField?: string | null;
  sortOrder?: string | null;
}

/**
 * The PageOptionsDto class is a data transfer object that defines the options for paginating a response.
 * The class includes the sort order, sort field, current page, page size, and filters.
 * The class is used to paginate a response based on the specified options.
 * 
 * @param sortOrder The sort order of the paginated response.
 * @param sortField The field to sort the paginated response by.
 * @param currentPage The current page of the paginated response.
 * @param pageSize The number of items per page in the paginated response.
 * @param filters The filters to apply to the paginated response.
 * 
 * @returns The options for paginating a response.
 * @see Order
 */
export class PageOptionsDto implements QueryStringPayload {
  @ApiPropertyOptional({ enum: Order })
  @IsEnum(Order)
  @IsOptional()
  sortOrder?: Order

  @ApiPropertyOptional()
  @IsOptional()
  sortField?: string;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  currentPage?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  pageSize?: number = 10;
  

  get skip(): number {
    return getSkip(this.currentPage, this.pageSize);
  }
}

export function getSkip(currentPage: number | undefined, pageSize: number | undefined): number {
  if (!currentPage || currentPage <= 0) currentPage = 1;
  if (!pageSize || pageSize <= 0) pageSize = 10;
  return (currentPage - 1) * pageSize;
}
