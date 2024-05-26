import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAddressComponent } from './asset-address.component';

describe('AssetAddressComponent', () => {
  let component: AssetAddressComponent;
  let fixture: ComponentFixture<AssetAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
