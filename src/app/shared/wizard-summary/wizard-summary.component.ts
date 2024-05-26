import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wizard-summary',
  templateUrl: './wizard-summary.component.html',
  styleUrl: './wizard-summary.component.scss',
})
export class WizardSummaryComponent {
  @Input() number!: number;
  @Input() text!: string;
  @Input('state') isStepComplete: boolean = false;
  @Output() onEditClick = new EventEmitter<void>();
  handleClick() {
    this.isStepComplete = !this.isStepComplete;
    this.onEditClick.emit();
  }
}
