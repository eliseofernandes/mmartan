import { EntityRepository, Like, Repository } from 'typeorm';
import { ImageFindDto } from './dtos/image-find.dto';
import { ImageEntity } from './entities/image.entity';
import { IImageRepository } from './interfaces/image.repository.interface';

@EntityRepository(ImageEntity)
export class ImageRepository
  extends Repository<ImageEntity>
  implements IImageRepository {
  async findAll(
    imageFindDto: ImageFindDto,
  ): Promise<{ images: ImageEntity[]; total: number }> {
    imageFindDto.page = imageFindDto.page < 1 ? 1 : imageFindDto.page;
    imageFindDto.limit = imageFindDto.limit > 20 ? 20 : imageFindDto.limit;

    const { name } = imageFindDto;

    let where = [{}];
    if (name) {
      where = [
        {
          name: Like(`%${name}%`),
        },
      ];
    }

    const [images, total] = await this.findAndCount({
      select: ['name', 'url'],
      where,
      skip: (imageFindDto.page - 1) * imageFindDto.limit,
      take: +imageFindDto.limit,
    });

    return { images, total };
  }
}
