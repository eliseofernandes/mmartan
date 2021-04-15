import { Controller, Get, Query } from '@nestjs/common';
import { ImageFindDto } from './dtos/image-find.dto';
import { ImageService } from './image.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async findProducts(@Query() query: ImageFindDto) {
    const products = await this.imageService.findAll(query);
    return products;
  }
}
