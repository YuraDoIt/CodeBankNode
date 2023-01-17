import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionEntity } from './../../transaction/entity/transaction.entity';

@Entity({ name: 'bank' })
export class CategoryEntity implements CategoryI {
  @PrimaryGeneratedColumn('increment', { name: 'userid' })
  public id: number;

  @Column({ unique: true })
  public name: string;

  @ManyToOne(() => TransactionEntity, transaction => transaction.categoryes)
  public transaction?: TransactionEntity;

  // {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  //   cascade: true,
  // }
}
