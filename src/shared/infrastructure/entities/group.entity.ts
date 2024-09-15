import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Group, } from '@shared/domain/models/group.model';
import { Permission, } from '@shared/domain/models/permission.model';

import { PermissionEntity, } from './permission.entity';

@Entity({
  name: 'groups',
  synchronize: true,
})
export class GroupEntity implements Group {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  codeName: string;

  @Column({
    type: 'varchar',
    length: 500,
  })
  description: string;

  @ManyToMany(() => PermissionEntity)
  @JoinTable()
  permissions: Array<Permission>;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}