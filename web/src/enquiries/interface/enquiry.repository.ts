import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/repositories/base/base.abstract.repository';
import { Enquiry, EnquiryDocument } from '../model/enquiry.model';
import { EnquiryRepositoryInterface } from './repository.interface';

@Injectable()
export class EnquiryRepository
  extends BaseAbstractRepository<EnquiryDocument>
  implements EnquiryRepositoryInterface
{
  constructor(
    @InjectModel(Enquiry.name)
    private readonly serviceModel: Model<EnquiryDocument>,
  ) {
    super(serviceModel);
  }
}
