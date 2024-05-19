import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormStep2Component } from './signup-form-step2.component';

describe('SignupFormStep2Component', () => {
  let component: SignupFormStep2Component;
  let fixture: ComponentFixture<SignupFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupFormStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
