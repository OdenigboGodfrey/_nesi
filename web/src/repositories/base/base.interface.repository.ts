import { Model } from 'mongoose';

export interface BaseInterfaceRepository<T> {
  create(data: T | any): Promise<T>;

  findOneById(id: any): Promise<T>;

  findByCondition(filterCondition: any): Promise<T[]>;

  findOneByCondition(filterCondition: any): Promise<T>;

  findAll(): Promise<T[]>;

  remove(id: any): Promise<T>;
  getRepo(): Model<T>;
}
