import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerService } from '../../../../core/services/banner.service';
import { createBannerType } from '../../../../core/models/banner.model';

@Component({
  selector: 'app-asset-photos',
  templateUrl: './asset-photos.component.html',
  styleUrl: './asset-photos.component.scss',
})
export class AssetPhotosComponent implements OnInit {
  isComplete!: boolean;
  assetphotosVideosForm!: FormGroup;

  //Two reasons for putting private before the dependency decleration:
  //1. Encapsulation - access to the service is only within the class itself
  //2. TypeSafety - TS know that the fb property will always hold a type of FormBuilder
  constructor(private fb: FormBuilder, private banner: BannerService) {}

  // In reactive forms, the form data is stored in an observable object,
  // which updates whenever the user interacts with the form element.
  ngOnInit(): void {
    this.assetphotosVideosForm = this.fb.group({
      photos: this.fb.control([]),
      videos: this.fb.control([]),
    });

    this.assetphotosVideosForm
      .get('photos')
      ?.valueChanges.subscribe((res) => console.log(res));
  }

  ClearPhotos() {
    this.assetphotosVideosForm.get('photos')?.setValue([]);
  }

  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files != null) {
      if (files.length > 5) {
        this.banner.open({
          message: 'can only Upload Up To 5 Files',
          type: createBannerType('error'),
        });
        this.assetphotosVideosForm.get('photos')?.setValue([]);
        return event.preventDefault();
      }
      console.log(files);
      const filesContainer: File[] = [];

      for (let index = 0; index < files?.length; index++) {
        console.log(files[index].name);
        filesContainer.push(files[index]);
      }
      this.assetphotosVideosForm.get('photos')?.setValue(filesContainer);
    }
  }

  isValidFileUpload() {}
}
