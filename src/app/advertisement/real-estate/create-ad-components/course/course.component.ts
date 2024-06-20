import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDataService } from '../../../../core/services/form-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit {
  isComplete: boolean = false;
  courseForm!: FormGroup;
  stepSub!: Subscription;
  wizardNumber: number = 7;
  isActive: boolean = false;

  constructor(private fb: FormBuilder, private formService: FormDataService) {}
  ngOnInit(): void {
    this.courseForm = this.fb.group({
      course: this.fb.control('normal'),
    });

    this.stepSub = this.formService.step$.subscribe({
      next: (currentStep) => {
        this.isActive = currentStep == this.wizardNumber;
        this.isComplete = currentStep > this.wizardNumber;
      },
    });
  }

  returnToPrev() {
    this.formService.setStep(this.wizardNumber - 1);
  }

  onSubmit() {
    const course = this.courseForm?.value;
    this.formService.setWizardForm(course);
    this.formService.createAdvertisment();
  }
}
