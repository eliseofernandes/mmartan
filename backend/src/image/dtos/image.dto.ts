import { IImage } from '../interfaces/image.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ImageDto implements IImage {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  product_id: string;
}
