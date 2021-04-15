import { ProductFindDto } from '../dtos/product-find.dto';
import { ProductEntity } from '../entities/product.entity';

export interface IProductRepository {
  findAll(
    queryDto: ProductFindDto,
  ): Promise<{ products: ProductEntity[]; total: number } | undefined>;
}
