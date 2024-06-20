import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormDataService } from '../../core/services/form-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard-summary',
  templateUrl: './wizard-summary.component.html',
  styleUrl: './wizard-summary.component.scss',
})
export class WizardSummaryComponent implements OnInit, OnDestroy {
  stepSub!: Subscription;
  step!: number;
  constructor(private formService: FormDataService) {}
  ngOnDestroy(): void {
    this.stepSub.unsubscribe();
  }
  ngOnInit(): void {
    this.stepSub = this.formService.step$.subscribe({
      next: (res) => {
        this.step = res;
      },
    });
  }
  @Input() number!: number;
  @Input() text!: string;
  @Input('state') isStepComplete: boolean = false;
  @Output() onEditClick = new EventEmitter<void>();
  handleClick() {
    // this.isStepComplete = !this.isStepComplete;
    this.formService.setStep(this.number);
    //edit button clicked
    this.onEditClick.emit();
  }
}
