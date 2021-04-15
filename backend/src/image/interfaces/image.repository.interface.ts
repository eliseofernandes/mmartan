import { ImageFindDto } from '../dtos/image-find.dto';
import { ImageEntity } from '../entities/image.entity';

export interface IImageRepository {
  findAll(
    queryDto: ImageFindDto,
  ): Promise<{ images: ImageEntity[]; total: number } | undefined>;
}
