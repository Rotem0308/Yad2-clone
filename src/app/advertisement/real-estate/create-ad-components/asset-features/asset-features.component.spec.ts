import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetFeaturesComponent } from './asset-features.component';

describe('AssetFeaturesComponent', () => {
  let component: AssetFeaturesComponent;
  let fixture: ComponentFixture<AssetFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
