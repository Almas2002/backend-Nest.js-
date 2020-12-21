import { Test, TestingModule } from '@nestjs/testing';
import { PizzController } from './pizz.controller';

describe('PizzController', () => {
  let controller: PizzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzController],
    }).compile();

    controller = module.get<PizzController>(PizzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
