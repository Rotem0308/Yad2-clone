import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { payments } from '../../../../../utilities/const';
import { Subscription } from 'rxjs';
import { FormDataService } from '../../../../core/services/form-data.service';
import { removeControlsWithEmptyString } from '../../../../helpers/ad-helpers';

@Component({
  selector: 'app-asset-payments',
  templateUrl: './asset-payments.component.html',
  styleUrl: './asset-payments.component.scss',
})
export class AssetPaymentsComponent implements OnInit, OnDestroy {
  isComplete: boolean = false;
  paymentsArray: string[] = payments;
  assetPaymentsForm!: FormGroup;
  isPaymentsSelectionOn: boolean = false;
  currentDate: string = new Date().toISOString().split('T')[0];
  isAnyCheckBoxsChecked: boolean = false;
  formSub!: Subscription;
  stepSub!: Subscription;
  isActive: boolean = false;
  wizardNumber: number = 4;
  constructor(private fb: FormBuilder, private formService: FormDataService) {}
  ngOnDestroy(): void {
    this.formSub.unsubscribe();
    this.stepSub.unsubscribe();
  }

  ngOnInit(): void {
    this.assetPaymentsForm = this.fb.group(
      {
        rentPayments: this.fb.control('', [
          Validators.required,
          Validators.min(1),
          Validators.max(12),
        ]),
        houseCommitte: this.fb.control('', [
          Validators.minLength(0),
          Validators.maxLength(9),
        ]),
        propertyTax: this.fb.control('', [
          Validators.minLength(0),
          Validators.maxLength(9),
        ]),
        builtSquareMeter: this.fb.control('', [
          Validators.minLength(0),
          Validators.maxLength(9),
        ]),
        gardenSquareMeter: this.fb.control('', [
          Validators.minLength(0),
          Validators.maxLength(9),
        ]),
        totalSquareMeter: this.fb.control('', [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(9),
        ]),
        pricePerMeter: this.fb.control(''),
        rent: this.fb.control('', [
          Validators.minLength(0),
          Validators.maxLength(11),
        ]),
        entryDate: this.fb.control(this.currentDate, [
          Validators.required,
          //When Angular calls the validator function, it does not automatically bind the context (this)
          //of your component to the validator function. Without binding,
          //this inside dateValidator will be undefined or refer to a different context, causing errors.
          this.dateValidator.bind(this),
        ]),
        isEntryDateImmediate: this.fb.control(false),
        isEntryDateFlexable: this.fb.control(false),
        isForLongTerm: this.fb.control(false),
      },
      { validators: this.rentValidator.bind(this) }
    );

    this.stepSub = this.formService.step$.subscribe({
      next: (currentStep) => {
        this.isActive = currentStep == this.wizardNumber;
        this.isComplete = currentStep > this.wizardNumber;
      },
    });

    this.formSub = this.assetPaymentsForm.valueChanges.subscribe((res) => {
      //parseFloint and parseInt return NaN if they try to parse and empty or non-numeric string
      // if (res == null) return;

      const TSMValue = parseInt(res['totalSquareMeter']?.replaceAll(',', ''));
      const RentValue = parseInt(res['rent']?.replaceAll(',', ''));

      if (
        !Number.isNaN(TSMValue) &&
        !Number.isNaN(RentValue) &&
        TSMValue != 0
      ) {
        const calculatedNumber = (RentValue / TSMValue).toFixed(2);
        if (calculatedNumber == 'NaN') return;

        const rentValue = this.formatNumber(calculatedNumber);

        this.assetPaymentsForm.get('pricePerMeter')?.setValue(rentValue, {
          emitEvent: false,
        });
      }
    });

    // this.assetPaymentsForm.get('rent')?.valueChanges.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     const totalSquareMeterValue = parseFloat(
    //       this.assetPaymentsForm.get('totalSquareMeter')?.value.toString()
    //     );
    //     console.log(totalSquareMeterValue);
    //     if (totalSquareMeterValue > 0) {
    //       this.assetPaymentsForm
    //         .get('pricePerMeter')
    //         ?.setValue(res / totalSquareMeterValue);
    //     }
    //   },
    // });
  }

  dateValidator(control: AbstractControl): { invalidDate: string } | null {
    const dateControl = control.value;

    if (this.assetPaymentsForm != null) {
      const IsEntryDateImmediate = this.assetPaymentsForm?.get(
        'isEntryDateImmediate'
      )?.value;
      const IsEntryDateFlexable = this.assetPaymentsForm?.get(
        'isEntryDateFlexable'
      )?.value;

      if (IsEntryDateImmediate || IsEntryDateFlexable) {
        return { invalidDate: 'invalidDate' };
      }
    }

    return dateControl < this.currentDate
      ? { invalidDate: 'invalidDate' }
      : null;
  }

  FormatInput(event: Event, controlName: string) {
    const value = (event?.target as HTMLInputElement)?.value.trim().toString();
    const formatedValue = this.formatNumber(value);
    this.assetPaymentsForm.get(controlName)?.setValue(formatedValue);
  }

  onKeyDown(event: KeyboardEvent): void {
    //f the pressed key doesn't match the allowed characters,
    // event.preventDefault() is called to prevent the character
    // from being entered. This prevents the input event from
    // firing for disallowed characters.
    const numbersAndDeleteRGX = /[0-9\b\c?]/;
    const inputValue = (event.target as HTMLInputElement).value;
    //in this validation i check if i only have number inputs and that the first number is not zero
    const isValidInput =
      numbersAndDeleteRGX.test(event.key) &&
      !(event.key === '0' && inputValue.length === 0);
    if (isValidInput) return;
    else event.preventDefault();
  }

  formatNumber(value: string): string {
    if (value == null) return value;
    if (value.includes('e')) value.replace('e', '');
    let indexOfDot = value.indexOf('.');
    if (value.length < 4 || (indexOfDot != -1 && indexOfDot < 4)) return value;
    //remove existing commas (',')
    value = value?.replaceAll(',', '');
    //function to add commas
    for (
      let i = indexOfDot > -1 ? indexOfDot - 3 : value.length - 3;
      i > 0;
      i -= 3
    ) {
      value = value.substring(0, i) + ',' + value.substring(i);
    }
    return value;
  }

  globalLengthErrorMessage(controlName: string): string | null {
    const control = this.assetPaymentsForm.get(controlName);
    if (!control?.touched) return null;
    if (control?.hasError('required')) return 'שדה חובה';
    if (control?.hasError('minlength')) {
      const minLength = control?.errors?.['minlength'].requiredLength;
      return `(${minLength})ערך מתחת למותר`;
    }
    if (control?.hasError('maxlength')) {
      const maxLength = control?.errors?.['maxlength'].requiredLength;
      return `(${maxLength})ערך מעל למותר`;
    }
    return null;
  }

  rentValidator(
    parent: AbstractControl
  ): { invalidRent: 'invalidRent' } | null {
    const group = parent as FormGroup;
    const TSMValue = parseFloat(group.controls['totalSquareMeter']?.value);
    const RentValue = parseFloat(group.controls['rent']?.value);
    if (!Number.isNaN(TSMValue) && !Number.isNaN(RentValue)) {
      console.log('חייב להיות גדול או שווה מהגודל המינימלי');
      return RentValue < TSMValue ? { invalidRent: 'invalidRent' } : null;
    }
    return null;
  }

  setPaymentsInputValue(payments: string): void {
    this.assetPaymentsForm
      .get('rentPayments')
      ?.setValue(payments, { emitEvent: false });
    this.isPaymentsSelectionOn = false;
  }

  unCheckOtherBoxes(checkBoxType: string): void {
    if (checkBoxType == 'immidiate')
      this.assetPaymentsForm.get('isEntryDateFlexable')?.setValue(false);
    if (checkBoxType == 'flex') {
      this.assetPaymentsForm.get('isEntryDateImmediate')?.setValue(false);
    }

    if (
      this.assetPaymentsForm.get('isEntryDateImmediate')?.value ||
      this.assetPaymentsForm.get('isEntryDateFlexable')?.value
    ) {
      this.assetPaymentsForm.get('entryDate')?.disable();
    } else {
      this.assetPaymentsForm.get('entryDate')?.enable();
    }
  }

  returnToPrev() {
    this.formService.setStep(this.wizardNumber - 1);
  }

  onSubmit() {
    if (!this.assetPaymentsForm.invalid) {
      console.log(this.assetPaymentsForm)
      removeControlsWithEmptyString(this.assetPaymentsForm);
      const payments = { paymentsAndDates: this.assetPaymentsForm.value };
      this.formService.setWizardForm(payments);
    }
  }
}
