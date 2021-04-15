import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api - mmartan')
    .setDescription('')
    .setVersion('1.0')
    .addTag('Product')
    .addTag('Image')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
