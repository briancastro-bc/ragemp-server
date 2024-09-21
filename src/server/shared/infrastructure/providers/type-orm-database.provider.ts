import { DataSource, } from 'typeorm';
import { injectable, } from 'inversify';

import {
  AccountEntity,
  UserEntity,
  JailEntity,
  GroupEntity,
  PhoneEntity,
  SpawnEntity,
  DiseaseEntity,
  ProfileEntity,
  CharacterEntity,
  BlacklistEntity,
  PermissionEntity,
} from '@shared/infrastructure/entities';

import { DatabaseProvider, } from '@server/shared/domain/providers/database.provider';

@injectable()
export class TypeOrmDatabaseProvider implements DatabaseProvider {
  private readonly _datasource: DataSource;

  constructor() {
    this._datasource = new DataSource({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT!,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        UserEntity,
        JailEntity,
        GroupEntity,
        PhoneEntity,
        SpawnEntity,
        DiseaseEntity,
        ProfileEntity,
        AccountEntity,
        CharacterEntity,
        BlacklistEntity,
        PermissionEntity,
      ],
      installExtensions: true,
      // synchronize: true,
      logging: true,
    });
  }

  async connect(): Promise<void> {
    try {
      if (this._datasource.isInitialized) return;

      await this._datasource.initialize();
    } catch (err) {
      process.exit(1);
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (!this._datasource.isInitialized) return;

      await this._datasource.destroy();
    } catch (err) {
      process.exit(1);
    }
  }

  get datasource(): DataSource {
    return this._datasource;
  }
}