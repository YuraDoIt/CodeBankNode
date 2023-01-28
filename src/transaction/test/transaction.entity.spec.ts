import { TransactionCreateDto } from '../dto/transaction.create.dto';
import { TransactionEntity } from './../entity/transaction.entity';

describe('Entity should be defined', () => {
  expect(TransactionEntity).toBeDefined();
  expect(TransactionCreateDto).toBeDefined();
});
