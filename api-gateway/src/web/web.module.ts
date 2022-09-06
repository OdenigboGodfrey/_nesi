import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientProxyModule } from 'src/client-proxy/client-proxy.module';
import { ClientProxyService } from 'src/client-proxy/client-proxy.service';
import {
  assertRabbitMQUrl,
  UniqueAppQueue,
} from 'src/client-proxy/client-proxy.utils';
import { WebController } from './web.controller';
import { WebService } from './web.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // ClientProxyModule,
    ClientsModule.register([
      //   {
      //     name: 'RMQ_SERVICE',
      //     transport: Transport.RMQ,
      //     options: { ...assertRabbitMQUrl() },
      //   },
      {
        name: 'RMQ_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 9080,
        },
      },
    ]),
  ],
  controllers: [WebController],
  // providers: [WebService, ClientProxyService],
  providers: [WebService],
})
export class WebModule {}
