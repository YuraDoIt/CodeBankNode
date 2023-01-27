import { IsString, IsNumber, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bank' })
export class BankEntity implements BankI {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ unique: true, type: 'varchar' })
  @IsString()
  public name: string;

  @Column({ default: 0 })
  @IsNumber()
  @Min(0)
  public balance: number;

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}
