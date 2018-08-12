import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BalanceService } from './services/balance.service';
import { HelpersService } from '../common-services/helpers.service';

@Component({
  templateUrl: './secure-app.component.html',
  styleUrls: ['./secure-app.component.css']
})
export class SecureAppComponent implements OnInit, OnDestroy {
  balanceStateClass = '';
  subscription: Subscription;

  warningText = "You are getting closer to your limit! Reduce your expenses if " +
    "you do not want to overspend this month.";
  congratulationText = "Congratulations! You have controlled your " +
    "expenses carefully and now you are going to meet the set budget by the end of the month";

  constructor(
    private balanceService: BalanceService,
    private helpersService: HelpersService
  ) {
    this.subscription = balanceService.balanceUpdated$.subscribe(
      state => {
        this.getBalanceStateClass(state);
      }
    );
  }

  ngOnInit() {
    let prevBalanceStatus = this.helpersService.getStorageProperty("balanceStatus");
    if (prevBalanceStatus === "false") {
      this.balanceStateClass = "negative-state";
    }

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

  getBalanceStateClass(currentBalanceState: boolean) {
    if (currentBalanceState) {
      this.balanceStateClass = 'positive-state';
    } else {
      this.balanceStateClass = 'negative-state';
    }

    let balanceStatus = this.helpersService.getStorageProperty("balanceStatus");
    if (balanceStatus === null) {
      if (!currentBalanceState) {
        alert(this.warningText);
        this.helpersService.setStorageProperty("balanceStatus", currentBalanceState);
      }
    } else {
      balanceStatus = balanceStatus === "true"; // convert to boolean
      if (balanceStatus !== currentBalanceState) {
        alert(this.congratulationText);
        this.helpersService.setStorageProperty("balanceStatus", null);
      }
    }
  }

}
