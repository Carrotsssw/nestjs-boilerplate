import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { AppConfigEnv } from './config/config';

let morganMode: string;
switch (AppConfigEnv.nodeEnv) {
  case 'dev':
  case 'staging':
    morganMode = 'dev'
    break;
  default:
    morganMode = 'common'
}

@Module({
  imports: [
    MorganModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      // morgan minimal output(tiny)
      // :method :url :status :res[content-length] - :response-time ms
      useClass: MorganInterceptor(morganMode)
    },
    AppService
  ],
})
export class AppModule {}
