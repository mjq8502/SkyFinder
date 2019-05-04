import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PathsPage } from './paths.page';
var routes = [
    {
        path: '',
        component: PathsPage
    }
];
var PathsPageModule = /** @class */ (function () {
    function PathsPageModule() {
    }
    PathsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PathsPage]
        })
    ], PathsPageModule);
    return PathsPageModule;
}());
export { PathsPageModule };
//# sourceMappingURL=paths.module.js.map