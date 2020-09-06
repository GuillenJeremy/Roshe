import { Component, OnInit } from '@angular/core';
import { SettingMenuItem } from 'src/app/interfaces/common.types';
import {SettingsService} from '../../service/settings-service/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsItems: SettingMenuItem[];
  constructor(private settings_service: SettingsService) { }

  ngOnInit(): void {
    this.settingsItems = this.settings_service.getSettingsItems();
  }

}
