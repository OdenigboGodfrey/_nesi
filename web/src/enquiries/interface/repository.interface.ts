import { Model } from 'mongoose';
import { EnquiryDocument } from '../model/enquiry.model';
import { BaseInterfaceRepository } from './../../repositories/base/base.interface.repository';

export type EnquiryRepositoryInterface =
  BaseInterfaceRepository<EnquiryDocument>;

// export interface EnquiryRepositoryInterface
//   extends BaseInterfaceRepository<EnquiryDocument> {}
