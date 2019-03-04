import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  getStart(): string {
    return 'App Started!';
  }
}
