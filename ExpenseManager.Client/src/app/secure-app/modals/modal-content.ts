import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" [ngClass]="headerClassName">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{text}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn" (click)="activeModal.close('Cross click')">Ok, thanks</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() title;
  @Input() text;
  @Input() headerClassName;

  constructor(public activeModal: NgbActiveModal) {}
}