import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aplica el ValidationPipe globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      // Opciones de configuración (opcional)
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza error si hay propiedades no definidas
      transform: true, // Transforma los tipos de datos (útil para números, booleanos, etc.)
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('TaxiE24')
    .setDescription(
      'Conjunto de APIs que otras compañías puedan utilizar para gestionar su flota de pasajeros',
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
