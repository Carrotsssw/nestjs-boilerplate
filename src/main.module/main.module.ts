import { Module } from '@nestjs/common';
import { AppController } from './main.controller';
import { AppService } from './main.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { ConfigModule } from '../config/config.module';
import { ApiModule } from '../api.modules/api.module';

let morganMode: string;
switch (process.env.NODE_ENV) {
  case 'dev':
  case 'staging':
    morganMode = 'dev';
    break;
  default:
    morganMode = 'common';
}

@Module({
  imports: [
    MorganModule.forRoot(),
    ConfigModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      // morgan minimal output(tiny)
      // :method :url :status :res[content-length] - :response-time ms
      useClass: MorganInterceptor(morganMode)
    },
  ],
})
export class AppModule {
  constructor() {
    
  }
}
