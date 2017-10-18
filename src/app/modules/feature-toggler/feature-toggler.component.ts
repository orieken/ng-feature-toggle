import { Component } from '@angular/core';
import { toggleState } from './feature-toggle';

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
  readonly toggles = Object.keys(toggleState)
                           .map((key) => {
                             return { key: key, value: toggleState[key] };
                           });

  public setToggleState(target: HTMLInputElement) {
    toggleState[target.id] = target.checked;
  }
}
