import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../services/userSettings.service';
import { UserSettings } from '../models/user-settings';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  settings: UserSettings;

  constructor(
    private userSettingsService: UserSettingsService
  ) { }

  ngOnInit() {
    this.getUserSettings();
  }

  getUserSettings(): void {
    this.userSettingsService.getUserSettings()
      .subscribe(settings => {
        this.settings = settings;
      });
  }

  updateUserSettings(): void {
    this.userSettingsService.updateUserSettings(this.settings).subscribe();
  }

}
