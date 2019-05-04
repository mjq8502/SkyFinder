import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SkyObjectService } from '../SkyObjects.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
var PathDetailPage = /** @class */ (function () {
    function PathDetailPage(skyObjectService, route, storage) {
        this.skyObjectService = skyObjectService;
        this.route = route;
        this.storage = storage;
        this.skyPaths2 = [];
        this.telescopes = [];
        this.currentObjectIndex = 0;
        this.reachedFinalObject = false;
        console.log('id param: ' + this.route.snapshot.paramMap.get('id'));
    }
    PathDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.getScopes();
        // Or to get a key/value pair
        this.storage.get('Paths').then(function (val) {
            console.log('Path ', val);
            _this.skyPaths2 = val;
            _this.selectedPath = _this.skyPaths2.find(function (z) { return z.SkyPathID == +_this.route.snapshot.paramMap.get('id'); });
            _this.currentObject = _this.selectedPath.SkyObjects[_this.currentObjectIndex];
            if (_this.selectedPath.SkyObjects.length > 1) { // Make sure there are at least 2 objects
                console.log('Hey 3');
                var nextObject = _this.selectedPath.SkyObjects[_this.currentObjectIndex + 1];
                var RATotalSecondsOfNext = (nextObject.RA_Hour * 60 * 60) + (nextObject.RA_Min * 60) + nextObject.RA_Sec;
                var RATotalSecondsOfCurrent = (_this.currentObject.RA_Hour * 60 * 60) + (_this.currentObject.RA_Min * 60) + _this.currentObject.RA_Sec;
                console.log('going to convert RA');
                _this.ConvertToHHMM(RATotalSecondsOfNext, RATotalSecondsOfCurrent, _this.selectedTelescope.RA_SecondsPerTurn);
                _this.RAHoursToNextObject = _this.tempHours;
                _this.RAMinutesToNextObject = _this.tempMin;
                if ((RATotalSecondsOfNext - RATotalSecondsOfCurrent) > 0) {
                    _this.RADirection = 'CW';
                }
                else {
                    _this.RADirection = 'CCW';
                }
                _this.RAString = _this.HHMM_Display_String(_this.tempHours, _this.tempMin);
                console.log('going to convert Dec');
                var DecTotalSecondsOfNext = (nextObject.Decl_Hour * 60 * 60) + (nextObject.Decl_Min * 60) + nextObject.Decl_Sec;
                var DecTotalSecondsOfCurrent = (_this.currentObject.Decl_Hour * 60 * 60) + (_this.currentObject.Decl_Min * 60) + _this.currentObject.Decl_Sec;
                _this.ConvertToHHMM(DecTotalSecondsOfNext, DecTotalSecondsOfCurrent, _this.selectedTelescope.Decl_SecondsPerTurn);
                _this.DecHoursToNextObject = _this.tempHours;
                _this.DecMinutesToNextObject = _this.tempMin;
                if ((DecTotalSecondsOfNext - DecTotalSecondsOfCurrent) > 0) {
                    _this.DecDirection = 'North';
                }
                else {
                    _this.DecDirection = 'South';
                }
            }
            _this.DecString = _this.HHMM_Display_String(_this.tempHours, _this.tempMin);
        });
        this.reachedFinalObject = false;
        console.log('The end');
    };
    PathDetailPage.prototype.getScopes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var value;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('Telescopes')];
                    case 1:
                        value = _a.sent();
                        console.log('async Telescopes ', value);
                        this.telescopes = value;
                        // ID = 2 is the Celestron C4.5
                        this.selectedTelescope = this.telescopes.find(function (z) { return z.TelescopeID == 2; });
                        return [2 /*return*/];
                }
            });
        });
    };
    PathDetailPage.prototype.ConvertToHHMM = function (TotalSecondsOfNext, TotalSecondsOfCurrent, SecondsPerTurn) {
        console.log('ConvertToHHMM');
        var a = (TotalSecondsOfNext - TotalSecondsOfCurrent);
        console.log('a ' + a);
        var b = a / SecondsPerTurn;
        console.log('b ' + b);
        this.tempHours = Math.abs(Math.trunc(b));
        var c = b - (Math.trunc(b));
        console.log('c ' + c);
        var d = Math.round(c * 60);
        console.log('d ' + d);
        this.tempMin = Math.abs(d);
        console.log('H ' + this.tempHours + '  M ' + this.tempMin);
    };
    PathDetailPage.prototype.HHMM_Display_String = function (tempHours, tempMin) {
        var x = (this.tempHours * 3600) + (this.tempMin * 60);
        var date = new Date(null);
        date.setSeconds(x); // specify value for SECONDS here
        var timeString = date.toISOString().substr(11, 8);
        console.log('timestring ' + timeString);
        return timeString;
    };
    PathDetailPage.prototype.button_click_Prev = function () {
        if (this.currentObjectIndex > 0) {
            this.currentObjectIndex = this.currentObjectIndex - 1;
            this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
            this.reachedFinalObject = false;
        }
    };
    PathDetailPage.prototype.button_click_Next = function () {
        if (this.currentObjectIndex + 1 < this.selectedPath.SkyObjects.length) {
            this.currentObjectIndex = this.currentObjectIndex + 1;
            this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
            if (this.currentObjectIndex + 1 == this.selectedPath.SkyObjects.length) {
                this.reachedFinalObject = true;
            }
        }
    };
    PathDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-path-detail',
            templateUrl: './path-detail.page.html',
            styleUrls: ['./path-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SkyObjectService,
            ActivatedRoute,
            Storage])
    ], PathDetailPage);
    return PathDetailPage;
}());
export { PathDetailPage };
//# sourceMappingURL=path-detail.page.js.map