import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Account, } from '@shared/domain/models/account.model';
import { RoleLevel, } from '@shared/domain/enums/role-level.enum';

@Entity({
  name: 'accounts',
  synchronize: true,
})
export class AccountEntity implements Account {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'int',
    default: 0,
  })
  coins: number | null;

  @Column({
    type: 'int',
    default: 0,
  })
  roleLevel: RoleLevel.BASIC;

  @Column({
    type: 'int',
    default: 0,
  })
  hoursPlayed: number;

  @Column({
    type: 'bool',
    default: false,
  })
  emailVerified: boolean;

  @Column({
    type: 'bool',
    default: false,
  })
  phoneNumberVerified: boolean;

  @Column({
    type: 'bool',
    default: false,
  })
  banned: boolean;

  @Column({
    type: 'bool',
    default: false,
  })
  twoFactor: boolean;

  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  twoFactorSecret: string | null;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}