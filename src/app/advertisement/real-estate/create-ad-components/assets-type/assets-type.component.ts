import { Component, Input } from '@angular/core';
import { FormDataService } from '../../../../core/services/form-data.service';

@Component({
  selector: 'app-assets-type',
  templateUrl: './assets-type.component.html',
  styleUrl: './assets-type.component.scss',
})
export class AssetsTypeComponent {
  isComplete: boolean = false;
  constructor(private formService: FormDataService) {}

  onClick() {
    this.isComplete = true;
    this.formService.setStep(2);
  }
}
