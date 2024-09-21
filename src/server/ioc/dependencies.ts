import { Injectable, } from '@ioc/utils';

import { UsefulImplementationService, } from '@shared/infrastructure/services/useful-implementation.service';

import { AuthUsecase, } from '@server/contexts/auth/application/auth.usecase';
import { DatabaseUserRepository, } from '@server/shared/infrastructure/repositories/database-user.repository';
import { TypeOrmDatabaseProvider, } from '@server/shared/infrastructure/providers/type-orm-database.provider';
import { DatabaseBlacklistRepository, } from '@server/shared/infrastructure/repositories/database-blacklist.repository';

export default [
  {
    token: 'DatabaseProvider',
    provider: TypeOrmDatabaseProvider,
    type: 'Constructor',
    scope: 'Singleton',
  },
  {
    token: 'UsefulService',
    provider: UsefulImplementationService,
    type: 'Constructor',
    scope: 'Singleton',
  },
  {
    token: 'UserRepository',
    provider: DatabaseUserRepository,
    type: 'Constructor',
    scope: 'Singleton',
  },
  {
    token: 'BlacklistRepository',
    provider: DatabaseBlacklistRepository,
    type: 'Constructor',
    scope: 'Singleton',
  },
  {
    token: 'AuthUsecase',
    provider: AuthUsecase,
    type: 'Constructor',
    scope: 'Singleton',
  },
] as Array<Injectable>;