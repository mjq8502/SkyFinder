import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppSettingsPage } from './appSettings.page';
var AppSettingsPageModule = /** @class */ (function () {
    function AppSettingsPageModule() {
    }
    AppSettingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: AppSettingsPage
                    }
                ])
            ],
            declarations: [AppSettingsPage]
        })
    ], AppSettingsPageModule);
    return AppSettingsPageModule;
}());
export { AppSettingsPageModule };
//# sourceMappingURL=appSettings.module.js.map