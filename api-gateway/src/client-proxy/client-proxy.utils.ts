import { NODE_ENV, NODE_ENVIRONMENT } from 'src/utils/utils';

export const assertRabbitMQUrl = (queueName?: string): RabbitMQConfig => {
  if (NODE_ENV === NODE_ENVIRONMENT.DEVELOPMENT) {
    return {
      urls: [process.env.RABBIT_MQ_DEV_URL],
      queue: queueName ?? 'nesi_web_service_queue',
      queueOptions: { durable: false },
    };
  } else {
    return {
      urls: [process.env.RABBIT_MQ_PROD_URL],
      queue: queueName ?? 'nesi_web_service_queue',
      queueOptions: { durable: false },
    };
  }
};

export enum UniqueAppQueue {
  WEB_SERVICE_QUEUE = 'nesi_web_service_queue',
}

export class RabbitMQConfig {
  urls: string[];
  queue: string;
  queueOptions: {
    durable: boolean;
  };
}
