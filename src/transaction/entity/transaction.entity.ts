import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from './../../category/entity/category.entity';

@Entity({ name: 'transactions' })
export class TransactionEntity implements TransactionI {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public amount: number;

  @Column()
  public type?: string;

  @OneToMany(() => CategoryEntity, category => category.transaction, {
    cascade: true,
  })
  public categoryes?: CategoryEntity[];
}
