import { Component, Inject } from '@angular/core';
import { TOGGLE_STATE } from './toggle-state.token';
import { ToggleState } from './toggle-state';

@Component({
  selector: 'feature-toggler',
  template: `
    <ul>
      <li *ngFor='let toggle of toggles'>
        <label>
          <input type='checkbox'
            [id]='toggle.key'
            [checked]='toggle.value'
            (change)='setToggleState($event.target)'/>
          {{ toggle.key }}
        </label>
      </li>
    </ul>
  `
})
export class FeatureTogglerComponent {
  constructor(@Inject(TOGGLE_STATE) private toggleState: ToggleState) {}

  readonly toggles = Object.keys(this.toggleState)
                           .map((key) => {
                             return { key: key, value: this.toggleState[key] };
                           });

  public setToggleState(target: HTMLInputElement) {
    this.toggleState[target.id] = target.checked;
  }
}
