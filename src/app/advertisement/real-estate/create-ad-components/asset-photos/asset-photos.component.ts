import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerService } from '../../../../core/services/banner.service';
import { createBannerType } from '../../../../core/models/banner.model';
import { FormDataService } from '../../../../core/services/form-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-photos',
  templateUrl: './asset-photos.component.html',
  styleUrl: './asset-photos.component.scss',
})
export class AssetPhotosComponent implements OnInit {
  isComplete: boolean = false;
  assetphotosVideosForm!: FormGroup;
  stepSub!: Subscription;
  wizardNumber: number = 5;
  isActive: boolean = false;
  //Two reasons for putting private before the dependency decleration:
  //1. Encapsulation - access to the service is only within the class itself
  //2. TypeSafety - TS know that the fb property will always hold a type of FormBuilder
  constructor(
    private fb: FormBuilder,
    private banner: BannerService,
    private formService: FormDataService
  ) {}

  // In reactive forms, the form data is stored in an observable object,
  // which updates whenever the user interacts with the form element.
  ngOnInit(): void {
    this.assetphotosVideosForm = this.fb.group({
      inputPhotos: this.fb.control(''),
      photos: this.fb.control([]),
      videos: this.fb.control([]),
    });

    this.assetphotosVideosForm
      .get('photos')
      ?.valueChanges.subscribe((res) => console.log(res));

    this.stepSub = this.formService.step$.subscribe({
      next: (currentStep) => {
        this.isActive = currentStep == this.wizardNumber;
        this.isComplete = currentStep > this.wizardNumber;
      },
    });
  }

  ClearPhotos() {
    this.assetphotosVideosForm.get('photos')?.setValue([]);
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const files: FileList | null = input.files;
    //ensure the files are correctly sent to the ASP.NET server as multipart/form-data.
    //if not , ASP.NET cannot automatically bind to IFormFile,
    // the server will not be able to interpret and receive the files correctly

    if (files == null) return false;

    if (!this.isValidFileUpload(files)) {
      //In HTML, the <input type="file"> element is designed to only accept user input for security reasons.
      // This means you cannot set its value directly through JavaScript to anything other than an empty string.
      this.assetphotosVideosForm.get('photos')?.setValue([]);
      return event.preventDefault();
    }

    this.banner.open({
      message: 'files loaded successfully',
      type: createBannerType('success'),
    });

    const filesContainer: File[] = [];

    for (let index = 0; index < files?.length; index++) {
      filesContainer.push(files[index]);
    }
    this.assetphotosVideosForm.get('photos')?.setValue(filesContainer);
  }

  isValidFileUpload(files: FileList) {
    for (let i = 0; i < files?.length; i++) {
      if (
        !files[i].type.includes('image/jpg') &&
        !files[i].type.includes('image/png')
      ) {
        this.banner.open({
          message: 'only image file are allowed',
          type: createBannerType('error'),
        });
        return false;
      }
    }
    if (files.length > 5) {
      this.banner.open({
        message: 'can only Upload Up To 5 Files',
        type: createBannerType('error'),
      });
      return false;
    }
    return true;
  }

  returnToPrev() {
    this.formService.setStep(this.wizardNumber - 1);
  }

  onSubmit() {
    const photos = { photos: this.assetphotosVideosForm.get('photos')?.value };
    this.formService.setWizardForm(photos);
  }
}
