import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TelescopesPage } from './telescopes.page';
var routes = [
    {
        path: '',
        component: TelescopesPage
    }
];
var TelescopesPageModule = /** @class */ (function () {
    function TelescopesPageModule() {
    }
    TelescopesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TelescopesPage]
        })
    ], TelescopesPageModule);
    return TelescopesPageModule;
}());
export { TelescopesPageModule };
//# sourceMappingURL=telescopes.module.js.map