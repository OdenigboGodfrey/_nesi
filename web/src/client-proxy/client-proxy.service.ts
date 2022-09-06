import { Injectable, Inject } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
//import { UniqueAppQueue } from './../utils/utils.constants';
import { assertRabbitMQUrl, UniqueAppQueue } from './client-proxy.utils';
// import { assertRabbitMQUrl } from '@utils/utils.function';

/**
 * Will be used to connect to other microservices if needed
 */
@Injectable()
export class ClientProxyService {
  constructor(@Inject('CLIENT_PROXY_SERVICE') private client: ClientProxy) {}

  async onApplicationBootstrap() {
    console.log('Connecting Application');
    await this.client.connect();
  }

  async getClient<T, U>(
    url: string,
    payload: {
      data?: T;
      queue: UniqueAppQueue;
    },
  ): Promise<U> {
    if (payload.queue) {
      this.client = ClientProxyFactory.create({
        options: { ...assertRabbitMQUrl(payload.queue) },
        transport: Transport.RMQ,
      });
    }

    const value$ = this.client.emit<U, T>({ cmd: url }, payload.data);
    return await firstValueFrom(value$);
  }
}
