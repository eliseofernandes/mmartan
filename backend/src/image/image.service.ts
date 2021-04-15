import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageFindDto } from './dtos/image-find.dto';
import { ImageDto } from './dtos/image.dto';
import { ImageRepository } from './image.repository';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageRepository)
    private imageRespository: ImageRepository,
  ) {}
  async findAll(
    imageFindDto: ImageFindDto,
  ): Promise<{ images: ImageDto[]; total: number }> {
    const images = await this.imageRespository.findAll(imageFindDto);
    return images;
  }
}
