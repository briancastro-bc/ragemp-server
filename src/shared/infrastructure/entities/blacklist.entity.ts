import { v4, } from 'uuid';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User, } from '@shared/domain/models/user.model';
import { Blacklist, } from '@shared/domain/models/blacklist.model';
import { UserEntity } from './user.entity';

@Entity({
  name: 'blacklist',
  synchronize: true,
})
export class BlacklistEntity implements Blacklist {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 500,
  })  
  reason: string;

  @Column({
    type: 'bool',
    default: true,
    nullable: true,
  })
  permanent?: boolean | null;

  @Column({
    type: 'int',
    default: 0,
  })
  time?: number | null;

  @Column({
    type: 'bool',
    default: true,
  })
  active?: boolean | null;

  @ManyToOne(() => UserEntity, (user) => user.blacklists)
  user: User;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}