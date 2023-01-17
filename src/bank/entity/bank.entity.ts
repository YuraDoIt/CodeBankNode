import { IsString } from 'class-validator';
import { IsNumber } from 'class-validator/types/decorator/decorators';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bank' })
export class BankEntity implements BankI {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ unique: true, type: 'varchar' })
  public name: string;

  @Column({ default: 0 })
  public balance: number;

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}
