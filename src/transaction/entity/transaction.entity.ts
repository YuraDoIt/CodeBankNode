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
import { CategoryEntity } from './../../category/entity/category.entity';
import { BankEntity } from '../../bank/entity/bank.entity';

@Entity({ name: 'transactions' })
export class TransactionEntity implements TransactionI {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public amount: number;

  @Column()
  public type?: string;

  @OneToMany(() => CategoryEntity, category => category.transaction)
  public categoryes: CategoryEntity[];

  @ManyToOne(() => BankEntity, (bank: BankEntity) => bank.transactions, {
    nullable: false,
    createForeignKeyConstraints: false,
  })
  public bank?: BankEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
