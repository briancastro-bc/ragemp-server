import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

import { User, } from '@shared/domain/models/user.model';
import { Account, } from '@shared/domain/models/account.model';
import { Character, } from '@shared/domain/models/character.model';
// import { Membership, } from '@shared/domain/models/membership.model';
import { AccountEntity } from './account.entity';
import { CharacterEntity } from './character.entity';
import { BlacklistEntity } from './blacklist.entity';
import { Blacklist } from '@shared/domain/models/blacklist.model';

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

  @Column({
    type: 'cidr',
    unique: true,
  })
  ip: string;

  @Column({
    type: 'bool',
    default: false,
  })
  quizzApproved: boolean;

  @Column({
    type: 'smallint',
    default: 0,
    nullable: true,
  })
  quizzCorrectAnswers: number | null;

  @Column({
    type: 'smallint',
    default: 0,
    nullable: true,
  })
  quizzIncorrectAnswers: number | null;

  @OneToOne(() => AccountEntity)
  @JoinColumn()
  account: Account;

  // @OneToOne(() => MembershipEntity)
  // @JoinColumn()
  // membership: Membership;

  @OneToMany(() => BlacklistEntity, (blacklist) => blacklist.user)
  blacklists: Array<Blacklist>;

  @ManyToMany(() => CharacterEntity)
  @JoinTable()
  characters: Array<Character>;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}