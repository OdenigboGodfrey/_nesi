import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RpcExceptionFilter } from './schematics/filters/rpc-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Nesi API')
    .setDescription('The official API for Nesi')
    .setVersion('1.0')
    .addTag('Nesi')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT || 3000).then(() => {
    console.log('Server started.');
  });
  app.useGlobalFilters(new RpcExceptionFilter());
  app.enableCors();
}
bootstrap();
process.on('uncaughtException', (err) => {
  console.error('Fatal error', err);
  //process.exit(1);
});
