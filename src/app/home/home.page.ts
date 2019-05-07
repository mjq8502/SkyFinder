import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

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
    primary: '#495867',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#7b8084',
    light: '#000000'
  },
  original_night: {
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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private theme: ThemeService){
    console.log('Home page is defaulttheme = ' + theme.isDefaultThemeSet);
    // if(this.theme.themeSetCounter == 0)  //if(theme.isDefaultThemeSet == false)
    // {
    //   console.log('home page Themesetcounter = ' + this.theme.themeSetCounter);
    //   this.theme.setTheme(themes.autumn);
    // }
  }

}
