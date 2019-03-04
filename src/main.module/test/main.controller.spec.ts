import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../main.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "App Started!"', () => {
      expect(appController.getStart()).toBe('App Started!');
    });
  });
});
