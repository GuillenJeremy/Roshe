import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PostComponent } from './components/post/post.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EmergencyComponent } from './pages/emergency/emergency.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmergencyContactsComponent } from './pages/emergency-contacts/emergency-contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    ForumComponent,
    CarrouselComponent,
    PostComponent,
    SettingsComponent,
    EmergencyComponent,
    ContactComponent,
    EmergencyContactsComponent
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
