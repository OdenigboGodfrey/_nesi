import { Test, TestingModule } from '@nestjs/testing';
import { MockRepo } from './../../test/mocks/repo.mock';
import { EnquiryDTO } from './dto/enquiry.dto';
import { EnquiriesService } from './enquiries.service';

describe('EnquiriesService', () => {
  /**
   * it should create a new enquiry
   */
  let service: EnquiriesService;
  const mockData: EnquiryDTO = {
    email: 'test@yahoo.com',
    message: 'I would love to sign up',
    name: 'Jane Doe',
    status: 'pending',
  };

  beforeEach(async () => {
    const enquiryServiceMockRepo = new MockRepo<EnquiryDTO>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnquiriesService,
        {
          provide: 'EnquiryRepositoryInterface',
          useValue: enquiryServiceMockRepo,
        },
      ],
    }).compile();

    service = module.get<EnquiriesService>(EnquiriesService);
  });

  it('should be create a new enquiry', async () => {
    const result = await service.create(mockData);
    expect(result.status).toEqual(true);
    expect(result.data.uuid).toBeDefined();
  });
  it('should be get list of enquiries', async () => {
    await service.create(mockData);
    const result = await service.getEnquiryAll();
    expect(result.status).toEqual(true);
    expect(result.data.length).toBeGreaterThan(0);
  });
});
