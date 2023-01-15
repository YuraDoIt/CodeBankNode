export class BankEntity implements BankI {
  name: string;
  balance: number;

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name;
  }
}
