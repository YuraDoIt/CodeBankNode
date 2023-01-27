import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNumber, IsString, Min } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionEntity } from '../../transaction/entity/transaction.entity';

@Entity({ name: 'bank' })
export class BankEntity implements BankI {
  @ApiProperty({ description: 'bank id' })
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ unique: true, type: 'varchar' })
  @IsString()
  @ApiProperty({ description: 'bank name' })
  public name: string;

  @Column({ default: 0 })
  @IsNumber()
  @Min(0)
  @ApiProperty({ description: 'bank money amount' })
  public balance: number;

  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.bank, {
    nullable: true,
    createForeignKeyConstraints: false,
  })
  public transactions?: TransactionEntity[];

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}
