import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bank' })
export class BankEntity implements BankI {
  @PrimaryGeneratedColumn('increment', { name: 'userid' })
  public id: number;

  @Column({ unique: true, type: 'varchar' })
  public name: string;

  @Column({ unique: true, type: 'number' })
  public balance: number;

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}
