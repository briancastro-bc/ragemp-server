import { inject, injectable, } from 'inversify';

import { User, } from '@shared/domain/models/user.model';
import { UserEntity, } from '@shared/infrastructure/entities';
import { UserRepository, } from '@server/shared/domain/repositories/user.repository';
import { DatabaseProvider, } from '@server/shared/domain/providers/database.provider';

@injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @inject('DatabaseProvider') private readonly database: DatabaseProvider,
  ) {}

  async findByIp(ip: string): Promise<User | null> {
    try {
      const user = await this.database.datasource
        .getRepository<User>(UserEntity)
        .findOne({
          where: {
            ip,
          },
        });

      if (!user) return null;
      
      return user;
    } catch (err) {
      return null;
    }
  }

  async findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  async findByUsername(username: string): Promise<User | null> {
    try {
      const user = await this.database.datasource
        .getRepository<User>(UserEntity)
        .findOne({
          where: {
            username,
          },
        });

      if (!user) return null;
      
      return user;
    } catch (err) {
      return null;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<Array<User>> {
    throw new Error('Method not implemented');
  }

  async create(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}