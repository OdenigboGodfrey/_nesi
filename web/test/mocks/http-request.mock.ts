import { ResponseDTO } from "./../../src/dto/response.dto";
import { GetRequestDTO, SendRequestDTO } from "./../../src/http-request/request.dto";
import { statusEnum } from "./../../src/items/enums/util.enum";

export class MockHttpRequest<T>  {
    dataStore: T[] = [];

    
    
    getRequest<K>({url}) {
        const response = new ResponseDTO<K[]>();
        response.code = statusEnum.ok;    
        response.data = [];
        response.message = "ok";
        response.status = true;
        
        return response;
    }
  
    sendRequest<K>({url, data, method }) {
        const response = new ResponseDTO<K>();
        response.code = statusEnum.successful;    
        response.data = data;
        response.message = "created";
        response.status = true;
        
        return response;
    }

}
