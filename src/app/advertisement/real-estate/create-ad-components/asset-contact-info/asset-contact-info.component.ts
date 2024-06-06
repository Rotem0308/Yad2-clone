import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asset-contact-info',
  templateUrl: './asset-contact-info.component.html',
  styleUrl: './asset-contact-info.component.scss',
})
export class AssetContactInfoComponent implements OnInit {
  isComplete!: boolean;
  isModalOpen: boolean = false;
  isOwnerSelectionOn: boolean = false;
  ownerOptions: string[] = ['בעל הנכס', 'שוכר נוכחי', 'אחר'];
  assetContactInfoForm!: FormGroup;
  existingUserContacts: string[] = ['0524684019'];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.assetContactInfoForm = this.fb.group({
      assetOwner: this.fb.control(''),
      contactName: this.fb.control('', Validators.required),
      contactPhone: this.fb.control('', Validators.required),
      additionalContactName: this.fb.control('', Validators.required),
      additionalContactPhone: this.fb.control('', Validators.required),
    });
  }

  setOwnerInputValue(owner: string) {
    this.assetContactInfoForm.get('assetOwner')?.setValue(owner);
    this.isOwnerSelectionOn = false;
  }

  onModalOpen() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  onModalClosed() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  addPhoneByControl(controlName: string): void {}

  onSubmit() {}
}
