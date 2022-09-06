import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientProxyModule } from 'src/client-proxy/client-proxy.module';
import { EnquiriesController } from './enquiries.controller';
import { EnquiriesService } from './enquiries.service';
import { EnquiryRepository } from './interface/enquiry.repository';
import { Enquiry, EnquirySchema } from './model/enquiry.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Enquiry.name, schema: EnquirySchema }]),
    ClientProxyModule,
  ],
  controllers: [EnquiriesController],
  providers: [
    EnquiriesService,
    {
      provide: 'EnquiryRepositoryInterface',
      useClass: EnquiryRepository,
    },
  ],
})
export class EnquiriesModule {}
