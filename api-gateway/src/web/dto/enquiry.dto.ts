import { ApiProperty } from '@nestjs/swagger';

export class EnquiryDTO {
  public constructor(init?: Partial<EnquiryDTO>) {
    Object.assign(this, init);
  }
  @ApiProperty()
  uuid?: string;
  @ApiProperty({
    required: true,
  })
  name: string;
  @ApiProperty({
    required: true,
  })
  message: string;
  @ApiProperty({
    required: true,
  })
  email: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  created_at?: Date;
  @ApiProperty()
  deleted_at?: Date;
  @ApiProperty()
  updated_at?: Date;
}
