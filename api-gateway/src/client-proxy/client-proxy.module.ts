import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ClientProxyService } from './client-proxy.service';
import { assertRabbitMQUrl } from './client-proxy.utils';

@Module({
  providers: [
    ClientProxyService,
    {
      provide: 'CLIENT_PROXY_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create({
          options: { ...assertRabbitMQUrl() },
          transport: Transport.RMQ,
        });
      },
    },
  ],
  exports: [ClientProxyService, 'CLIENT_PROXY_SERVICE'],
})
export class ClientProxyModule {}
