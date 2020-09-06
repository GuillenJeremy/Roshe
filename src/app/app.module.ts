import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmergencyButtonComponent} from './components/emergency-button/emergency-button.component';
import {NavbarComponent} from './components/common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PostComponent } from './components/post/post.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EmergencyComponent } from './pages/emergency/emergency.component';
@NgModule({
  declarations: [
    AppComponent,
    EmergencyButtonComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    ForumComponent,
    CarrouselComponent,
    PostComponent,
    SettingsComponent,
    EmergencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
