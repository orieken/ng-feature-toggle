import { Component } from '@angular/core';
import { FeatureToggle } from './modules/feature-toggler/feature-toggle';

@Component({
  selector: 'app-root',
  template: `
    <feature-toggler></feature-toggler>
    <div *ngIf='someToggle'>
      Toggled On
    </div>
    <div *ngIf='!someToggle'>
      Toggled Off
    </div>
  `
})
export class AppComponent {
  title = 'app';

  @FeatureToggle
  public someToggle: boolean;
}
