import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ImageModule } from './image/image.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/entities/product.entity';
import { ImageEntity } from './image/entities/image.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    ImageModule,
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [ProductEntity, ImageEntity],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
