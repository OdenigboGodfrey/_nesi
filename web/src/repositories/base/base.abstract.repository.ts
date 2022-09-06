import { Model } from 'mongoose';
import { BaseInterfaceRepository } from './base.interface.repository';

export abstract class BaseAbstractRepository<T> implements BaseInterfaceRepository<T> {

  private entity: Model<T>;

  protected constructor(entity: Model<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    const _model = new this.entity(data);
    await _model.save();
    
    return _model;
  }


  public async findOneById(uuid: any): Promise<T> {
    return await this.entity.findOne(uuid);
  }

  public async findOneByCondition(filterCondition: any): Promise<T> {
    return await this.entity.findOne({where: filterCondition});
  }
  public async findByCondition(filterCondition: any): Promise<T[]> {
    return await this.entity.find({where: filterCondition});
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find();
  }

  public async remove(id: any): Promise<T> {
    const _model = this.entity.findOne(id);
    return await _model.deleteOne();
  }

  public getRepo(): Model<T> {
    return this.entity;
  }

}