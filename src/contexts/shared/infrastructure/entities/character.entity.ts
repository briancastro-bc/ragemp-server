import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import { Jail, } from '@shared/domain/models/jail.model';
import { Spawn, } from '@shared/domain/models/spawn.model';
import { Group, } from '@shared/domain/models/group.model';
import { Phone, } from '@shared/domain/models/phone.model';
import { Disease, } from '@shared/domain/models/disease.model';
import { Profile, } from '@shared/domain/models/profile.model';
import { Character, } from '@shared/domain/models/character.model';
import { Permission, } from '@shared/domain/models/permission.model';

import { JailEntity, } from './jail.entity';
import { PhoneEntity, } from './phone.entity';
import { GroupEntity, } from './group.entity';
import { SpawnEntity, } from './spawn.entity';
import { ProfileEntity, } from './profile.entity';
import { DiseaseEntity, } from './disease.entity';
import { PermissionEntity, } from './permission.entity';

@Entity({
  name: 'characters',
  synchronize: true,
})
export class CharacterEntity implements Character {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 80,
    charset: 'utf8',
  })
  name: string;

  @Column({
    type: 'smallint',
    default: 100,
  })
  health: number;

  @Column({
    type: 'smallint',
    default: 0,
  })
  armor: number;

  @Column({
    type: 'smallint',
    default: 100,
  })
  energyLevel: number;

  @Column({
    type: 'smallint',
    default: 100,
  })
  thristLevel: number;

  @Column({
    type: 'smallint',
    default: 100,
  })
  hungerLevel: number;

  @Column({
    type: 'bigint',
    default: 10000,
  })
  money: number;

  @Column({
    type: 'bool',
    default: true,
  })
  byDefault: boolean;

  @OneToOne(() => PhoneEntity)
  @JoinColumn()
  phone: Phone;

  @OneToOne(() => ProfileEntity)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => JailEntity, (jail) => jail.admin)
  issuedJails: Array<Jail>;

  @OneToMany(() => JailEntity, (jail) => jail.offender)
  receivedJails: Array<Jail>;

  @OneToMany(() => SpawnEntity, (spawn) => spawn.character)
  spawns: Array<Spawn>;

  @ManyToMany(() => GroupEntity)
  @JoinTable()
  groups: Array<Group>;

  @ManyToMany(() => PermissionEntity)
  @JoinTable()
  permissions: Array<Permission>;

  @ManyToMany(() => DiseaseEntity)
  @JoinTable()
  diseases: Array<Disease>;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}