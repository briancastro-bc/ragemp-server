import { v4, } from 'uuid';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Phone, } from '@shared/domain/models/phone.model';
import { Character, } from '@shared/domain/models/character.model';
import { PhoneStyle, } from '@shared/domain/enums/phone.enum';

@Entity({
  name: 'phones',
  synchronize: true,
})
export class PhoneEntity implements Phone {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  style: PhoneStyle;

  @Column({
    type: 'char',
    length: 15,
    nullable: true,
  })
  number: string | null;

  @Column({
    type: 'int',
    default: 20,
  })
  balance: number;

  @Column()
  contacts: Array<Character>;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}