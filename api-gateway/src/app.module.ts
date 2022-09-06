import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebService } from './web/web.service';
import { WebController } from './web/web.controller';
import { WebModule } from './web/web.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ClientProxyModule } from './client-proxy/client-proxy.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ClientProxyModule,
    WebModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
