import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetContactInfoComponent } from './asset-contact-info.component';

describe('AssetContactInfoComponent', () => {
  let component: AssetContactInfoComponent;
  let fixture: ComponentFixture<AssetContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetContactInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
