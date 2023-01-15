import { Injectable } from '@nestjs/common';
import { BankEntity } from './entity/bank.entity';

@Injectable()
export class BankService {
  public async getBank(): Promise<any> {
    const name1 = new BankEntity('name', 123);
  }

  public async getBanks(): Promise<any> {
    return 'Banks are getted';
  }

  public async createBank(): Promise<any> {
    return 'bankCreated';
  }

  public async updateBank(): Promise<any> {
    return 'Bank updated';
  }

  public deleteBank(): any {
    throw new Error('Method not implemented.');
  }
}
