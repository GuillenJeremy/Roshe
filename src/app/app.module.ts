import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmergencyButtonComponent} from './components/emergency-button/emergency-button.component';
import {} from './components/common/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    EmergencyButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
