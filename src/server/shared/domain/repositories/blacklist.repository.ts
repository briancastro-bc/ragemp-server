import { User, } from '@shared/domain/models/user.model';
import { Blacklist, } from '@shared/domain/models/blacklist.model';

export interface BlacklistRepository {
  findByUser(user: User): Promise<Blacklist | null>;
  banById(id: string): Promise<User>;
  banByUsername(username: string): Promise<User>;
  banByEmail(email: string): Promise<User>;
  banByIp(ip: string): Promise<User>;
  unBanById(id: string): Promise<User>;
  unBanByUsername(username: string): Promise<true | false>;
  unBanByEmail(email: string): Promise<User>;
  unBanByIp(ip: string): Promise<User>
}