import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Permission, } from '@shared/domain/models/permission.model';

@Entity({
  name: 'permissions',
  synchronize: true,
})
export class PermissionEntity implements Permission {
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

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}