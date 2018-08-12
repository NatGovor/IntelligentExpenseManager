import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BalanceService } from './services/balance.service';

@Component({
  templateUrl: './secure-app.component.html',
  styleUrls: ['./secure-app.component.css']
})
export class SecureAppComponent implements OnInit, OnDestroy {
  balanceStateClass = '';
  subscription: Subscription;

  constructor(
    private balanceService: BalanceService
  ) {
    this.subscription = balanceService.balanceUpdated$.subscribe(
      state => {
        this.getBalanceStateClass(state);
      }
    );
  }

  ngOnInit() {
    let currentDate = new Date();
    this.balanceService.checkBalance(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
      .subscribe(result => {
        console.log(result);
        this.getBalanceStateClass(result);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getBalanceStateClass(balanceState: boolean) {
    if (balanceState) {
      this.balanceStateClass = 'positive-state';
    } else {
      this.balanceStateClass = 'negative-state';
    }
  }

}
