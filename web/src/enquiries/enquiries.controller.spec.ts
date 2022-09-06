import { Test, TestingModule } from '@nestjs/testing';
import { EnquiriesController } from './enquiries.controller';

describe('EnquiriesController', () => {
  let controller: EnquiriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnquiriesController],
    }).compile();

    controller = module.get<EnquiriesController>(EnquiriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
