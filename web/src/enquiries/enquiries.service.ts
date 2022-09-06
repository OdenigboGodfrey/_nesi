import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ResponseDTO } from './../dto/response.dto';
import { Log } from '../utils/utils';
import { EnquiryDTO } from './dto/enquiry.dto';
import { CUDInterface } from './interface/cud.interface';
import { EnquiryRepositoryInterface } from './interface/repository.interface';
import { ClientProxyService } from 'src/client-proxy/client-proxy.service';

@Injectable()
export class EnquiriesService implements CUDInterface<EnquiryDTO> {
  constructor(
    @Inject('EnquiryRepositoryInterface')
    private readonly enquiryRepository: EnquiryRepositoryInterface,
    private readonly clientProxySrv: ClientProxyService,
  ) {}
  async update(id: any, payload: any): Promise<ResponseDTO<EnquiryDTO>> {
    throw new Error('Method not implemented.');
  }
  async delete(id: any): Promise<ResponseDTO<EnquiryDTO>> {
    throw new Error('Method not implemented.');
  }

  async create(payload: EnquiryDTO): Promise<ResponseDTO<EnquiryDTO>> {
    const response = new ResponseDTO<EnquiryDTO>();
    try {
      const { email, message, name } = payload;
      if (!email || !message || !name) {
        response.message = `Fields 'email', 'name', 'message' are required`;
        return response;
      }
      payload.uuid = randomUUID();
      await this.enquiryRepository.create(payload);
      response.status = true;
      response.message = 'Enquiry created';
      response.data = payload;
    } catch (e) {
      Log(e);
      response.extra_data = e.toString();
    }
    return response;
  }

  async getEnquiryById(uuid: string): Promise<ResponseDTO<EnquiryDTO>> {
    const response = new ResponseDTO<EnquiryDTO>();
    try {
      const result = await this.enquiryRepository.findOneById(uuid);
      response.status = true;
      response.data = result;
      response.message = 'Enquiry gotten';
    } catch (e) {
      Log(e);
      response.extra_data = e.toString();
    }
    return response;
  }

  async getEnquiryAll(): Promise<ResponseDTO<EnquiryDTO[]>> {
    const response = new ResponseDTO<EnquiryDTO[]>();
    try {
      const result = await this.enquiryRepository.findAll();
      response.status = true;
      response.data = result;
      response.message = 'Enquiries gotten';
    } catch (e) {
      Log(e);
      response.extra_data = e.toString();
    }
    return response;
  }
}
