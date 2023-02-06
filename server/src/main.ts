import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const config = new DocumentBuilder()
      .setTitle('Converter')
      .setDescription('Конвертер величин')
      .setVersion('1.0')
      .addTag('temperature', 'Преобразование температуры')
      .addTag('pressure', 'Преобразование давления')
      .addTag('consumption', 'Преобразование расхода')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(PORT, () => console.log(`Server run on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
