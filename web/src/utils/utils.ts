export const Log = (message?: any, ...optionalParams: any[]): void => {
  console.log(message, ...optionalParams);
};

export const NODE_ENV = process.env.NODE_ENV || 'development';

export enum NODE_ENVIRONMENT {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
