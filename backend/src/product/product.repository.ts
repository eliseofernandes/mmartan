import { EntityRepository, Like, Repository } from 'typeorm';
import { IProductRepository } from './interfaces/product.repository.interface';
import { ProductEntity } from './entities/product.entity';
import { ProductFindDto } from './dtos/product-find.dto';

@EntityRepository(ProductEntity)
export class ProductRepository
  extends Repository<ProductEntity>
  implements IProductRepository {
  async findAll(
    productFindDto: ProductFindDto,
  ): Promise<{ products: ProductEntity[]; total: number }> {
    productFindDto.page = productFindDto.page < 1 ? 1 : productFindDto.page;
    productFindDto.limit =
      productFindDto.limit > 20 ? 20 : productFindDto.limit;

    const { name } = productFindDto;

    let where = [{}];
    if (name) {
      where = [
        {
          name: Like(`%${name}%`),
        },
        {
          description: Like(`%${name}%`),
        },
      ];
    }

    const [products, total] = await this.findAndCount({
      relations: ['images'],
      where,
      skip: (productFindDto.page - 1) * productFindDto.limit,
      take: +productFindDto.limit,
    });

    return { products, total };
  }
}
