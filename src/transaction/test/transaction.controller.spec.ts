import { TransactionController } from './../transaction.controller';

describe('Transaction controller', () => {
  let transactionController: TransactionController;

  it('Should be defined', async () => {
    expect(transactionController.createTransaction).toBeDefined();
    expect(transactionController.delteTransact).toBeDefined();
    expect(transactionController.getTransaction).toBeDefined();
  });
});
