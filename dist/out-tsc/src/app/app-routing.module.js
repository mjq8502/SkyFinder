import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'appSettings',
        loadChildren: './appSettings/appSettings.module#AppSettingsPageModule'
    },
    { path: 'telescopes', loadChildren: './telescopes/telescopes.module#TelescopesPageModule' },
    { path: 'sky-objects', loadChildren: './sky-objects/sky-objects.module#SkyObjectsPageModule' },
    { path: 'paths', loadChildren: './paths/paths.module#PathsPageModule' },
    { path: 'path-detail', loadChildren: './path-detail/path-detail.module#PathDetailPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map