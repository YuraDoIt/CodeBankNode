type typeTransaction = ['profitable', 'consumable'];

interface TransactionI {
  id: number;
  amount?: number;
  type: 'profitable' | 'consumable';
}
