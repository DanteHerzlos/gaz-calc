import { Test, TestingModule } from '@nestjs/testing';
import { PressureService } from './pressure.service';

describe('PressureService', () => {
  let service: PressureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PressureService],
    }).compile();

    service = module.get<PressureService>(PressureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
