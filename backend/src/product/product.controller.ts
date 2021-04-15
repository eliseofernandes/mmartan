import { Controller, Get, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductFindDto } from './dtos/product-find.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findProducts(@Query() query: ProductFindDto) {
    const products = await this.productService.findAll(query);
    return products;
  }
}
