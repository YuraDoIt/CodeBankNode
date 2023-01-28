import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BankEntity } from '../../bank/entity/bank.entity';
import { CategoryEntity } from './../../category/entity/category.entity';
import { IsString } from 'class-validator';

@Entity({ name: 'transaction' })
export class TransactionEntity implements TransactionI {
  @ApiProperty({ description: 'transaction id' })
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @ApiProperty({ description: 'transaction amount' })
  @Column()
  public amount: number;

  @ApiProperty({ description: 'type: profitable | consumable' })
  @Column()
  @IsString()
  public type: 'profitable' | 'consumable';

  @OneToMany(() => CategoryEntity, category => category.transaction)
  public categoryes: CategoryEntity[];

  @ManyToOne(() => BankEntity, (bank: BankEntity) => bank.transactions, {
    nullable: false,
    createForeignKeyConstraints: false,
  })
  public bank?: BankEntity;

  @ApiProperty({ description: 'date of making transaction' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'date of update' })
  @UpdateDateColumn()
  updatedAt: Date;
}
