import { inject, injectable, } from 'inversify';

import { User, } from '@shared/domain/models/user.model';
import { Blacklist, } from '@shared/domain/models/blacklist.model';
import { BlacklistEntity, } from '@shared/infrastructure/entities';
import { DatabaseProvider, } from '@server/shared/domain/providers/database.provider';
import { BlacklistRepository, } from '@server/shared/domain/repositories/blacklist.repository';

@injectable()
export class DatabaseBlacklistRepository implements BlacklistRepository {
  constructor(
    @inject('DatabaseProvider') private readonly database: DatabaseProvider,
  ) {}

  async findByUser(user: User): Promise<Blacklist | null> {
    try {
      const blacklistByUser = await this.database.datasource
        .getRepository(BlacklistEntity)
        .findOne({
          relations: {
            user: true,
          },
          where: {
            user: {
              id: user.id,
            },
          },
          order: {
            createdAt: 'desc',
          },
        });
      
      if (!blacklistByUser) return null;

      return blacklistByUser;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async banById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async banByUsername(username: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async banByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async banByIp(ip: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async unBanById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async unBanByUsername(username: string): Promise<true | false> {
    try {
      const unban = await this.database.datasource
        .getRepository(BlacklistEntity)
        .update(
          { 
            user: {
              username,
            },
          }, 
          {
            active: false,
            time: 0,
          },
        );
      
      if (unban.affected === 0) return false;

      return true;
    } catch (err) {
      return false;
    }
  }

  async unBanByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async unBanByIp(ip: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}