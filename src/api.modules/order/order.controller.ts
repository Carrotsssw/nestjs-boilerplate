import { Controller, Get, Post, Query, Param, Headers, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { IApi } from '../shared/api.interface';
import { IOrder } from './interfaces/order.interface';

@Controller('order')
export class OrderController extends IApi {
  constructor(private readonly orderService: OrderService) {
    super()
    this.prefix = 'hello'
  }

  @Get()
  getOrder(@Query() query): Promise<IOrder[]> {
    return this.orderService.getOrder(query);
  }

  @Post()
  createOrder(@Body() order: IOrder): Promise<Object> {
    return this.orderService.createOrder(order);
  }
}
