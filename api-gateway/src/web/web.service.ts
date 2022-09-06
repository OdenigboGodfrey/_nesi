import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ClientProxyService } from 'src/client-proxy/client-proxy.service';
import { UniqueAppQueue } from 'src/client-proxy/client-proxy.utils';
import { EnquiryDTO } from './dto/enquiry.dto';

@Injectable()
export class WebService {
  constructor(
    // private readonly clientProxySrv: ClientProxyService,
    @Inject('RMQ_SERVICE') private readonly client: ClientProxy,
  ) {}

  async createEnquiry(payload: EnquiryDTO): Promise<any> {
    //Promise<EnquiryDTO>
    const res = await this.client.connect();
    console.log('res', res);
    const result = await this.client.send<any, any>(
      { cmd: '/enquiries/create' },
      payload,
    );
    // const result = await this.client.send(
    //   { cmd: '/enquiries/create' },
    //   payload,
    // );

    console.log('lastValueFrom', result);
    // console.log('lastValueFrom', await lastValueFrom(result));

    // return await this.clientProxySrv.getClient<any, any>('/enquiries/create', {
    //   queue: UniqueAppQueue.WEB_SERVICE_QUEUE,
    //   data: payload,
    // });
  }
}
