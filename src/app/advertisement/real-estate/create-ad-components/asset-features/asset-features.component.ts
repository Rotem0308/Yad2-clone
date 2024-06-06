import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../core/services/data.service';
import { numberOfRooms } from '../../../../../utilities/const';

@Component({
  selector: 'app-asset-features',
  templateUrl: './asset-features.component.html',
  styleUrl: './asset-features.component.scss',
})
export class AssetFeaturesComponent {
  textareaPlaceHolder: string =
    "זה המקום לתאר את הפרטים הבולטים, למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכו'";
  isComplete!: boolean;
  progressState: number = 0;
  assetFeaturesForm!: FormGroup;
  isRoomNumberSelectionOn: boolean = false;
  numberOfRooms: number[] = numberOfRooms;
  activeFeaturesIndexes: number[] = [];
  viewFeatures: string[] = ['גישה לנכים', 'מזגן', 'סורגים', 'בוילר'];
  formFeatures: string[] = [''];
  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.assetFeaturesForm = this.fb.group({
      rooms: this.fb.control(1, [Validators.required]),
      bathRooms: this.fb.control(['1', '2', '3', '+4']),
      parkingSpaces: this.fb.control(['ללא', '1', '2', '3']),
      balcony: this.fb.control(['ללא', '1', '2', '3']),
      features: this.fb.group({
        HasAccessForDisabled: this.fb.control(false),
        HasAirConditioning: this.fb.control(false),
        HasBars: this.fb.control(false),
        HasBoiler: this.fb.control(false),
        HasElevator: this.fb.control(false),
        IsForPartners: this.fb.control(false),
        HasFurniture: this.fb.control(false),
        IsUnit: this.fb.control(false),
        IsKosherKitchen: this.fb.control(false),
        IsPetsAllowed: this.fb.control(false),
        IsRenovated: this.fb.control(false),
        HasSafeRoom: this.fb.control(false),
        HasMultiLatchDoors: this.fb.control(false),
        HasTornadoAirConditioning: this.fb.control(false),
        HasStorage: this.fb.control(false),
      }),
      description: this.fb.control('', [
        Validators.required,
        Validators.maxLength(400),
      ]),
    });

    

    this.assetFeaturesForm
      ?.get('features')
      ?.get('HasAccessForDisabled')
      ?.valueChanges.subscribe((res) => {
        console.log(res);
      });
  }

  setRoomNumberInputValue(NumberOfRooms: number) {
    this.assetFeaturesForm.get('rooms')?.setValue(NumberOfRooms);
    this.isRoomNumberSelectionOn = false;
  }

  toggleFormFeatureValue(index: number) {
    const controls = (this.assetFeaturesForm.get('features') as FormGroup)
      .controls;
    //Object.values() is used to extract the values (form controls) from the formControlsObject into an array (formControlsArray).
    let controlsArray = Object.values(controls);
    const controlCurrentValue = controlsArray[index].value;
    controlsArray[index].setValue(!controlCurrentValue);
    if (this.activeFeaturesIndexes.includes(index))
      this.activeFeaturesIndexes = this.activeFeaturesIndexes.filter(
        (i) => i != index
      );
    else this.activeFeaturesIndexes.push(index);
    console.log(this.activeFeaturesIndexes);
  }

  getProgressState(CurrTextLength: number) {
    if (CurrTextLength > 3 && CurrTextLength < 9) {
      return '10%';
    }
    if (CurrTextLength >= 9 && CurrTextLength < 15) {
      return '20%';
    }
    if (CurrTextLength >= 15 && CurrTextLength < 30) {
      return '30%';
    }
    if (CurrTextLength >= 30 && CurrTextLength < 45) {
      return '40%';
    }
    if (CurrTextLength >= 45 && CurrTextLength < 60) {
      return '50%';
    }
    if (CurrTextLength >= 60) {
      return '100%';
    }

    return '0%';
  }

  onSubmit() {}
}
