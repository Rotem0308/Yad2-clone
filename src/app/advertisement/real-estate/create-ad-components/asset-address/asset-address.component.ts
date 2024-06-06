import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../core/services/data.service';
import {
  EMPTY,
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs';
import { assets, conditions } from '../../../../../utilities/const';

@Component({
  selector: 'app-asset-address',
  templateUrl: './asset-address.component.html',
  styleUrl: './asset-address.component.scss',
})
export class AssetAddressComponent implements OnInit {
  isComplete: boolean = false;
  assetAddressForm!: FormGroup;
  cities$!: Observable<any>;
  streets$!: Observable<any>;
  isCityInputFocus: boolean = true;
  isStreetInputFocus: boolean = true;
  isAssetTypeSelectionOn: boolean = false;
  isAssetStateSelectionOn: boolean = false;
  assets: string[] = assets;
  conditions: string[] = conditions;
  area: string = '';
  neighborhood: string = '';
  constructor(private fb: FormBuilder, private dataService: DataService) {}
  //איתור מחוז לפי יישוב
  ngOnInit(): void {
    this.assetAddressForm = this.fb.group({
      city: this.fb.control('', [Validators.required]),
      street: this.fb.control('', [Validators.required]),
      houseNumber: this.fb.control('', [Validators.required]),
      apartmentNumber: this.fb.control(null),
      floor: this.fb.control('', [Validators.required]),
      totalFloors: this.fb.control('', [Validators.required]),
      isOnColums: this.fb.control(false),
      assetType: this.fb.control('', [Validators.required]),
      assetState: this.fb.control('', [Validators.required]),
      airDirections: this.fb.control(['1', '2', '3', '4']),
      openView: this.fb.control(['ללא', 'לים', 'לפארק', 'לעיר']),
      isRearAsset: this.fb.control(false),
      isMonthlyUpdated: this.fb.control({ value: false, disabled: true }),
    });

    this.cities$ =
      this.assetAddressForm.get('city')?.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((searchValue) => {
          if (searchValue.length === 0 || !this.isCityInputFocus) return EMPTY;
          else return this.dataService.getCityByValue(searchValue, 10);
        })
      ) || EMPTY;

    this.streets$ =
      this.assetAddressForm.get('street')?.valueChanges.pipe(
        tap(() => console.log('streetValue')),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((searchValue) => {
          const city = this.assetAddressForm.get('city')?.value;
          if (searchValue.length === 0 || !this.isStreetInputFocus) {
            console.log('no value or not in focus');
            return EMPTY;
          } else {
            console.log('in focus');
            return this.dataService.getStreetByValue(city, searchValue, 10);
          }
        })
      ) || EMPTY;

    this.assetAddressForm.statusChanges.subscribe((res) => {
      console.log(res);
      if (this.assetAddressForm.valid) {
        console.log(res);
        this.assetAddressForm
          .get('isMonthlyUpdated')
          ?.enable({ emitEvent: false });
      } else {
        return;
      }
    });
  }

  // setvalid() {
  //   this.assetAddressForm.get('city')?.clearValidators();
  //   this.assetAddressForm.get('street')?.clearValidators();
  //   this.assetAddressForm.get('houseNumber')?.clearValidators();
  //   this.assetAddressForm.get('floor')?.clearValidators();
  //   this.assetAddressForm.get('totalFloors')?.clearValidators();
  //   this.assetAddressForm.get('neighborhood')?.clearValidators();
  //   this.assetAddressForm.get('area')?.clearValidators();
  //   this.assetAddressForm.get('assetType')?.clearValidators();
  //   this.assetAddressForm.get('assetState')?.clearValidators();

  //   // Set default values to make the form valid
  //   this.assetAddressForm.get('city')?.setValue('Default City');
  //   this.assetAddressForm.get('street')?.setValue('Default Street');
  //   this.assetAddressForm.get('houseNumber')?.setValue('123');
  //   this.assetAddressForm.get('floor')?.setValue('1');
  //   this.assetAddressForm.get('totalFloors')?.setValue('10');
  //   this.assetAddressForm.get('neighborhood')?.setValue('Default Neighborhood');
  //   this.assetAddressForm.get('area')?.setValue('Default Area');
  //   this.assetAddressForm.get('assetType')?.setValue('Default Type');
  //   this.assetAddressForm.get('assetState')?.setValue('Default State');
  //   this.assetAddressForm.updateValueAndValidity();
  // }

  setCityInputValue(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    let cityInput = this.assetAddressForm.get('city');
    cityInput?.setValue(selectedValue);
    this.isCityInputFocus = false;
  }
  setStreetInputValue(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    let streetInput = this.assetAddressForm.get('street');
    streetInput?.setValue(selectedValue);
    this.isStreetInputFocus = false;
  }
  setAssetTypeInputValue(assetType: string) {
    let assetTypeControl = this.assetAddressForm.get('assetType');
    assetTypeControl?.setValue(assetType);
    this.isAssetTypeSelectionOn = false;
  }
  setAssetStateInputValue(assetState: string) {
    let assetStateControl = this.assetAddressForm.get('assetState');
    assetStateControl?.setValue(assetState);
    this.isAssetStateSelectionOn = false;
  }

  onSubmit() {}
}
