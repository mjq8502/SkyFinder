import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PathDetailPage } from './path-detail.page';
var routes = [
    {
        path: '',
        component: PathDetailPage
    }
];
var PathDetailPageModule = /** @class */ (function () {
    function PathDetailPageModule() {
    }
    PathDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PathDetailPage]
        })
    ], PathDetailPageModule);
    return PathDetailPageModule;
}());
export { PathDetailPageModule };
//# sourceMappingURL=path-detail.module.js.map