import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class FeatureTogglerModule { }
