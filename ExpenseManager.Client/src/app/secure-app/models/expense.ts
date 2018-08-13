export class Expense {
  id: string;
  userId: string;
  date: Date;
  amount: number;
  description: string;
  isShared: boolean;
  sharedExpenseId: string;
}
