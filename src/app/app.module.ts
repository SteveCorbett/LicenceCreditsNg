import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LicenceCreditsComponent } from './components/licence-credits/licence-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    LicenceCreditsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
