import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankEntity } from './entity/bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
