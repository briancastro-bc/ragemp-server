import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User, } from '@shared/domain/models/user.model';
import { Account, } from '@shared/domain/models/account.model';
import { Character, } from '@shared/domain/models/character.model';
import { Membership, } from '@shared/domain/models/membership.model';

@Entity({
  name: 'users',
  synchronize: true,
})
export class UserEntity implements User {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 320,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  password: string | null;

  @Column({
    type: 'varchar',
    length: 40,
    unique: true,
  })
  username: string;

  @Column()
  account: Account;

  @Column()
  membership: Membership;

  @Column()
  characters: Character[];

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}