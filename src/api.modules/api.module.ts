import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { HttpExceptionFilter } from './shared/http-exception.filter';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

const importExport = [
  UserModule,
  OrderModule,
];

@Module({
  imports: [
    ...importExport
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
  ],
  exports: [
    ...importExport
  ],
})
export class ApiModule {}