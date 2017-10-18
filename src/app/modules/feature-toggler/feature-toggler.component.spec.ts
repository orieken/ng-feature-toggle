import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTogglerComponent } from './feature-toggler.component';

describe('FeatureTogglerComponent', () => {
  let component: FeatureTogglerComponent;
  let fixture: ComponentFixture<FeatureTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
