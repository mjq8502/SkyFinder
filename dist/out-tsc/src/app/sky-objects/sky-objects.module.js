import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SkyObjectsPage } from './sky-objects.page';
var routes = [
    {
        path: '',
        component: SkyObjectsPage
    }
];
var SkyObjectsPageModule = /** @class */ (function () {
    function SkyObjectsPageModule() {
    }
    SkyObjectsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SkyObjectsPage]
        })
    ], SkyObjectsPageModule);
    return SkyObjectsPageModule;
}());
export { SkyObjectsPageModule };
//# sourceMappingURL=sky-objects.module.js.map