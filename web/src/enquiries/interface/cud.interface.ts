import { ResponseDTO } from 'src/dto/response.dto';

export interface CUDInterface<T> {
  create(data: T): Promise<ResponseDTO<T>>;

  update(id: any, payload: T): Promise<ResponseDTO<T>>;

  delete(id: any): Promise<ResponseDTO<T>>;
}
