import { Test, TestingModule } from '@nestjs/testing';
import { PizzService } from './pizz.service';

describe('PizzService', () => {
  let service: PizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzService],
    }).compile();

    service = module.get<PizzService>(PizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
