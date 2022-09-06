import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ResponseDTO } from 'src/dto/response.dto';
import { EnquiryDTO } from './dto/enquiry.dto';
import { EnquiriesService } from './enquiries.service';
import {
  EventPattern,
  MessagePattern,
  RpcException,
} from '@nestjs/microservices';
import { HttpStatusName } from 'src/utils/utils.constants';

@Controller('enquiries')
export class EnquiriesController {
  constructor(private readonly service: EnquiriesService) {}
  // @Post('create')
  // @EventPattern({ cmd: '/enquiries/create' })
  @MessagePattern({ cmd: '/enquiries/create' })
  async create(data: EnquiryDTO): Promise<ResponseDTO<EnquiryDTO>> {
    //return this.service.create(data);
    const response = await this.service.create(data);
    console.log('data', data, response);
    if (response.status) {
      console.log('rpc exception');
      throw new RpcException({
        message: response.message,
        statusCode: HttpStatus.BAD_REQUEST,
        name: HttpStatusName.BAD_REQUEST,
      });
      //
    } else {
      console.log('response');
      return response;
    }
  }
  // @Get('all')
  @MessagePattern({ cmd: '/enquiries/all' })
  async enquiries(): Promise<ResponseDTO<EnquiryDTO[]>> {
    const response: ResponseDTO<EnquiryDTO[]> =
      await this.service.getEnquiryAll();
    return response;
  }
}
