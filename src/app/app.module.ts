import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureTogglerModule } from './modules/feature-toggler/feature-toggler.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureTogglerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
