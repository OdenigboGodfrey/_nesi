export enum HttpStatusName {
  BAD_REQUEST = 'BAD_REQUEST',
  CONFLICT = 'CONFLICT',
  OK = 'OK',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_MODIFIED = 'NOT_MODIFIED',
  BAD_GATEWAY = 'BAD_GATEWAY',
  CREATED = 'CREATED',
  FAILED_DEPENDENCY = 'FAILED_DEPENDENCY',
  NOT_FOUND = 'NOT_FOUND',
  GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT',
  FOUND = 'FOUND',
  CONTINUE = 'CONTINUE',
  SWITCHING_PROTOCOLS = 'SWITCHING_PROTOCOLS',
  PROCESSING = 'PROCESSING',
  EARLYHINTS = 'EARLYHINTS',
  ACCEPTED = 'ACCEPTED',
  NON_AUTHORITATIVE_INFORMATION = 'NON_AUTHORITATIVE_INFORMATION',
  NO_CONTENT = 'NO_CONTENT',
  RESET_CONTENT = 'RESET_CONTENT',
  PARTIAL_CONTENT = 'PARTIAL_CONTENT',
  AMBIGUOUS = 'AMBIGUOUS',
  MOVED_PERMANENTLY = 'MOVED_PERMANENTLY',
  SEE_OTHER = 'SEE_OTHER',
  TEMPORARY_REDIRECT = 'TEMPORARY_REDIRECT',
  PERMANENT_REDIRECT = 'PERMANENT_REDIRECT',
  PAYMENT_REQUIRED = 'PAYMENT_REQUIRED',
  METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
  NOT_ACCEPTABLE = 'NOT_ACCEPTABLE',
  PROXY_AUTHENTICATION_REQUIRED = 'PROXY_AUTHENTICATION_REQUIRED',
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',
  GONE = 'GONE',
  LENGTH_REQUIRED = 'LENGTH_REQUIRED',
  PRECONDITION_FAILED = 'PRECONDITION_FAILED',
  PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE',
  URI_TOO_LONG = 'URI_TOO_LONG',
  UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE',
  REQUESTED_RANGE_NOT_SATISFIABLE = 'REQUESTED_RANGE_NOT_SATISFIABLE',
  EXPECTATION_FAILED = 'EXPECTATION_FAILED',
  I_AM_A_TEAPOT = 'I_AM_A_TEAPOT',
  MISDIRECTED = 'MISDIRECTED',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
  PRECONDITION_REQUIRED = 'PRECONDITION_REQUIRED',
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP_VERSION_NOT_SUPPORTED',
}

export const appTmpPath = '/var/tmp';
export const logPath = '/logs/auth_service';
