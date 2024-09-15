import { v4, } from 'uuid';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Spawn, } from '@shared/domain/models/spawn.model';
import { Character, } from '@shared/domain/models/character.model';
import { CharacterEntity } from './character.entity';

@Entity({
  name: 'spawns',
  synchronize: true,
})
export class SpawnEntity implements Spawn {
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
    length: 500,
    nullable: true
  })
  description: string | null;

  @Column({
    type: 'numeric',
  })
  positionX: number;

  @Column({
    type: 'numeric',
  })
  positionY: number;

  @Column({
    type: 'numeric',
  })
  positionZ: number;

  @Column({
    type: 'bool',
    default: false,
  })
  active: boolean;

  @ManyToOne(() => CharacterEntity, (character) => character.spawns)
  character: Character;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}