import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { ThemeService } from '../theme.service';
import { stringify } from '@angular/core/src/render3/util';

const themes = {
  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-appSettings',
  templateUrl: 'appSettings.page.html',
  styleUrls: ['appSettings.page.scss']
})
export class AppSettingsPage implements OnInit {
  private selectedItem: any;
  selectedTheme: String;
  private choice: String;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private settings: SettingsService,
    private theme: ThemeService) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

  ngOnInit() {
  }

  changeTheme(event) {
    //console.log(name);
    this.theme.setTheme(themes[event.detail.value]);
  }


}
