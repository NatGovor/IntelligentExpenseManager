import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BalanceService } from './services/balance.service';
import { HelpersService } from '../common-services/helpers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modals/modal-content';
import { AuthService } from '../common-services/auth.service';

@Component({
  templateUrl: './secure-app.component.html',
  styleUrls: ['./secure-app.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        transform: 'translateY(-200%)'
      })),
      state('active', style({
        transform: 'translateY(0%)'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])
  ]
})
export class SecureAppComponent implements OnInit, OnDestroy {
  balanceStateClass = '';
  subscription: Subscription;
  state = "inactive";

  warningTitle = "Warning!";
  warningText = "You are getting closer to your limit! Reduce your expenses if " +
    "you do not want to overspend this month.";
  congratulationTitle = "Congratulations!";
  congratulationText = "Congratulations! You have controlled your " +
    "expenses carefully and now you are going to meet the set budget by the end of the month";

  constructor(
    private balanceService: BalanceService,
    private helpersService: HelpersService,
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router
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
        this.showPopup(this.warningTitle, this.warningText, 'negative');
        this.helpersService.setStorageProperty("balanceStatus", currentBalanceState);
      }
    } else {
      balanceStatus = balanceStatus === "true"; // convert to boolean
      if (balanceStatus !== currentBalanceState) {
        this.showPopup(this.congratulationTitle, this.congratulationText, 'positive');
        this.helpersService.setStorageProperty("balanceStatus", null);
      }
    }
  }

  showPopup(title, text, headerClassName) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.headerClassName = headerClassName;
  }

  toggleSideMenu() {
    this.state = this.state  === "active" ? "inactive" : "active";
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
