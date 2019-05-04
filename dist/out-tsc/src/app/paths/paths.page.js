import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SkyObjectService } from '../SkyObjects.service';
import { Storage } from '@ionic/storage';
var PathsPage = /** @class */ (function () {
    function PathsPage(skyObjectService, storage) {
        this.skyObjectService = skyObjectService;
        this.storage = storage;
        this.skyPaths2 = [];
        this.telescopes = [];
    }
    PathsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.skyObjectService.getSkyPaths2().subscribe(function (skyPaths2) {
            _this.skyPaths2 = skyPaths2;
            _this.storage.set('Paths', _this.skyPaths2);
        }, function (error) { return _this.errorMessage = error; });
        this.skyObjectService.getTelescopes().subscribe(function (telescopes) {
            _this.telescopes = telescopes;
            _this.storage.set('Telescopes', _this.telescopes);
        }, function (error) { return _this.errorMessage = error; });
    };
    PathsPage = tslib_1.__decorate([
        Component({
            selector: 'app-paths',
            templateUrl: './paths.page.html',
            styleUrls: ['./paths.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SkyObjectService,
            Storage])
    ], PathsPage);
    return PathsPage;
}());
export { PathsPage };
//# sourceMappingURL=paths.page.js.map