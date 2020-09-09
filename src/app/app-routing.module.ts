import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EmergencyComponent } from './pages/emergency/emergency.component';
import { EmergencyContactsComponent } from './pages/emergency-contacts/emergency-contacts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'emergency',
    component: EmergencyComponent
  },
  {
    path: 'settings/contacts',
    component: EmergencyContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
