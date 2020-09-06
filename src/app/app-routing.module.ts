import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EmergencyComponent } from './pages/emergency/emergency.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
