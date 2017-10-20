import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FeatureTogglerComponent } from './feature-toggler.component';
import { TOGGLE_STATE } from './toggle-state.token';
import { ToggleState } from './toggle-state';

describe('FeatureTogglerComponent', () => {
  let component: FeatureTogglerComponent;
  let fixture: ComponentFixture<FeatureTogglerComponent>;
  const mockToggleStates = {
    'foo': true,
    'bar': false,
    'bizz': true,
    'buzz': false,
    'bazz': true
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTogglerComponent ],
      providers: [
        { provide: TOGGLE_STATE, useValue: mockToggleStates }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a checkbox for each feature toggle', () => {
    const checkboxes = fixture.debugElement.queryAll(By.css('input[type=checkbox]'));
    expect(checkboxes.length).toBe(5);
  });

  it('should have active feature toggles checked', () => {
    const checkboxes = fixture.debugElement.queryAll(By.css('input[type=checkbox]'));
    expect(checkboxes.filter((c) => c.nativeElement.checked).length).toBe(3);
  });

  it('should not have inactive feature toggles checked', () => {
    const checkboxes = fixture.debugElement.queryAll(By.css('input[type=checkbox]'));
    expect(checkboxes.filter((c) => !c.nativeElement.checked).length).toBe(2);
  });

  it('should update the toggle state to true when you check one', () => {
    const unchecked = fixture.debugElement.query(By.css('#bar'));
    unchecked.nativeElement.click();
    fixture.detectChanges();
    expect(TestBed.get(TOGGLE_STATE)['bar']).toBe(true);
  });

  it('should update the toggle state to false when you uncheck one', () => {
    const checked = fixture.debugElement.query(By.css('#foo'));
    checked.nativeElement.click();
    fixture.detectChanges();
    expect(TestBed.get(TOGGLE_STATE)['foo']).toBe(false);
  });
});
