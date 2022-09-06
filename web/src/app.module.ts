import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnquiriesService } from './enquiries/enquiries.service';
import { EnquiriesController } from './enquiries/enquiries.controller';
import { EnquiriesModule } from './enquiries/enquiries.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientProxyModule } from './client-proxy/client-proxy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_COLLECTION}`,
      {
        autoCreate: true,
      },
    ),
    ClientProxyModule,
    EnquiriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
