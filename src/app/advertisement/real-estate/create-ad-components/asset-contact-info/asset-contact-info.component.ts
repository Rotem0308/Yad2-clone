import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../../core/services/form-data.service';
import { Subscription } from 'rxjs';
import { removeControlsWithEmptyString } from '../../../../helpers/ad-helpers';

@Component({
  selector: 'app-asset-contact-info',
  templateUrl: './asset-contact-info.component.html',
  styleUrl: './asset-contact-info.component.scss',
})
export class AssetContactInfoComponent implements OnInit {
  isComplete: boolean = false;
  isModalOpen: boolean = false;
  isOwnerSelectionOn: boolean = false;
  isMainContact!: boolean;
  ownerOptions: string[] = ['בעל הנכס', 'שוכר נוכחי', 'אחר'];
  assetContactInfoForm!: FormGroup;
  contactInUse: string = '';
  contactsAvailable: string[] = ['0524684019'];
  isPhoneInputValid: boolean = false;
  phoneNumberInput: string = '';
  isAddContectOn: boolean = false;
  stepSub!: Subscription;
  isActive: boolean = false;
  wizardNumber: number = 6;
  constructor(private fb: FormBuilder, private formService: FormDataService) {}
  ngOnInit(): void {
    this.assetContactInfoForm = this.fb.group({
      assetOwner: this.fb.control(''),
      contactName: this.fb.control('', Validators.required),
      contactPhone: this.fb.control('', Validators.required),
      additionalContactName: this.fb.control(''),
      additionalContactPhone: this.fb.control(''),
      hasReadTerms: this.fb.control(false, Validators.requiredTrue),
      willAcceptUpdates: this.fb.control(false),
    });
    this.stepSub = this.formService.step$.subscribe({
      next: (currentStep) => {
        this.isActive = currentStep == this.wizardNumber;
        this.isComplete = currentStep > this.wizardNumber;
      },
    });
  }

  ToggleTermsControl() {
    this.assetContactInfoForm
      .get('hasReadTerms')
      ?.setValue(!this.assetContactInfoForm.get('hasReadTerms')?.value);
  }

  setOwnerInputValue(owner: string) {
    this.assetContactInfoForm.get('assetOwner')?.setValue(owner);
    this.isOwnerSelectionOn = false;
  }

  onModalOpen(MainContact: boolean) {
    this.isMainContact = MainContact;
    this.isModalOpen = true;
    //disable scrolling
    document.body.style.overflow = 'hidden';
  }

  onModalClosed(event?: Event) {
    this.isMainContact = false;

    this.isModalOpen = false;
    //enable scrolling
    document.body.style.overflow = 'auto';
  }

  updatePhoneNumberValidity(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    if (!inputValue.startsWith('0')) return;
    if (inputValue) {
      this.phoneNumberInput = inputValue;
      this.isPhoneInputValid = inputValue.length == 10;
    }
  }

  toggleContactPhoneState() {
    this.isAddContectOn = !this.isAddContectOn;
    const additionalContactName = this.assetContactInfoForm.get(
      'additionalContactName'
    );
    const additionalContactPhone = this.assetContactInfoForm.get(
      'additionalContactPhone'
    );
    if (this.isAddContectOn) {
      additionalContactName?.setValidators(Validators.required);
      additionalContactPhone?.setValidators(Validators.required);
    } else {
      additionalContactName?.clearValidators();
      additionalContactPhone?.setValidators(Validators.required);
    }
    this.assetContactInfoForm.updateValueAndValidity();
  }

  addToAvailableContacts() {
    if (this.isPhoneInputValid)
      this.contactsAvailable.push(this.phoneNumberInput);
  }

  addContact() {
    if (this.contactInUse.length <= 0) return;
    if (this.isMainContact) {
      this.assetContactInfoForm
        .get('contactPhone')
        ?.setValue(this.contactInUse);
    } else {
      this.assetContactInfoForm
        .get('additionalContactPhone')
        ?.setValue(this.contactInUse);
    }
    this.assetContactInfoForm.updateValueAndValidity();
    this.contactInUse = '';
    this.phoneNumberInput = '';
    this.onModalClosed();
  }

  clearContactInUse() {
    this.contactInUse = '';
  }

  addToContactInUse(contact: string) {
    if (this.contactInUse.length <= 0) {
      this.contactInUse = contact;
    }
  }

  returnToPrev() {
    this.formService.setStep(this.wizardNumber - 1);
  }

  onSubmit() {
    if (!this.assetContactInfoForm.invalid) {
      removeControlsWithEmptyString(this.assetContactInfoForm);
      this.formService.setWizardForm(this.assetContactInfoForm.value);
    }
    console.log(this.assetContactInfoForm.invalid);
  }
}
