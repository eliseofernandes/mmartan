import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductFindDto } from './dtos/product-find.dto';
import { IProduct } from './interfaces/product.interface';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRespository: ProductRepository,
  ) {}

  async findAll(
    productFindDto: ProductFindDto,
  ): Promise<{ products: IProduct[]; total: number }> {
    const products = await this.productRespository.findAll(productFindDto);
    return products;
  }
}
