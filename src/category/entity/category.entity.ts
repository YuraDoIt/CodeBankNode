import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { TransactionEntity } from './../../transaction/entity/transaction.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'category' })
export class CategoryEntity implements CategoryI {
  @ApiProperty({ description: 'category id' })
  @PrimaryGeneratedColumn('increment', { name: 'userid' })
  public id: number;

  @ApiProperty({ description: 'category name' })
  @Column({ unique: true })
  public name: string;

  @OneToMany(() => TransactionEntity, transaction => transaction.category)
  public transaction: TransactionEntity[];

  @ApiProperty({ description: 'created ad date' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'updated at date' })
  @UpdateDateColumn()
  updatedAt: Date;
}
