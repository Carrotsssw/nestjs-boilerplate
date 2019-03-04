import { Injectable } from '@nestjs/common';
import { IOrder } from './interfaces/order.interface';

@Injectable()
export class OrderService {
  async getOrder(query): Promise<IOrder[]> {
    let result = new Promise<IOrder[]>((resolve) => {
      resolve([{
        id: 'test001',
        net: '677.00',
        order_item: [{
          id: '12033',
          product_sku_id: '9123',
          product_sku_name: 'Blue Shirt',
          product_sku_amount: '1.00'
        }],
        status: 1,
        create_time: "2019-01-10T10:36:21.000Z",
        update_time: "2019-01-10T10:36:21.000Z",
      }])
    })
    return result
  }

  async createOrder(payload): Promise<Object> {
    return {
      code: 200,
      success: true 
    };
  }
}