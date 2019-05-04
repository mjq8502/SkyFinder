var _this = this;
import * as tslib_1 from "tslib";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppSettingsPage } from './appSettings.page';
describe('AppSettingsPage', function () {
    var component;
    var fixture;
    var appSettingsPage;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AppSettingsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, TestBed.createComponent(AppSettingsPage)];
                case 1:
                    fixture = _a.sent();
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should have a list of 10 elements', function () {
        appSettingsPage = fixture.nativeElement;
        var items = appSettingsPage.querySelectorAll('ion-item');
        expect(items.length).toEqual(10);
    });
});
//# sourceMappingURL=appSettings.page.spec.js.map