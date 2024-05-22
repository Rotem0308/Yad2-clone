import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAdComponent } from './pick-ad.component';

describe('PickAdComponent', () => {
  let component: PickAdComponent;
  let fixture: ComponentFixture<PickAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
