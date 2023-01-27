import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(() => BankEntity, (bank: BankEntity) => bank.transactions)
  public bank?: BankEntity;
}
