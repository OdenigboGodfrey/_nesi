export class ResponseDTO<T> {
  // @ApiExtraModels(UserDto)
  status = false;
  data: T;
  message = '';
  extra_data: any[] = [];
}
