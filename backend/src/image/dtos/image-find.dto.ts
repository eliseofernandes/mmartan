import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseQueryDto } from 'src/shared/dtos/base-query-dto';

export class ImageFindDto extends BaseQueryDto {
  @ApiPropertyOptional()
  name: string;

  @ApiProperty({ default: 1 })
  page: number;

  @ApiProperty({ default: 20 })
  limit: number;
}
