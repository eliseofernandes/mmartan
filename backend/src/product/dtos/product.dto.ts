import { ImageDto } from 'src/image/dtos/image.dto';

export class ProductDto {
  name: string;

  description: string;

  price: number;

  discount_price: number;

  images: ImageDto[];
}
