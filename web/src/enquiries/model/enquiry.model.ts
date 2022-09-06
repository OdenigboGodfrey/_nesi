import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EnquiryDocument = Enquiry & Document;

@Schema()
export class Enquiry {
  @Prop(String)
  name: string;
  @Prop(String)
  email: string;
  @Prop(String)
  message: string;
  @Prop(String)
  status: string;
  @Prop(Date)
  created_at: Date;
  @Prop(Date)
  updated_at: Date;
  @Prop(Date)
  deleted_at: Date;
  @Prop(String)
  uuid: string;
}

export const EnquirySchema = SchemaFactory.createForClass(Enquiry);
