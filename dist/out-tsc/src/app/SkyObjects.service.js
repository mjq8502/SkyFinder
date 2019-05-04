import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
var SkyObjectService = /** @class */ (function () {
    function SkyObjectService(http) {
        this.http = http;
        //private ProductUrl = 'assets/products.json';
        this.SkyObjectUrl = 'assets/SkyObjects.json';
        this.SkyPathUrl = 'assets/SkyPaths.json';
        this.SkyPath2Url = 'assets/SkyPaths2.json';
        this.TelescopeUrl = 'assets/TelescopeJson.json';
    }
    SkyObjectService.prototype.getSkyObjects = function () {
        return this.http.get(this.SkyObjectUrl).pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    SkyObjectService.prototype.getSkyPaths = function () {
        return this.http.get(this.SkyPathUrl).pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    SkyObjectService.prototype.getSkyPaths2 = function () {
        return this.http.get(this.SkyPath2Url).pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    SkyObjectService.prototype.getTelescopes = function () {
        return this.http.get(this.TelescopeUrl).pipe(tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), catchError(this.handleError));
    };
    SkyObjectService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An error occured: ${err.error.message}';
        }
        else {
            errorMessage = 'Server returned code: ${err.status}, error message is ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    };
    SkyObjectService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SkyObjectService);
    return SkyObjectService;
}());
export { SkyObjectService };
//# sourceMappingURL=SkyObjects.service.js.map