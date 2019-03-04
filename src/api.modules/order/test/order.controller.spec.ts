import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from '../order.controller';
import { OrderService } from '../order.service';

describe('Order Controller', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      components: [OrderService],
      controllers: [OrderController],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  describe('test getOrder', () => {
    test('getOrder should be defined', () => {
      expect(controller.getOrder).toBeDefined();
    });
    // TODO: check query value if-else
    test('getOrder call return value', async () => {
      const result = [{
        id: 'O0119M8OJWI00028',
        url: 'WPQD7T8',
        net: '677.00',
        order_item: [{
          id: '16009938',
          product_sku_id: '2108339',
          product_sku_name: 'retestJa',
          product_sku_amount: '1.00'
        }],
        status: 1,
        create_time: "2019-01-10T10:36:21.000Z",
        update_time: "2019-01-10T10:36:21.000Z",
      }];
      expect.assertions(1);
      expect(await controller.getOrder({current_state: 'pending'})).toEqual(result);
    });
  });
});
