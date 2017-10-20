import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toggleState } from './toggle-state';
import { TOGGLE_STATE } from './toggle-state.token';
import { FeatureTogglerComponent } from './feature-toggler.component';

@NgModule({
  declarations: [
    FeatureTogglerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureTogglerComponent
  ],
  providers: [
    { provide: TOGGLE_STATE, useValue: toggleState }
  ]
})
export class FeatureTogglerModule { }
