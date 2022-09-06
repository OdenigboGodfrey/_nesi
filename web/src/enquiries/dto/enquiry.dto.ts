export class EnquiryDTO {
  public constructor(init?: Partial<EnquiryDTO>) {
    Object.assign(this, init);
  }
  uuid?: string;
  name: string;
  message: string;
  email: string;
  status: string;
  created_at?: Date = new Date();
  deleted_at?: Date;
  updated_at?: Date;
}
