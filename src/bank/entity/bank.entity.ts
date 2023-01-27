import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsNumber, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bank' })
export class BankEntity implements BankI {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ description: 'bank id' })
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

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}
