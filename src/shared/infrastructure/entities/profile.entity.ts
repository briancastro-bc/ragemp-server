import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Sex, } from '@shared/domain/enums/sex.enum';
import { Profile, } from '@shared/domain/models/profile.model';

@Entity({
  name: 'profiles',
  synchronize: true,
})
export class ProfileEntity implements Profile {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'smallint',
  })
  age: number;
  
  @Column({
    type: 'char',
    length: 10,
  })
  sex: Sex;

  @Column({
    type: 'smallint',
  })
  height: number;

  @Column({
    type: 'smallint',
  })
  weight: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  nacionality: string;

  @Column({
    type: 'text',
  })
  biography: string;

  @Column({
    type: 'text',
  })
  physicalDescription: string;

  @Column({
    type: 'text',
  })
  psychologicalDescription: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}