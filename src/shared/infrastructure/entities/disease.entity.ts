import { v4, } from 'uuid';
import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Disease, } from '@shared/domain/models/disease.model';
import { DiseaseSeverity, } from '@shared/domain/enums/disease-severity.enum';

@Entity({
  name: 'diseases',
  synchronize: true,
})
export class DiseaseEntity implements Disease {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
    update: false,
    default: v4(),
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 120,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 500,
  })
  description: string;

  @Column({
    type: 'varchar',
  })
  severity: DiseaseSeverity;

  @Column({
    type: 'varchar',
  })
  treatment: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}