import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EnquiryDTO } from './dto/enquiry.dto';
import { WebService } from './web.service';

@ApiTags('web')
@Controller('web')
export class WebController {
  constructor(private readonly service: WebService) {}

  @ApiOperation({
    description: 'Create user account',
  })
  @ApiProduces('json')
  @ApiConsumes('application/json')
  @ApiResponse({
    type: EnquiryDTO,
  })
  @Post('/enquiries/create')
  async createUser(@Body() payload: EnquiryDTO): Promise<EnquiryDTO> {
    const result = await this.service.createEnquiry(payload);
    console.log('result ', result);
    return result;
  }
}
