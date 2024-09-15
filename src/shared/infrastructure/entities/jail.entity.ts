import { v4, } from 'uuid';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Jail, } from '@shared/domain/models/jail.model';
import { JailType, } from '@shared/domain/enums/jail-type.enum';
import { Character, } from '@shared/domain/models/character.model';

import { CharacterEntity, } from './character.entity';

@Entity({
  name: 'jails',
  synchronize: true,
})
export class JailEntity implements Jail {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'char',
    length: 3,
  })
  type: JailType;

  @Column({
    type: 'int',
    default: 0,
  })
  time: number;

  @Column({
    type: 'varchar',
    length: 500,
  })
  reason: string;
  
  @Column({
    type: 'bool',
    default: false,
  })
  active: boolean;

  @ManyToOne(() => CharacterEntity, (character) => character.issuedJails)
  admin: Character;

  @ManyToOne(() => CharacterEntity, (character) => character.receivedJails)
  offender: Character;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}