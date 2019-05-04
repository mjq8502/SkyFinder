import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
var themes = {
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
var AppSettingsPage = /** @class */ (function () {
    function AppSettingsPage(theme) {
        this.theme = theme;
        //private choice: String;
        this.items = [];
        console.log('why call the constructor so much');
    }
    AppSettingsPage.prototype.ngOnInit = function () {
        console.log('appSettingsPage on init');
        console.log('theme says is default set = ' + this.theme.isDefaultThemeSet);
        console.log('on init currentTheme 1 = ' + this.currentTheme);
        this.currentTheme = this.theme.themecurrentTheme;
        console.log('on init currentTheme 2 = ' + this.currentTheme);
        console.log('theme service current = ' + this.theme);
        if (this.theme.themeSetCounter == 1) {
            console.log('maybe set radio here now.');
            this.currentTheme = 'autumn';
        }
        else {
            console.log('dont touch radio');
        }
    };
    AppSettingsPage.prototype.changeTheme = function (event) {
        console.log('edv = ' + event);
        this.theme.setTheme(themes[event.detail.value]);
        this.currentTheme = event.detail.value;
        this.theme.themecurrentTheme = this.currentTheme;
        console.log('change theme currentTheme = ' + this.currentTheme);
        console.log('appsetting  theme currentTheme = ' + this.theme.themecurrentTheme);
    };
    AppSettingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-appSettings',
            templateUrl: 'appSettings.page.html',
            styleUrls: ['appSettings.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ThemeService])
    ], AppSettingsPage);
    return AppSettingsPage;
}());
export { AppSettingsPage };
//# sourceMappingURL=appSettings.page.js.map