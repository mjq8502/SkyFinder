import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SkyObjectService } from "../SkyObjects.service";
var SkyObjectsPage = /** @class */ (function () {
    function SkyObjectsPage(skyObjectService) {
        this.skyObjectService = skyObjectService;
        this.skyObjects = [];
    }
    SkyObjectsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.skyObjectService.getSkyObjects().subscribe(function (skyObjects) { return _this.skyObjects = skyObjects; }, function (error) { return _this.errorMessage = error; });
    };
    SkyObjectsPage = tslib_1.__decorate([
        Component({
            selector: 'app-sky-objects',
            templateUrl: './sky-objects.page.html',
            styleUrls: ['./sky-objects.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SkyObjectService])
    ], SkyObjectsPage);
    return SkyObjectsPage;
}());
export { SkyObjectsPage };
//# sourceMappingURL=sky-objects.page.js.map