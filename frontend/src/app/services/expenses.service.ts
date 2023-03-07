import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Expense {
  name: string;
  expense: number | null;
}
const devHost = 'http://localhost:2023';
const prodHost = 'https://holiday-expense-tracker.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];

  constructor(private http: HttpClient) {}

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  calculateExpenses(): Observable<any> {
    return this.http.post(`${prodHost}/settle-up`, {
      expenses: this.expenses,
    });
  }
}
