import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPaymentsComponent } from './asset-payments.component';

describe('AssetPaymentsComponent', () => {
  let component: AssetPaymentsComponent;
  let fixture: ComponentFixture<AssetPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetPaymentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
