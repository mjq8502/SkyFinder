import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Telescopes',
      url: '/telescopes',
      icon: 'list'
    },
    {
      title: 'Sky Objects',
      url: '/sky-objects',
      icon: 'list'
    },
    {
      title: 'Paths',
      url: '/paths',
      icon: 'list'
    },
    {
      title: 'App Settings',
      url: '/appSettings',
      icon: 'list'
    }
  ];

  selectedTheme: String;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settings: SettingsService) 
  {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.initializeApp();
    console.log('app.comp ' + this.selectedTheme)
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
