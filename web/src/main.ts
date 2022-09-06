import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { assertRabbitMQUrl } from './client-proxy/client-proxy.utils';
import { Log } from './utils/utils';
import { ConsumerDeserializer, IncomingRequest } from '@nestjs/microservices';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

class IdDeserializer implements ConsumerDeserializer {
  deserialize(value: any): IncomingRequest {
    return value;
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    // {
    //   transport: Transport.RMQ,
    //   options: {
    //     ...assertRabbitMQUrl(),
    //     ...{ deserializer: new IdDeserializer() },
    //   },
    // },
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 9080,
      },
    },
  );
  (await app).listen().then(() => {
    Log('Service is listening');
  });
}
bootstrap();
