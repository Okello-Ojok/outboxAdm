(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-reg/admin-reg.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin-reg/admin-reg.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-card class=\"login-card\">\n    <mat-card-header>\n      <mat-card-title class=\"title\">\n        <h1>Admin Registration</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"First Name\" [(ngModel)]=\"firstname\" name=\"firstname\" required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Last Name\" [(ngModel)]=\"lastname\" name=\"lastname\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n        </mat-form-field>\n\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" minlength=\"8\"\n                  required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Repeat Password\" [(ngModel)]=\"repeatpassword\" name=\"repeatpassword\" type=\"password\"\n                  minlength=\"8\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n\n        </table>\n        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>\n\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Telephone\" [(ngModel)]=\"telephone\" name=\"telephone\" required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Alternate Telephone\" [(ngModel)]=\"alttelephone\" name=\"alttelephone\"\n                  required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field>\n                <mat-select placeholder=\"ID Type\" class=\"full-width\" cellspacing=\"0\">\n                  <mat-option *ngFor=\"let idtype of idType\" [value]=\"idtype.id\">{{idtype.name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\" cellspacing=\"0\">\n                <input matInput placeholder=\"ID Number\" [(ngModel)]=\"idnumber\" name=\"idnumber\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n\n        </table>\n\n      </form>\n    </mat-card-content>\n\n\n    <div class=\"social-login\">\n      <p>Or Sign Up With</p>\n      <mat-icon>\n        <i class=\"material-icons\">\n          duo\n        </i>\n      </mat-icon>\n      <mat-icon>\n        <i class=\"material-icons\">\n          speaker_phone\n        </i></mat-icon>\n      <mat-icon>\n        <i class=\"material-icons\">\n          chat\n        </i>\n      </mat-icon>\n\n\n    </div>\n\n    <mat-card-actions align=\"end\">\n\n      <button mat-raised-button (click)=\"showForm()\" color=\"primary\">Next Step</button>\n\n    </mat-card-actions>\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-reg/admin-reg.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin-reg/admin-reg.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 600px;\n  /* height: 400px; */\n  margin: 3rem auto; }\n\n.login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n\n[hidden] {\n  display: none !important; }\n\n/* .material-icons {\n    font-size: 40px;\n    margin-right: 1em;\n}\n */\n"

/***/ }),

/***/ "./src/app/admin-reg/admin-reg.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin-reg/admin-reg.component.ts ***!
  \**************************************************/
/*! exports provided: AdminRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegComponent", function() { return AdminRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminRegComponent = /** @class */ (function () {
    function AdminRegComponent() {
        this.show = true;
        this.hidden = true;
        this.idType = [
            { id: 1, name: "National ID" },
            { id: 2, name: "Passport" },
            { id: 3, name: "Work ID" }
        ];
    }
    AdminRegComponent.prototype.ngOnInit = function () {
    };
    AdminRegComponent.prototype.showForm = function () {
        this.show = !this.show;
    };
    AdminRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-reg',
            template: __webpack_require__(/*! ./admin-reg.component.html */ "./src/app/admin-reg/admin-reg.component.html"),
            styles: [__webpack_require__(/*! ./admin-reg.component.scss */ "./src/app/admin-reg/admin-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminRegComponent);
    return AdminRegComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_reg_admin_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-reg/admin-reg.component */ "./src/app/admin-reg/admin-reg.component.ts");
/* harmony import */ var _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-reg/user-reg.component */ "./src/app/user-reg/user-reg.component.ts");
/* harmony import */ var _assets_create_asset_create_asset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/create-asset/create-asset.component */ "./src/app/assets/create-asset/create-asset.component.ts");
/* harmony import */ var _assets_branding_branding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/branding/branding.component */ "./src/app/assets/branding/branding.component.ts");
/* harmony import */ var _events_events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/events/events.component */ "./src/app/events/events/events.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
/* harmony import */ var _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./residents-list/residents-list.component */ "./src/app/residents-list/residents-list.component.ts");
/* harmony import */ var _events_event_register_event_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/event-register/event-register.component */ "./src/app/events/event-register/event-register.component.ts");
/* harmony import */ var _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/create-event/create-event.component */ "./src/app/events/create-event/create-event.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _events_events_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/events/event-detail/event-detail.component */ "./src/app/events/events/event-detail/event-detail.component.ts");
/* harmony import */ var _page_under0construction_page_under0construction_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-under0construction/page-under0construction.component */ "./src/app/page-under0construction/page-under0construction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//import { EventsListComponent } from './events/events-list/events-list.component';


var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'admin-register',
        component: _admin_reg_admin_reg_component__WEBPACK_IMPORTED_MODULE_3__["AdminRegComponent"]
    },
    {
        path: 'resident-register',
        component: _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_4__["UserRegComponent"]
    },
    {
        path: 'home',
        component: _page_under0construction_page_under0construction_component__WEBPACK_IMPORTED_MODULE_14__["PageUnder0constructionComponent"]
    },
    {
        path: 'assets',
        component: _assets_create_asset_create_asset_component__WEBPACK_IMPORTED_MODULE_5__["CreateAssetComponent"]
    },
    {
        path: 'branding',
        component: _assets_branding_branding_component__WEBPACK_IMPORTED_MODULE_6__["BrandingComponent"]
    },
    {
        path: 'events',
        component: _events_events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"]
    },
    {
        path: 'event-details/:id',
        component: _events_events_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_13__["EventDetailComponent"]
    },
    {
        path: 'utilities',
        component: _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_8__["UtilitiesComponent"]
    },
    {
        path: 'residents',
        component: _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_9__["ResidentsListComponent"]
    },
    {
        path: 'attend',
        component: _events_event_register_event_register_component__WEBPACK_IMPORTED_MODULE_10__["EventRegisterComponent"]
    },
    {
        path: 'create-event',
        component: _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_11__["CreateEventComponent"]
    },
    {
        path: 'edit-event/:eventID',
        component: _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_11__["CreateEventComponent"]
    },
    {
        path: 'page-under-construction',
        component: _page_under0construction_page_under0construction_component__WEBPACK_IMPORTED_MODULE_14__["PageUnder0constructionComponent"]
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-our-nav></app-our-nav> -->\n\n<!-- <app-login></app-login> -->\n<app-our-nav></app-our-nav>\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'outboxFront';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _our_nav_our_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./our-nav/our-nav.component */ "./src/app/our-nav/our-nav.component.ts");
/* harmony import */ var _assets_assets_assets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/assets/assets.component */ "./src/app/assets/assets/assets.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-reg/user-reg.component */ "./src/app/user-reg/user-reg.component.ts");
/* harmony import */ var _admin_reg_admin_reg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-reg/admin-reg.component */ "./src/app/admin-reg/admin-reg.component.ts");
/* harmony import */ var _assets_create_asset_create_asset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/create-asset/create-asset.component */ "./src/app/assets/create-asset/create-asset.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/payments/payments.component.ts");
/* harmony import */ var _assets_branding_branding_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/branding/branding.component */ "./src/app/assets/branding/branding.component.ts");
/* harmony import */ var _events_events_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./events/events/events.component */ "./src/app/events/events/events.component.ts");
/* harmony import */ var _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utilities/utilities.component */ "./src/app/utilities/utilities.component.ts");
/* harmony import */ var _residents_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./residents.service */ "./src/app/residents.service.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./events.service */ "./src/app/events.service.ts");
/* harmony import */ var _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./residents-list/residents-list.component */ "./src/app/residents-list/residents-list.component.ts");
/* harmony import */ var _events_event_register_event_register_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./events/event-register/event-register.component */ "./src/app/events/event-register/event-register.component.ts");
/* harmony import */ var _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./events/create-event/create-event.component */ "./src/app/events/create-event/create-event.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _events_events_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./events/events/event-detail/event-detail.component */ "./src/app/events/events/event-detail/event-detail.component.ts");
/* harmony import */ var _event_attendee_event_attendee_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./event-attendee/event-attendee.component */ "./src/app/event-attendee/event-attendee.component.ts");
/* harmony import */ var _events_events_board_events_board_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./events/events-board/events-board.component */ "./src/app/events/events-board/events-board.component.ts");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./loading.component */ "./src/app/loading.component.ts");
/* harmony import */ var _page_under0construction_page_under0construction_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./page-under0construction/page-under0construction.component */ "./src/app/page-under0construction/page-under0construction.component.ts");
/* harmony import */ var _dialogs_submit_event_submit_event_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialogs/submit-event/submit-event.component */ "./src/app/dialogs/submit-event/submit-event.component.ts");
/* harmony import */ var _dialogs_submit_attend_submit_attend_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dialogs/submit-attend/submit-attend.component */ "./src/app/dialogs/submit-attend/submit-attend.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _our_nav_our_nav_component__WEBPACK_IMPORTED_MODULE_9__["OurNavComponent"],
                _assets_assets_assets_component__WEBPACK_IMPORTED_MODULE_10__["AssetsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _user_reg_user_reg_component__WEBPACK_IMPORTED_MODULE_12__["UserRegComponent"],
                _admin_reg_admin_reg_component__WEBPACK_IMPORTED_MODULE_13__["AdminRegComponent"],
                _assets_create_asset_create_asset_component__WEBPACK_IMPORTED_MODULE_14__["CreateAssetComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_15__["PaymentsComponent"],
                _assets_branding_branding_component__WEBPACK_IMPORTED_MODULE_16__["BrandingComponent"],
                _events_events_events_component__WEBPACK_IMPORTED_MODULE_17__["EventsComponent"],
                _utilities_utilities_component__WEBPACK_IMPORTED_MODULE_18__["UtilitiesComponent"],
                _residents_list_residents_list_component__WEBPACK_IMPORTED_MODULE_21__["ResidentsListComponent"],
                _events_event_register_event_register_component__WEBPACK_IMPORTED_MODULE_22__["EventRegisterComponent"],
                _events_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_23__["CreateEventComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_24__["PageNotFoundComponent"],
                _events_events_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_25__["EventDetailComponent"],
                _event_attendee_event_attendee_component__WEBPACK_IMPORTED_MODULE_26__["EventAttendeeComponent"],
                _events_events_board_events_board_component__WEBPACK_IMPORTED_MODULE_27__["EventsBoardComponent"],
                _loading_component__WEBPACK_IMPORTED_MODULE_28__["LoadingComponent"],
                _page_under0construction_page_under0construction_component__WEBPACK_IMPORTED_MODULE_29__["PageUnder0constructionComponent"],
                _dialogs_submit_event_submit_event_component__WEBPACK_IMPORTED_MODULE_30__["SubmitEventComponent"],
                _dialogs_submit_attend_submit_attend_component__WEBPACK_IMPORTED_MODULE_31__["SubmitAttendComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"]
            ],
            entryComponents: [_dialogs_submit_event_submit_event_component__WEBPACK_IMPORTED_MODULE_30__["SubmitEventComponent"], _dialogs_submit_attend_submit_attend_component__WEBPACK_IMPORTED_MODULE_31__["SubmitAttendComponent"]],
            providers: [_residents_service__WEBPACK_IMPORTED_MODULE_19__["ResidentsService"], _events_service__WEBPACK_IMPORTED_MODULE_20__["EventsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assets/assets/assets.component.html":
/*!*****************************************************!*\
  !*** ./src/app/assets/assets/assets.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/assets/assets/assets.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/assets/assets/assets.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".assets-card {\n  width: 600px;\n  height: 400px;\n  margin: 3rem auto; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/assets/assets/assets.component.ts":
/*!***************************************************!*\
  !*** ./src/app/assets/assets/assets.component.ts ***!
  \***************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetsComponent = /** @class */ (function () {
    function AssetsComponent() {
    }
    AssetsComponent.prototype.ngOnInit = function () {
    };
    AssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./assets.component.html */ "./src/app/assets/assets/assets.component.html"),
            styles: [__webpack_require__(/*! ./assets.component.scss */ "./src/app/assets/assets/assets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/branding/branding.component.html":
/*!*********************************************************!*\
  !*** ./src/app/assets/branding/branding.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-card class=\"assets-card\">\n    <mat-card-header>\n      <mat-card-title class=\"title\">\n        <h1>Outbox/UA Branding Materials</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Asset Name\" [(ngModel)]=\"assetname\" name=\"assetname\" required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field>\n                <mat-select placeholder=\"Condition\" name=\"conditions\" [(ngModel)]=\"condition\">\n                  <mat-option *ngFor=\"let condition of conditions\" [value]=\"condition\">\n                    {{condition}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </td>\n\n          </tr>\n        </table>\n\n        <table class=\"full-width\" cellspacing=\"5\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Comments on current condition\" [(ngModel)]=\"currentcomment\" name=\"currentcomment\"\n                  required>\n                  <mat-hint>Enter comments of item condition before taken. You can use a mix of letters and numbers.</mat-hint>\n              </mat-form-field>\n            </td>\n          </tr>\n\n        </table>\n\n\n        <table class=\"full-width\" cellspacing=\"5\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Number of items taken\" [(ngModel)]=\"numbertaken\" name=\"numbertaken\"\n                  required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date taken\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1></mat-datepicker>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date returned\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                <mat-datepicker #picker2></mat-datepicker>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Comments on return\" [(ngModel)]=\"returncomment\" name=\"returncomment\"\n                  required>\n                  <mat-hint>Enter comments of item condition on return. You can use a mix of letters and numbers.</mat-hint>\n              </mat-form-field>\n            </td>\n\n\n\n\n\n\n          </tr>\n\n        </table>\n        <button mat-raised-button type=\"submit\" color=\"primary\">Record Asset</button>\n\n      </form>\n    </mat-card-content>\n\n\n    <!-- <mat-card-actions align=\"end\">\n  \n        <button mat-raised-button (click)=\"showForm()\" color=\"primary\">Next Step</button>\n  \n      </mat-card-actions> -->\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/assets/branding/branding.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/assets/branding/branding.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".assets-card {\n  width: 600px;\n  height: 400px;\n  margin: 3rem auto; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/assets/branding/branding.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/assets/branding/branding.component.ts ***!
  \*******************************************************/
/*! exports provided: BrandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandingComponent", function() { return BrandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrandingComponent = /** @class */ (function () {
    function BrandingComponent() {
        this.condition = null;
        this.conditions = ['Good', 'Very Good', 'Poor', 'Very Poor'];
    }
    BrandingComponent.prototype.ngOnInit = function () {
    };
    BrandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branding',
            template: __webpack_require__(/*! ./branding.component.html */ "./src/app/assets/branding/branding.component.html"),
            styles: [__webpack_require__(/*! ./branding.component.scss */ "./src/app/assets/branding/branding.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandingComponent);
    return BrandingComponent;
}());



/***/ }),

/***/ "./src/app/assets/create-asset/create-asset.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/assets/create-asset/create-asset.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <mat-card class=\"assets-card\">\n      <mat-card-header>\n        <mat-card-title class=\"title\">\n          <h1>Assets Recording</h1>\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <form>\n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Asset Name\" [(ngModel)]=\"assetname\" name=\"assetname\" required>\n                </mat-form-field>\n              </td>\n  \n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Tag Number\" [(ngModel)]=\"tagnumber\" name=\"tagnumber\" required>\n                </mat-form-field>\n              </td>\n  \n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Serial Number\" [(ngModel)]=\"serialnumber\" name=\"serialnumber\" required>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n  \n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Manufacturer/Seller\" [(ngModel)]=\"seller\" name=\"seller\" required>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Class\" [(ngModel)]=\"assetclass\" name=\"assetclass\" required>\n                </mat-form-field>\n              </td>\n  \n            </tr>\n  \n          </table>\n  \n  \n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Color\" [(ngModel)]=\"color\" name=\"color\" required>\n                </mat-form-field>\n              </td>\n  \n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\" required>\n                </mat-form-field>\n              </td>\n  \n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Owner\" [(ngModel)]=\"owner\" name=\"description\" required>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"full-width\" cellspacing=\"0\">\n                  <input matInput placeholder=\"Category\" [(ngModel)]=\"category\" name=\"category\" required>\n                </mat-form-field>\n              </td>\n  \n              <td>\n                \n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Purchase Date\" required>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                \n              </td>\n  \n              <td>\n                  <mat-form-field class=\"full-width\" cellspacing=\"0\">\n                    <input matInput placeholder=\"Purchase Price\" [(ngModel)]=\"purchaseprice\" name=\"purchaseprice\" required>\n                  </mat-form-field>\n                </td>\n  \n  \n            </tr>\n  \n          </table>\n          <button mat-raised-button type=\"submit\" color=\"primary\">Record Asset</button>\n  \n        </form>\n      </mat-card-content>\n  \n  \n      <!-- <mat-card-actions align=\"end\">\n  \n        <button mat-raised-button (click)=\"showForm()\" color=\"primary\">Next Step</button>\n  \n      </mat-card-actions> -->\n  \n    </mat-card>\n  </div>\n  "

/***/ }),

/***/ "./src/app/assets/create-asset/create-asset.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/assets/create-asset/create-asset.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".assets-card {\n  width: 600px;\n  height: 400px;\n  margin: 3rem auto; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/assets/create-asset/create-asset.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/assets/create-asset/create-asset.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAssetComponent", function() { return CreateAssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateAssetComponent = /** @class */ (function () {
    function CreateAssetComponent() {
    }
    CreateAssetComponent.prototype.ngOnInit = function () {
    };
    CreateAssetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-asset',
            template: __webpack_require__(/*! ./create-asset.component.html */ "./src/app/assets/create-asset/create-asset.component.html"),
            styles: [__webpack_require__(/*! ./create-asset.component.scss */ "./src/app/assets/create-asset/create-asset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateAssetComponent);
    return CreateAssetComponent;
}());



/***/ }),

/***/ "./src/app/config/server.json":
/*!************************************!*\
  !*** ./src/app/config/server.json ***!
  \************************************/
/*! exports provided: live_server, back_server, default */
/***/ (function(module) {

module.exports = {"live_server":"https://outboxdash.herokuapp.com/api","back_server":"/api"};

/***/ }),

/***/ "./src/app/dialogs/submit-attend/submit-attend.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/submit-attend/submit-attend.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\n    <!-- <h2 mat-dialog-title>OUTBOX HUB</h2> -->\n    <img mat-dialog-title src=\"assets/images/outbox.png\">\n    <hr>\n    <mat-dialog-content>\n      \n      <strong>{{data}}</strong>\n    </mat-dialog-content>\n    <hr>\n    <mat-dialog-actions>\n      <!-- <button mat-raised-button (click)=\"onCloseConfirm()\">CONFIRM</button>&nbsp; -->\n      <button mat-raised-button (click)=\"onCloseCancel()\">CLOSE</button>\n    </mat-dialog-actions>\n  </div>"

/***/ }),

/***/ "./src/app/dialogs/submit-attend/submit-attend.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/submit-attend/submit-attend.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/submit-attend/submit-attend.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/submit-attend/submit-attend.component.ts ***!
  \******************************************************************/
/*! exports provided: SubmitAttendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitAttendComponent", function() { return SubmitAttendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SubmitAttendComponent = /** @class */ (function () {
    function SubmitAttendComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    SubmitAttendComponent.prototype.ngOnInit = function () {
    };
    SubmitAttendComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    SubmitAttendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-attend',
            template: __webpack_require__(/*! ./submit-attend.component.html */ "./src/app/dialogs/submit-attend/submit-attend.component.html"),
            styles: [__webpack_require__(/*! ./submit-attend.component.scss */ "./src/app/dialogs/submit-attend/submit-attend.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], SubmitAttendComponent);
    return SubmitAttendComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/submit-event/submit-event.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/submit-event/submit-event.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog\">\n  <!-- <h2 mat-dialog-title>OUTBOX HUB</h2> -->\n  <img mat-dialog-title src=\"assets/images/outbox.png\">\n  <hr>\n  <mat-dialog-content>\n    <!-- Thank you for creating an event.\n    <br>\n    <br> -->\n    <strong>{{data}}</strong>\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions>\n    <!-- <button mat-raised-button (click)=\"onCloseConfirm()\">CONFIRM</button>&nbsp; -->\n    <button mat-raised-button (click)=\"onCloseCancel()\">CLOSE</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/dialogs/submit-event/submit-event.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dialogs/submit-event/submit-event.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/submit-event/submit-event.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialogs/submit-event/submit-event.component.ts ***!
  \****************************************************************/
/*! exports provided: SubmitEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitEventComponent", function() { return SubmitEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SubmitEventComponent = /** @class */ (function () {
    function SubmitEventComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
    }
    SubmitEventComponent.prototype.ngOnInit = function () {
    };
    // onCloseConfirm(){
    //   this.thisDialogRef.close('Close');
    // }
    SubmitEventComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close('Cancel');
    };
    SubmitEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submit-event',
            template: __webpack_require__(/*! ./submit-event.component.html */ "./src/app/dialogs/submit-event/submit-event.component.html"),
            styles: [__webpack_require__(/*! ./submit-event.component.scss */ "./src/app/dialogs/submit-event/submit-event.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], String])
    ], SubmitEventComponent);
    return SubmitEventComponent;
}());



/***/ }),

/***/ "./src/app/event-attendee/event-attendee.component.html":
/*!**************************************************************!*\
  !*** ./src/app/event-attendee/event-attendee.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  event-attendee works!\n</p>\n"

/***/ }),

/***/ "./src/app/event-attendee/event-attendee.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/event-attendee/event-attendee.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event-attendee/event-attendee.component.ts":
/*!************************************************************!*\
  !*** ./src/app/event-attendee/event-attendee.component.ts ***!
  \************************************************************/
/*! exports provided: EventAttendeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAttendeeComponent", function() { return EventAttendeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventAttendeeComponent = /** @class */ (function () {
    function EventAttendeeComponent() {
    }
    EventAttendeeComponent.prototype.ngOnInit = function () {
    };
    EventAttendeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-attendee',
            template: __webpack_require__(/*! ./event-attendee.component.html */ "./src/app/event-attendee/event-attendee.component.html"),
            styles: [__webpack_require__(/*! ./event-attendee.component.scss */ "./src/app/event-attendee/event-attendee.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventAttendeeComponent);
    return EventAttendeeComponent;
}());



/***/ }),

/***/ "./src/app/events.service.ts":
/*!***********************************!*\
  !*** ./src/app/events.service.ts ***!
  \***********************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_server_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/server.json */ "./src/app/config/server.json");
var _config_server_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/Object.assign({}, _config_server_json__WEBPACK_IMPORTED_MODULE_5__, {"default": _config_server_json__WEBPACK_IMPORTED_MODULE_5__});
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// enableProdMode();
var addr = _config_server_json__WEBPACK_IMPORTED_MODULE_5__["live_server"];
// if (isDevMode()) {
//   addr = (<any>config).local_server;
//   console.log('development');
//  } else {
addr = _config_server_json__WEBPACK_IMPORTED_MODULE_5__["live_server"];
console.log('live');
//  }
//import { Observable } from 'rxjs';
var EventsService = /** @class */ (function () {
    function EventsService(http, router) {
        this.http = http;
        this.router = router;
        //events: Events[]
        this.attendees = [];
        this.events = [];
        this.eventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // private uri = addr+'/eventreg/all/:get';
        this.uri = addr + '/eventreg/';
    }
    EventsService.prototype.getAllEvents = function () {
        return this.http.get(addr + '/eventreg/');
    };
    EventsService.prototype.getEvents = function () {
        return this.http.get(addr + '/eventreg/five');
    };
    EventsService.prototype.getDetails = function (id) {
        return this.http.get(addr + '/eventreg/all/:get');
    };
    EventsService.prototype.getEvent = function (id) {
        return this.http.get(addr + "/eventreg/edit-event/" + id);
    };
    EventsService.prototype.getEventDates = function () {
        return this.http.get(addr + '/eventreg/dates');
    };
    EventsService.prototype.countAttendance = function () {
        return this.http.get(addr + '/eventreg/attendance');
    };
    EventsService.prototype.countEvents = function () {
        return this.http.get(addr + '/eventreg/countevents');
    };
    // GET an event by ID
    EventsService.prototype.getEventById = function (id) {
        return this.http
            .get(addr + "/eventreg/event/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            console.log('Error Occurred');
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    // GET Attendees by event ID
    EventsService.prototype.getAttendeesByEventId = function (eventAtt) {
        return this.http
            .get(addr + '/eventreg/' + "/" + eventAtt + "/attendees")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            console.log('Error Occurred');
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    // ADD Event
    EventsService.prototype.addEvent = function (eventname, eventDate, eventPaid, facilitators) {
        var _this = this;
        var event = {
            id: null,
            eventname: eventname,
            eventDate: eventDate,
            eventPaid: eventPaid,
            facilitators: facilitators
        };
        this.http
            .post(addr + "/eventreg/create-event/", event)
            .subscribe(function (responseData) {
            var id = responseData.eventId;
            event.id = id;
            _this.events.push(event);
            // this.eventsUpdated.next([...this.events]);
            _this.router.navigate(["/events"]);
        });
    };
    // EDIT Event
    EventsService.prototype.updateEvent = function (id, eventname, eventDate, eventPaid, facilitators) {
        var _this = this;
        var event = {
            id: id,
            eventname: eventname,
            eventDate: eventDate,
            eventPaid: eventPaid,
            facilitators: facilitators
        };
        this.http
            .put(addr + "/eventreg/edit-event/" + id, event)
            .subscribe(function (response) {
            var updatedEvents = _this.events.slice();
            var oldEventIndex = updatedEvents.findIndex(function (e) { return e.id === event.id; });
            updatedEvents[oldEventIndex] = event;
            _this.events = updatedEvents;
            // this.postsUpdated.next([...this.posts]);
            _this.router.navigate(["/"]);
        });
    };
    // ADD Attendee
    EventsService.prototype.addAttendee = function (firstname, lastname, email, phone, gender, occupation, eventAtt) {
        var _this = this;
        var attendee = {
            id: null,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            gender: gender,
            occupation: occupation,
            eventAtt: eventAtt
        };
        this.http
            .post(addr + "/eventreg/event-attendee/", attendee)
            .subscribe(function (responseData) {
            var id = responseData.attendeeId;
            attendee.id = id;
            _this.attendees.push(attendee);
            //  alert(responseData.message);
            // this.eventsUpdated.next([...this.events]);
            // this.router.navigate(["/events"]);
        });
    };
    // EDIT Attendee
    EventsService.prototype.updateAttendee = function (id, firstname, lastname, email, phone, gender, occupation, eventAtt) {
        var _this = this;
        var attendee = {
            id: id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            gender: gender,
            occupation: occupation,
            eventAtt: eventAtt
        };
        this.http
            .put(addr + "/eventreg/event-attendee/" + id, attendee)
            .subscribe(function (response) {
            var updatedAttendees = _this.attendees.slice();
            var oldAttendeeIndex = updatedAttendees.findIndex(function (e) { return e.id === attendee.id; });
            updatedAttendees[oldAttendeeIndex] = attendee;
            _this.attendees = updatedAttendees;
            // this.postsUpdated.next([...this.posts]);
            _this.router.navigate(["/"]);
        });
    };
    EventsService.prototype.getAttendee = function (id) {
        return this.http.get(addr + "/eventreg/event-attendee/" + id);
    };
    // DELETE Event and associated attendees
    EventsService.prototype.deleteEvent = function (id) {
        return this.http.delete(addr + "/eventreg/event/" + id);
        // .subscribe(() => {
        //   const updatedEvents = this.events.filter(event => event.id !== id)
        //   this.events = updatedEvents
        // this.getAllEvents()
        // this.eventsUpdated.next([...this.events]);
        // const updatedEvents = this.events.filter(event => { 
        //   this.events = updatedEvents
        //   this.eventsUpdated.next([...this.events]);
        // })
        // })
    };
    // POST new attendee
    EventsService.prototype.postAttendee = function (attendee) {
        return this.http
            .post("http://localhost:3000/eventreg/event-attendee/", attendee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error, caught) {
            console.log('Error Occurred');
            console.log(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/events/create-event/create-event.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/events/create-event/create-event.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n        <mat-card class=\"login-card\">\n            <mat-card-header>\n              <mat-card-title class=\"title\">\n                <h1>Create an Event</h1>\n              </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\n              <form (submit)=\"onAddEvent(eventForm)\" #eventForm=\"ngForm\">\n                <table class=\"full-width\" cellspacing=\"0\">\n                  <tr>\n                    <td>\n                      <mat-form-field class=\"full-width\">\n                        <input matInput placeholder=\"Event Name\" [ngModel]=\"event?.eventname\" name=\"eventname\" #eventname=\"ngModel\" required>\n                        <mat-error *ngIf=\"eventname.invalid && (eventname.dirty || eventname.touched)\">Enter a valid event name</mat-error>\n                      </mat-form-field>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <mat-form-field class=\"full-width\">\n                        <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Event Date\" [ngModel]=\"event?.eventDate\" name=\"eventDate\"\n                        #eventDate=\"ngModel\" required>\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                        <mat-error *ngIf=\"eventDate.invalid && (eventDate.dirty || eventDate.touched)\">Choose a date</mat-error>\n                      </mat-form-field>\n                    </td>\n        \n                  </tr>\n                </table>\n                <table class=\"full-width\" cellspacing=\"0\">\n                  <tr>\n                    <td>\n                      <mat-form-field class=\"full-width\">\n                          <mat-select placeholder=\"Paid Event?\" name=\"payment\" [ngModel]=\"event?.paid\" #paid=\"ngModel\" required>\n                              <mat-option *ngFor=\"let paid of payment\" [value]=\"paid\">\n                                {{paid}}\n                              </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"paid.invalid && (paid.dirty || paid.touched)\">Select an option</mat-error>\n                      </mat-form-field>\n                      \n                    </td>\n                  </tr>\n        \n                </table>\n                <table class=\"full-width\" cellspacing=\"0\">\n                  <tr>\n                    <td>\n                      <mat-form-field class=\"full-width\">\n                        <input matInput placeholder=\"Facilitators\" [ngModel]=\"event?.facilitators\" name=\"facilitators\" #facilitators=\"ngModel\" required>\n                        <mat-error *ngIf=\"facilitators.invalid && (facilitators.dirty || facilitators.touched)\">Enter facilitator name(s)</mat-error>\n                      </mat-form-field>\n                    </td>\n                  </tr>\n        \n                </table>\n        \n                <button mat-raised-button [disabled]=\"!eventForm.form.valid\" type=\"submit\" color=\"primary\" (click)=\"openDialog()\">Save Event</button>\n        \n              </form>\n            </mat-card-content>\n        \n          </mat-card>\n    </div>\n    <div class=\"col-md-3\">\n      <mat-card id=\"sociallinks\">\n        <div>\n          <ul id=\"social\">\n              \n            <li><i class=\"fab fa-facebook-f\"></i><a href=\"https://www.facebook.com/OutboxHub\" target=\"_blank\">@OutboxHub</a></li>\n\n            <li><i class=\"fab fa-twitter\"></i><a href=\"https://www.twitter.com/OutboxHub\" target=\"_blank\">@OutboxHub</a></li>\n\n            <li><i class=\"fab fa-linkedin-in\"></i><a href=\"https://www.linkedin.com/company/outbox-uganda\" target=\"_blank\">Outbox-Ltd</a></li>\n\n            <li><i class=\"fab fa-instagram\"></i><a href=\"#\" target=\"_blank\">On Instagram</a></li>\n\n            <li><i class=\"fab fa-youtube\"></i><a href=\"https://www.youtube.com/channel/UCKNuI2jIWJdSB4Rl9iORMVw\" target=\"_blank\">\n                on YouTube</a></li>\n\n            <li><i class=\"fab fa-medium\"></i><a href=\"https://medium.com/outbox-stories\" target=\"_blank\">On Medium</a></li>\n\n            <li><i class=\"fab fa-google-plus-g\"></i><a href=\"https://plus.google.com/+OutboxCoUg\" target=\"_blank\">On\n                Google +</a></li>\n          </ul>\n        </div>\n\n\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/create-event/create-event.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/events/create-event/create-event.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card td {\n  padding: 5px 0; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n\n/* [hidden] {\n    display: none !important;\n  }\n   */\n\n/* .material-icons {\n      font-size: 40px;\n      margin-right: 1em;\n  }\n   */\n"

/***/ }),

/***/ "./src/app/events/create-event/create-event.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/create-event/create-event.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events.service */ "./src/app/events.service.ts");
/* harmony import */ var _dialogs_submit_event_submit_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/submit-event/submit-event.component */ "./src/app/dialogs/submit-event/submit-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(eventsService, route, dialog) {
        this.eventsService = eventsService;
        this.route = route;
        this.dialog = dialog;
        this.paid = null;
        this.payment = ["Yes", "No"];
        this.isLoading = false;
        this.mode = "create";
        this.data = "";
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventDate = new Date();
        this.eventsService.getEventDates()
            .subscribe(function (data) {
            _this.dates = data;
            console.log(data);
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('eventID')) {
                _this.mode = 'edit';
                _this.eventID = paramMap.get('eventID');
                _this.isLoading = true;
                _this.eventsService.getEvent(_this.eventID).subscribe(function (eventData) {
                    _this.isLoading = false;
                    _this.event = { id: eventData._id, eventname: eventData.eventname, eventDate: eventData.eventDate, eventPaid: eventData.eventPaid, facilitators: eventData.facilitators };
                });
            }
            else {
                _this.mode = 'create';
                _this.eventID = null;
            }
        });
        // setTimeout(() => {
        //   this.openDialog() 
        //  }, 500);
    };
    CreateEventComponent.prototype.onAddEvent = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.eventsService.addEvent(form.value.eventname, form.value.eventDate, form.value.payment, form.value.facilitators);
        }
        else {
            this.eventsService.updateEvent(this.eventID, form.value.eventname, form.value.eventDate, form.value.payment, form.value.facilitators);
        }
        form.resetForm();
        // setTimeout(() => {
        //   this.openDialog() 
        //  }, 3000);
    };
    // setTimeout("this.openDialog()", 3000);
    CreateEventComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_submit_event_submit_event_component__WEBPACK_IMPORTED_MODULE_4__["SubmitEventComponent"], {
            width: '400px',
            data: 'Event created. Thank you!!!'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.data = result;
        });
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/events/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.scss */ "./src/app/events/create-event/create-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/events/event-register/event-register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/events/event-register/event-register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container attendereg\">\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n\n      <mat-card>\n        <h1>Event Registration</h1>\n\n        <form (submit)=\"onAddAttendee(attendeeForm)\" #attendeeForm=\"ngForm\">\n\n          <div class=\"fiveEvents\">\n            <h4>Choose Event to register for.</h4>\n            \n            <mat-button-toggle-group name=\"ourEvents\" [ngModel]=\"ourEvents?.upcoming\" #upcoming=\"ngModel\" required>\n              <mat-button-toggle *ngFor=\"let upcoming of events\" [value]=\"upcoming\" class=\"eventStyle\">\n                <!-- <div class=\"post-submitted-info\">\n                    <div class=\"submitted-date\">\n                      <div class=\"month\">{{upcoming.eventDate | date: 'MMM'}}</div>\n                      <div class=\"day\">{{upcoming.eventDate | date: 'dd'}}</div>\n                      <div class=\"year\">{{upcoming.eventDate | date: 'yyyy'}}</div>\n                    </div>\n                  </div> -->\n                  \n                  <div class=\"fa-5x\">\n                      <span class=\"fa-layers fa-fw\">\n                          <i class=\"fas fa-calendar\"></i>\n                          <span class=\"fa-layers-text fa-inverse\" data-fa-transform=\"shrink-7 down-1\" style=\"font-weight:900;font-size: 60px\">\n                            {{upcoming.eventDate | date: 'dd'}}\n                          </span>\n                          <span class=\"fa-layers-text fa-inverse month\" data-fa-transform=\"shrink-13 down-6\" style=\"font-weight:800;text-transform: uppercase\">\n                            {{upcoming.eventDate | date: 'MMM'}}\n                          </span>\n                        </span>\n                  </div>\n                  <span class=\"name\">{{upcoming.eventname}}</span>\n                  \n\n\n              </mat-button-toggle>\n\n            </mat-button-toggle-group>\n\n          </div>\n\n\n          <!-- <div class=\"post-submitted-info\">\n            <div class=\"submitted-date\">\n              <div class=\"month\">Oct</div>\n              <div class=\"day\">30</div>\n              <div class=\"year\">2014</div>\n            </div>\n          </div> -->\n\n\n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"First Name\" [ngModel]=\"attendee?.firstname\" name=\"firstname\" #firstname=\"ngModel\"\n                    required>\n                    <mat-error *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\">Enter your firstname</mat-error>\n                </mat-form-field>\n              </td>\n\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Last Name\" [ngModel]=\"attendee?.lastname\" name=\"lastname\" #lastname=\"ngModel\"\n                    required>\n                    <mat-error *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\">Enter your lastname</mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Email\" [ngModel]=\"attendee?.email\" name=\"email\" #email=\"ngModel\"\n                    required>\n                    <mat-error *ngIf=\"email.invalid && (email.dirty || email.touched)\">Enter your email</mat-error>\n                </mat-form-field>\n              </td>\n              <td>\n                <mat-form-field class=\"full-width\">\n                  <input matInput placeholder=\"Telephone\" [ngModel]=\"attendee?.telephone\" name=\"telephone\" #telephone=\"ngModel\"\n                    required>\n                    <mat-error *ngIf=\"telephone.invalid && (telephone.dirty || telephone.touched)\">Enter your telephone number</mat-error>\n                </mat-form-field>\n              </td>\n\n            </tr>\n          </table>\n          <table class=\"full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field>\n                  <mat-select placeholder=\"Gender\" name=\"gender\" [ngModel]=\"attendee?.sex\" #sex=\"ngModel\" required>\n                    <mat-option *ngFor=\"let sex of gender\" [value]=\"sex\">\n                      {{sex}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"sex.invalid && (sex.dirty || sex.touched)\">Select your gender</mat-error>\n                </mat-form-field>\n              </td>\n\n              <td>\n                <mat-form-field>\n                  <mat-select placeholder=\"Occupation\" name=\"occupation\" [ngModel]=\"attendee?.occupation\" #occupation=\"ngModel\"\n                    required>\n                    <mat-option *ngFor=\"let occupation of occupations\" [value]=\"occupation\">\n                      {{occupation}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"occupation.invalid && (occupation.dirty || occupation.touched)\">Select an option</mat-error>\n                </mat-form-field>\n              </td>\n            </tr>\n          </table>\n          <button mat-raised-button [disabled]=\"!attendeeForm.form.valid\" type=\"submit\" color=\"primary\" (click)=\"openDialog()\">Register</button>\n        </form>\n\n      </mat-card>\n\n\n\n    </div>\n    <div class=\"col-md-3\">\n      <mat-card id=\"sociallinks\">\n        <div>\n          <ul id=\"social\">\n              \n            <li><i class=\"fab fa-facebook-f\"></i><a href=\"https://www.facebook.com/OutboxHub\" target=\"_blank\">@OutboxHub</a></li>\n\n            <li><i class=\"fab fa-twitter\"></i><a href=\"https://www.twitter.com/OutboxHub\" target=\"_blank\">@OutboxHub</a></li>\n\n            <li><i class=\"fab fa-linkedin-in\"></i><a href=\"https://www.linkedin.com/company/outbox-uganda\" target=\"_blank\">Outbox-Ltd</a></li>\n\n            <li><i class=\"fab fa-instagram\"></i><a href=\"#\" target=\"_blank\">On Instagram</a></li>\n\n            <li><i class=\"fab fa-youtube\"></i><a href=\"https://www.youtube.com/channel/UCKNuI2jIWJdSB4Rl9iORMVw\" target=\"_blank\">\n                on YouTube</a></li>\n\n            <li><i class=\"fab fa-medium\"></i><a href=\"https://medium.com/outbox-stories\" target=\"_blank\">On Medium</a></li>\n\n            <li><i class=\"fab fa-google-plus-g\"></i><a href=\"https://plus.google.com/+OutboxCoUg\" target=\"_blank\">On\n                Google +</a></li>\n          </ul>\n        </div>\n\n\n      </mat-card>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/events/event-register/event-register.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/events/event-register/event-register.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 95%; }\n\n.fiveEvents {\n  margin-bottom: 20px; }\n\n.mat-button-toggle-group {\n  width: 100% !important; }\n\n.mat-button-toggle {\n  width: 100%;\n  margin: 5px;\n  border: 1px solid white;\n  color: #299ADF; }\n\n.mat-button-toggle-checked {\n  background-color: white;\n  color: #299ADF !important;\n  /* border: 1px solid #0087D9; */ }\n\n.mat-button-toggle-checked .post-submitted-info, .mat-button-toggle-checked .fa-5x,\n.mat-button-toggle-checked .name {\n  background-color: white;\n  color: #FD2C65 !important;\n  /* border: 1px solid #0087D9; */ }\n\n.fa-layers-text {\n  color: white; }\n\n.fiveEvents .fa-4x {\n  color: #299ADF; }\n\n/* .mat-button-toggle:hover {\n  background-color: black;\n  color: #299ADF;\n  background-position: 100% 0;\n    -moz-transition: all .4s ease-in-out;\n    -o-transition: all .4s ease-in-out;\n    -webkit-transition: all .4s ease-in-out;\n    transition: all .4s ease-in-out;\n}  */\n\n.mat-button-toggle:hover .post-submitted-info {\n  color: #299ADF;\n  background-position: 100% 0;\n  transition: all .4s ease-in-out; }\n\n.mat-button-toggle:hover .fa-4x {\n  background-color: white;\n  color: #299ADF; }\n\n/* #social li:hover a, #social li:hover .fa{\n    color: #0087D9;\n    background-position: 100% 0;\n    -moz-transition: all .4s ease-in-out;\n    -o-transition: all .4s ease-in-out;\n    -webkit-transition: all .4s ease-in-out;\n    transition: all .4s ease-in-out;\n} */\n\n.mat-button-toggle-label-content {\n  line-height: 20px !important; }\n\n.eventStyle span {\n  padding: 0px;\n  display: block;\n  padding-top: 5px; }\n\n/* .eventStyle .month, .eventStyle .year {\n    font-size: 14px;\n    text-transform: uppercase;\n} */\n\n.calendar-text {\n  margin-top: .3em !important; }\n\n.post-submitted-info {\n  font-weight: 700;\n  text-align: center;\n  line-height: 1;\n  top: 0;\n  left: 0;\n  color: #299ADF; }\n\n/* .post-submitted-info:hover{\n    color: #0087D9;\n} */\n\n/* .submitted-date {\n    margin-top: 12px;\n} */\n\n.submitted-date {\n  margin: 10px 0 0 0;\n  /* border-right: 1px solid #c2c2c2; */\n  padding-bottom: 10px; }\n\n.submitted-info {\n  font-weight: 700;\n  text-align: center;\n  line-height: 1;\n  top: 0;\n  left: 0; }\n\n.post-submitted-info .month, .post-submitted-info .year {\n  font-size: 14px;\n  text-transform: uppercase; }\n\n.post-submitted-info .month {\n  margin-top: -1px; }\n\n.post-submitted-info .day {\n  font-size: 25px;\n  font-weight: 900;\n  margin-bottom: 2px; }\n\n.post-submitted-info .year {\n  font-size: 14px;\n  text-transform: uppercase; }\n\n/* .fa-layers .month{\n    font-weight: 700 !important;\n    text-align: center;\n    line-height: 1;\n    \n    font-size: 14px;\n    text-transform: uppercase;\n} */\n\n/* .attendereg{\n    margin-top: 20px;\n} */\n"

/***/ }),

/***/ "./src/app/events/event-register/event-register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-register/event-register.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegisterComponent", function() { return EventRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_submit_attend_submit_attend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/submit-attend/submit-attend.component */ "./src/app/dialogs/submit-attend/submit-attend.component.ts");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../events.service */ "./src/app/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventRegisterComponent = /** @class */ (function () {
    function EventRegisterComponent(eventsService, route, changeDetectorRefs, dialog) {
        this.eventsService = eventsService;
        this.route = route;
        this.changeDetectorRefs = changeDetectorRefs;
        this.dialog = dialog;
        this.sex = null;
        this.gender = ["Male", "Female"];
        this.isLoading = false;
        this.mode = "create";
        this.occupation = null;
        this.occupations = ["Student", "Proffessional", "Other"];
        this.data = "";
    }
    EventRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsService.getEvents()
            .subscribe(function (data) {
            _this.events = data;
            _this.changeDetectorRefs.detectChanges();
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        console.log(this.events);
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('attendeeID')) {
                _this.mode = 'edit';
                _this.attendeeID = paramMap.get('attendeeID');
                _this.isLoading = true;
                _this.eventsService.getAttendee(_this.attendeeID).subscribe(function (attendeeData) {
                    _this.isLoading = false;
                    _this.attendee = { id: attendeeData.id, firstname: attendeeData.firstname, lastname: attendeeData.lastname, email: attendeeData.email, phone: attendeeData.phone,
                        gender: attendeeData.gender, occupation: attendeeData.occupation, eventAtt: attendeeData.eventAtt };
                });
            }
            else {
                _this.mode = 'create';
                _this.attendeeID = null;
            }
        });
    };
    EventRegisterComponent.prototype.onAddAttendee = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.eventsService.addAttendee(form.value.firstname, form.value.lastname, form.value.email, form.value.phone, form.value.gender, form.value.occupation, form.value.ourEvents);
        }
        // else {
        //   this.eventsService.updateAttendee(
        //     this.eventID,
        //     form.value.eventname, 
        //     form.value.eventDate, 
        //     form.value.payment, 
        //     form.value.facilitators
        //   );
        // }
        form.resetForm();
    };
    EventRegisterComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialogs_submit_attend_submit_attend_component__WEBPACK_IMPORTED_MODULE_3__["SubmitAttendComponent"], {
            width: '400px',
            data: 'You have successfully registered for an event. Thank you!!!'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.data = result;
        });
    };
    EventRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-register',
            template: __webpack_require__(/*! ./event-register.component.html */ "./src/app/events/event-register/event-register.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./event-register.component.scss */ "./src/app/events/event-register/event-register.component.scss")]
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EventRegisterComponent);
    return EventRegisterComponent;
}());



/***/ }),

/***/ "./src/app/events/events-board/events-board.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/events/events-board/events-board.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <mat-card class=\"login-card\">\n      <mat-card-header>\n        <mat-card-title class=\"title\">\n          <h1>Pick an Event</h1>\n        </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n       \n      </mat-card-content>\n  \n    </mat-card>\n  </div>\n  "

/***/ }),

/***/ "./src/app/events/events-board/events-board.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/events/events-board/events-board.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 600px;\n  /* height: 400px; */\n  margin: 3rem auto; }\n\n.login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/events/events-board/events-board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/events/events-board/events-board.component.ts ***!
  \***************************************************************/
/*! exports provided: EventsBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsBoardComponent", function() { return EventsBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsBoardComponent = /** @class */ (function () {
    function EventsBoardComponent() {
    }
    EventsBoardComponent.prototype.ngOnInit = function () {
    };
    EventsBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-board',
            template: __webpack_require__(/*! ./events-board.component.html */ "./src/app/events/events-board/events-board.component.html"),
            styles: [__webpack_require__(/*! ./events-board.component.scss */ "./src/app/events/events-board/events-board.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsBoardComponent);
    return EventsBoardComponent;
}());



/***/ }),

/***/ "./src/app/events/events/event-detail/event-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/events/events/event-detail/event-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <button mat-raised-button color=\"primary\" [routerLink]=\"[ '/events' ]\">Back to Events</button>\n    <br>\n    <br>\n    <mat-divider></mat-divider>\n    <br>\n    <div class=\"example-loading-shade\" *ngIf=\"isLoading\">\n      <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\n      <img *ngIf=\"isLoading\" src=\"assets/cube.gif\"/>\n    </div>\n    <table mat-table [dataSource]=\"details\" class=\"mat-elevation-z8\">\n\n\n      <ng-container matColumnDef=\"firstname\">\n        <th mat-header-cell *matHeaderCellDef>First Name</th>\n        <!-- <td mat-cell *matCellDef=\"let element\"> {{element.eventname}} </td> -->\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"element.firstname\">{{element.firstname}}</span> <span\n            *ngIf=\"!element.firstname\">N/a</span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"lastname\">\n        <th mat-header-cell *matHeaderCellDef>Last Name</th>\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"element.lastname\">{{element.lastname}}</span> <span *ngIf=\"!element.lastname\">N/a</span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef>Email</th>\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"element.email\">{{element.email}}</span> <span *ngIf=\"!element.email\">N/a</span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"gender\">\n        <th mat-header-cell *matHeaderCellDef>Gender</th>\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"element.gender\">{{element.gender}}</span> <span *ngIf=\"!element.gender\">N/a</span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"occupation\">\n        <th mat-header-cell *matHeaderCellDef>Occupation</th>\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"element.occupation\">{{element.occupation}}</span> <span\n            *ngIf=\"!element.occupation\">N/a</span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"phone\">\n        <th mat-header-cell *matHeaderCellDef>Phone</th>\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"element.phone\">{{element.phone}}</span> <span *ngIf=\"!element.phone\">N/a</span></td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n        <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>create</mat-icon>\n              <span>Update</span>\n            </button>\n            <button mat-menu-item>\n              <mat-icon>delete_sweep</mat-icon>\n              <span>Delete</span>\n            </button>\n\n          </mat-menu>\n        </td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/events/events/event-detail/event-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/events/events/event-detail/event-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 600px;\n  /* height: 400px; */\n  margin: 3rem auto; }\n\n.login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n\n[hidden] {\n  display: none !important; }\n\ntable {\n  width: 100%; }\n\n.mat-column-right {\n  text-align: right; }\n\n/* Structure */\n\n.example-container {\n  position: relative; }\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/* Column Widths */\n\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n"

/***/ }),

/***/ "./src/app/events/events/event-detail/event-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/events/events/event-detail/event-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../events.service */ "./src/app/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(router, route, eventsService) {
        this.router = router;
        this.route = route;
        this.eventsService = eventsService;
        this.isLoading = false;
        this.displayedColumns = ['firstname', 'lastname', 'email', 'gender', 'occupation', 'phone',];
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        this.getDetails(this.route.snapshot.params['id']);
    };
    EventDetailComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.isLoading = true;
        this.eventsService.getAttendeesByEventId(id)
            .subscribe(function (data) {
            _this.isLoading = false;
            console.log(data);
            _this.details = data;
        });
    };
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/events/events/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/events/events/event-detail/event-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/events/events/events.component.html":
/*!*****************************************************!*\
  !*** ./src/app/events/events/events.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n\n\n\n    <button mat-raised-button color=\"primary\" [routerLink]=\"[ '/create-event' ]\">Create An Event</button>\n    <mat-form-field class=\"right\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search for keyword...\">\n    </mat-form-field>\n    <br><br>\n    <mat-divider></mat-divider>\n    <br>\n    <div class=\"example-loading-shade\" *ngIf=\"isLoading\">\n      <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\n      <img *ngIf=\"isLoading\" src=\"assets/cube.gif\" />\n    </div>\n\n\n\n    <table id=\"myTable\" mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"eventname\" id=\"eventName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Event Name</th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"navigate(element._id)\"> {{element.eventname}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"eventDate\" id=\"eventDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Event Date</th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"navigate(element._id)\"> <span *ngIf=\"element.eventDate\">\n            {{element.eventDate | date}} </span>\n          <span *ngIf=\"!element.eventDate\"> N/a </span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"eventPaid\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Event Paid</th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"navigate(element._id)\"><span *ngIf=\"element.eventPaid\">{{element.eventPaid}}</span>\n          <span *ngIf=\"!element.eventPaid\">N/a</span></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"facilitators\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Facilitators</th>\n        <td mat-cell *matCellDef=\"let element\" (click)=\"navigate(element._id)\"> <span *ngIf=\"element.facilitators\">{{element.facilitators}}</span>\n          <span *ngIf=\"!element.facilitators\">N/a</span></td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n        <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item>\n              <mat-icon>create</mat-icon>\n              <span>Update</span>\n            </button>\n            <button mat-menu-item (click)=\"onDelete(element._id)\">\n              <mat-icon>delete_sweep</mat-icon>\n              <span>Delete</span>\n            </button>\n\n          </mat-menu>\n        </td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\n\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      <!-- <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/event-details/', row._id]\"></tr> -->\n\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[10, 20, 50, 100]\"></mat-paginator>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/events/events/events.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/events/events/events.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 600px;\n  /* height: 400px; */\n  margin: 3rem auto; }\n\n.login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n\n[hidden] {\n  display: none !important; }\n\ntable {\n  width: 100%; }\n\n.mat-column-right {\n  text-align: right; }\n\n.mat-form-field {\n  font-size: 14px;\n  float: right;\n  width: 40%; }\n\n/* .right{\n  text-align: right;\n} */\n\n/* Structure */\n\n.example-container {\n  position: relative; }\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: #f5f5f5;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/* Column Widths */\n\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n\n.mat-row:hover {\n  background-color: #f5f5f5; }\n\n.mat-spinner {\n  color: #0087D9 !important; }\n\n/* .material-icons {\n      font-size: 40px;\n      margin-right: 1em;\n  }\n   */\n"

/***/ }),

/***/ "./src/app/events/events/events.component.ts":
/*!***************************************************!*\
  !*** ./src/app/events/events/events.component.ts ***!
  \***************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../events.service */ "./src/app/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsComponent = /** @class */ (function () {
    function EventsComponent(eventsService, router, changeDetectorRefs) {
        this.eventsService = eventsService;
        this.router = router;
        this.changeDetectorRefs = changeDetectorRefs;
        this.isLoading = false;
        // displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'firstname', 'lastname', 'email', 'phone', 'actions'];
        this.displayedColumns = ['eventname', 'eventDate', 'eventPaid', 'facilitators', 'actions'];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.eventsService.getAllEvents()
            .subscribe(function (data) {
            _this.isLoading = false;
            // this.attendees = data
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            console.log(_this.dataSource);
        }, function (err) {
            console.log(err);
        });
        console.log(this.dataSource);
        this.refreshTable();
    };
    // Filter table
    EventsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EventsComponent.prototype.navigate = function (id) {
        this.router.navigate(['/event-details/', id]);
    };
    EventsComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('deleting');
        this.eventsService.deleteEvent(id)
            .subscribe(function (result) {
            _this.refreshTable();
        });
    };
    EventsComponent.prototype.refreshTable = function () {
        var _this = this;
        this.eventsService.getAllEvents()
            .subscribe(function (data) {
            _this.events = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], EventsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], EventsComponent.prototype, "sort", void 0);
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/events/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/loading.component.ts":
/*!**************************************!*\
  !*** ./src/app/loading.component.ts ***!
  \**************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: "\n  <img src=\"/assets/images/loading.svg\">\n  ",
            styles: [
                "\n    :host {\n      display: block;\n    }\n    img {\n      display: block;\n      margin: 20px auto;\n      width: 50px;\n    }\n  "
            ]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-card class=\"login-card\">\n    <mat-card-header>\n      <mat-card-title>\n        <h1>Sign In</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"login-form\">\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n      </form>\n    </mat-card-content>\n    <mat-card-actions>\n\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Sign In</button>\n\n    </mat-card-actions>\n\n    <a href=\"#\">\n      <h5>Reset Password?</h5>\n    </a>\n  </mat-card>\n</div>\n\n<div class=\"social-login\">\n  <p>Or Login With</p>\n  <mat-icon>\n    <i class=\"material-icons\">\n      duo\n    </i>\n  </mat-icon>\n<mat-icon>\n  <i class=\"material-icons\">\n    speaker_phone\n  </i></mat-icon>\n  <mat-icon>\n    <i class=\"material-icons\">\n      chat\n    </i>\n  </mat-icon>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 400px;\n  height: 300px;\n  margin: 5rem auto; }\n\n/* table {\n    width: 100%;\n  } */\n\n.full-width {\n  width: 100%; }\n\n.mat-card-title {\n  text-align: center; }\n\n.social-login {\n  text-align: center; }\n\n.material-icons {\n  font-size: 40px;\n  margin-right: 1em; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgModule } from '@angular/core';
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/our-nav/our-nav.component.html":
/*!************************************************!*\
  !*** ./src/app/our-nav/our-nav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\"> <img src=\"assets/images/outbox.png\"></mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"/home\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            home\n          </i>\n        </mat-icon>\n        Home\n      </a>\n      <a mat-list-item routerLink=\"/attend\" routerLinkActive=\"active\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            account_circle\n          </i>\n        </mat-icon>\n        Attend Event\n      </a>\n      <a mat-list-item routerLink=\"/events\" routerLinkActive=\"active\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            event\n          </i>\n        </mat-icon>\n        Events\n      </a>\n      <a mat-list-item routerLink=\"/residents\" routerLinkActive=\"active\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            people\n          </i>\n        </mat-icon>\n        Residents\n      </a>\n      <!-- <a mat-list-item href=\"/page-under-construction\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            money\n          </i>\n        </mat-icon>\n        Payments\n      </a>\n      <a mat-list-item href=\"/page-under-construction\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            local_grocery_store\n          </i>\n        </mat-icon>\n        Housekeeping\n      </a>\n\n      <a mat-list-item href=\"/assets\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            add_circle_outline\n          </i>\n        </mat-icon>\n        Assets\n      </a>\n      <a mat-list-item routerLink=\"/page-under-construction\">\n        <mat-icon>\n          <i class=\"material-icons\">\n            account_circle\n          </i>\n        </mat-icon>\n        My Account\n      </a> -->\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <!-- <span>outboxFront</span> -->\n    </mat-toolbar>\n    <!-- Add Content Here -->\n\n    <!-- Using bootstarp grid -->\n    <div class=\"container front\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n\n            <mat-card class=\"card1\">\n              <div class=\"content\">\n                <div class=\"row\">\n                  <div class=\"col-5\">\n                      <mat-icon class=\"icon-events\">\n                          <i class=\"material-icons\">\n                            event\n                          </i>\n                        </mat-icon>\n                  </div>\n                  <div class=\"col-7\">\n                      <div class=\"numbers\">\n                          <p>Events Created</p>\n                          <div class=\"count\">\n                              {{countEvt}}\n                          </div>\n                      </div>\n                  </div>\n                  \n                </div> \n                <div class=\"footer\">\n                    <hr />\n                    <div class=\"stats\">\n                        <i class=\"fas fa-sync-alt\"></i> Events from Nov-2018\n                    </div>\n                </div>     \n              </div> \n              </mat-card>\n        </div>\n\n\n        <div class=\"col-md-4\">\n            <mat-card class=\"card2\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                      <div class=\"col-4\">\n                          <mat-icon class=\"icon-attend\">\n                              <i class=\"material-icons\">\n                                people\n                              </i>\n                            </mat-icon>\n                      </div>\n                      <div class=\"col-8\">\n                          <div class=\"numbers\">\n                              <p>Event Attendances</p>\n                              <div class=\"count\">\n                                  {{countAtt}}\n                              </div>\n                          </div>\n                      </div>\n                      \n                    </div> \n                    <div class=\"footer\">\n                        <hr />\n                        <div class=\"stats\">\n                            <i class=\"fas fa-sync-alt\"></i> Events from Nov-2018\n                        </div>\n                    </div>     \n                  </div>               \n            </mat-card>\n        </div>\n        <div class=\"col-md-4\">\n            <mat-card class=\"3\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                      <div class=\"col-5\">\n                          <mat-icon class=\"icon-key\">\n                              <i class=\"material-icons\">\n                                mic_none\n                              </i>\n                            </mat-icon>\n                      </div>\n                      <div class=\"col-7\">\n                          <div class=\"numbers\">\n                              <p>Keynote speeches</p>\n                              <div class=\"count\">\n                                  {{countEvt}}\n                              </div>\n                          </div>\n                      </div>\n                      \n                    </div> \n                    <div class=\"footer\">\n                        <hr />\n                        <div class=\"stats\">\n                            <i class=\"fas fa-sync-alt\"></i> Events from Nov-2018\n                        </div>\n                    </div>     \n                  </div> \n              \n            </mat-card>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- <div class=\"front flex-container\">\n      <mat-card>\n        <mat-icon>\n          <i class=\"material-icons\">\n            contact_mail\n          </i>\n        </mat-icon>\n        Residency Inquiries\n      </mat-card>\n      <mat-card>\n        <mat-icon>\n          <i class=\"material-icons\">\n            event\n          </i>\n        </mat-icon>\n        Events Created\n      </mat-card>\n      <mat-card>Event Attendees</mat-card>\n      <mat-card>New Clients</mat-card>\n    </div> -->\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/our-nav/our-nav.component.scss":
/*!************************************************!*\
  !*** ./src/app/our-nav/our-nav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.mat-toolbar {\n  z-index: 9999; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: #FAFAFA !important; }\n\n.mat-nav-list .mat-list-item {\n  color: #66615b; }\n\n.mat-nav-list .active {\n  color: #299ADF !important; }\n\n.material-icons {\n  padding-right: 20px; }\n\n.flex-container {\n  /* Safari */\n  display: flex;\n  justify-content: space-around; }\n\n.front .mat-card {\n  /* width: 180px; */\n  /* height: 100px; */\n  /* margin-top: 20px; */\n  margin-bottom: 40px; }\n\n.mat-card {\n  border-radius: 6px;\n  box-shadow: 0 2px 2px rgba(204, 196, 184, 0.5);\n  background-color: #fff;\n  color: #252422;\n  /* margin-bottom: 20px; */\n  position: relative;\n  z-index: 1; }\n\n.mat-card .content {\n  padding: 15px 15px 10px 15px; }\n\n.mat-card .material-icons {\n  font-size: 2em;\n  min-height: 64px; }\n\n.mat-card .numbers {\n  font-size: 2em;\n  text-align: right; }\n\n.mat-card .numbers p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.4em; }\n\n.mat-card .footer {\n  padding: 0;\n  line-height: 30px; }\n\n.footer {\n  background-attachment: fixed;\n  position: relative; }\n\n.mat-card .footer hr {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border-color: #f1eae0; }\n\n.mat-card .stats {\n  color: #a9a9a9;\n  font-weight: 300; }\n\n.mat-card .footer .fa {\n  color: #a9a9a9; }\n\n.icon-events {\n  color: #FD2C65; }\n\n.icon-attend {\n  color: #67EC08; }\n\n.icon-key {\n  color: #f3bb45; }\n\n/* p {\n  font-size: 16px;\n  line-height: 1.4em;\n} */\n\n/* .material-icons[_ngcontent-c1] {\n  padding-right: 10px;\n} */\n\n.card-info {\n  font-weight: 700;\n  text-align: center;\n  line-height: 1;\n  top: 0;\n  left: 0;\n  /* color: white; */ }\n\n.submitted {\n  margin: 10px 0 0 0;\n  /* border-right: 1px solid #c2c2c2; */\n  padding-bottom: 10px; }\n\n.submitted-info {\n  font-weight: 700;\n  text-align: center;\n  line-height: 1;\n  top: 0;\n  left: 0; }\n\n.card-info .count {\n  font-size: 25px;\n  font-weight: 900;\n  margin-bottom: 2px; }\n"

/***/ }),

/***/ "./src/app/our-nav/our-nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/our-nav/our-nav.component.ts ***!
  \**********************************************/
/*! exports provided: OurNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurNavComponent", function() { return OurNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurNavComponent = /** @class */ (function () {
    function OurNavComponent(breakpointObserver, eventsService, changeDetectorRefs) {
        this.breakpointObserver = breakpointObserver;
        this.eventsService = eventsService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    OurNavComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.eventsService.countAttendance()
        // .subscribe(data => {
        //   this.countAtt = data;
        //   console.log(data);
        //   this.changeDetectorRefs.detectChanges();
        // })
        // this.eventsService.countEvents()
        // .subscribe(data => {
        //   this.countEvt = data;
        //   console.log(data);
        //   this.changeDetectorRefs.detectChanges();
        // })
        this.refreshCards();
        this.refreshCards1();
    };
    OurNavComponent.prototype.refreshCards = function () {
        var _this = this;
        this.eventsService.countEvents()
            .subscribe(function (data) {
            _this.countEvt = data;
            console.log(data);
            _this.changeDetectorRefs.detectChanges();
        });
    };
    OurNavComponent.prototype.refreshCards1 = function () {
        var _this = this;
        this.eventsService.countAttendance()
            .subscribe(function (data) {
            _this.countAtt = data;
            console.log(data);
            _this.changeDetectorRefs.detectChanges();
        });
    };
    OurNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-nav',
            template: __webpack_require__(/*! ./our-nav.component.html */ "./src/app/our-nav/our-nav.component.html"),
            styles: [__webpack_require__(/*! ./our-nav.component.scss */ "./src/app/our-nav/our-nav.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], OurNavComponent);
    return OurNavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>404 page not found\n  \n</h2>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page-under0construction/page-under0construction.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/page-under0construction/page-under0construction.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"display-1\"> page-under-construction!! </h1>"

/***/ }),

/***/ "./src/app/page-under0construction/page-under0construction.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/page-under0construction/page-under0construction.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 150px; }\n"

/***/ }),

/***/ "./src/app/page-under0construction/page-under0construction.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/page-under0construction/page-under0construction.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageUnder0constructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUnder0constructionComponent", function() { return PageUnder0constructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageUnder0constructionComponent = /** @class */ (function () {
    function PageUnder0constructionComponent() {
    }
    PageUnder0constructionComponent.prototype.ngOnInit = function () {
    };
    PageUnder0constructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-under0construction',
            template: __webpack_require__(/*! ./page-under0construction.component.html */ "./src/app/page-under0construction/page-under0construction.component.html"),
            styles: [__webpack_require__(/*! ./page-under0construction.component.scss */ "./src/app/page-under0construction/page-under0construction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageUnder0constructionComponent);
    return PageUnder0constructionComponent;
}());



/***/ }),

/***/ "./src/app/payments/payments.component.html":
/*!**************************************************!*\
  !*** ./src/app/payments/payments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  payments works!\n</p>\n"

/***/ }),

/***/ "./src/app/payments/payments.component.scss":
/*!**************************************************!*\
  !*** ./src/app/payments/payments.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payments/payments.component.ts":
/*!************************************************!*\
  !*** ./src/app/payments/payments.component.ts ***!
  \************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent() {
    }
    PaymentsComponent.prototype.ngOnInit = function () {
    };
    PaymentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/payments/payments.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/residents-list/residents-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/residents-list/residents-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <button mat-raised-button color=\"primary\">Add New Resident</button>\n    <br><br>\n    <mat-divider></mat-divider>\n    <br>\n    <div class=\"example-loading-shade\" *ngIf=\"isLoading\">\n        <!-- <mat-spinner *ngIf=\"isLoading\"></mat-spinner> -->\n        <img *ngIf=\"isLoading\" src=\"assets/cube.gif\"/>\n      </div>\n    <table mat-table [dataSource]=\"residents\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef>Username</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef>Email</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"phone\">\n        <th mat-header-cell *matHeaderCellDef>Phone</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"website\">\n        <th mat-header-cell *matHeaderCellDef>Website</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.website}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"company.name\">\n        <th mat-header-cell *matHeaderCellDef>Company</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.company.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\">Actions</th>\n        <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\"> \n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            <mat-icon>create</mat-icon>\n            <span>Update</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>delete_sweep</mat-icon>\n            <span>Delete</span>\n          </button>\n          \n        </mat-menu>\n      </td> \n      </ng-container>\n      \n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/residents-list/residents-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/residents-list/residents-list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-column-right {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/residents-list/residents-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/residents-list/residents-list.component.ts ***!
  \************************************************************/
/*! exports provided: ResidentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentsListComponent", function() { return ResidentsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _residents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../residents.service */ "./src/app/residents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResidentsListComponent = /** @class */ (function () {
    function ResidentsListComponent(residentsService) {
        this.residentsService = residentsService;
        this.displayedColumns = ['name', 'username', 'email', 'phone', 'website', 'company.name', 'actions'];
    }
    ResidentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.residentsService.getResidents()
            .subscribe(function (data) {
            _this.residents = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        console.log(this.residents);
    };
    ResidentsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-residents-list',
            template: __webpack_require__(/*! ./residents-list.component.html */ "./src/app/residents-list/residents-list.component.html"),
            styles: [__webpack_require__(/*! ./residents-list.component.scss */ "./src/app/residents-list/residents-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_residents_service__WEBPACK_IMPORTED_MODULE_1__["ResidentsService"]])
    ], ResidentsListComponent);
    return ResidentsListComponent;
}());



/***/ }),

/***/ "./src/app/residents.service.ts":
/*!**************************************!*\
  !*** ./src/app/residents.service.ts ***!
  \**************************************/
/*! exports provided: ResidentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentsService", function() { return ResidentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResidentsService = /** @class */ (function () {
    function ResidentsService(http) {
        this.http = http;
        this.uri = 'https://jsonplaceholder.typicode.com/users';
    }
    ResidentsService.prototype.getResidents = function () {
        return this.http.get(this.uri);
    };
    ResidentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ResidentsService);
    return ResidentsService;
}());



/***/ }),

/***/ "./src/app/user-reg/user-reg.component.html":
/*!**************************************************!*\
  !*** ./src/app/user-reg/user-reg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-card class=\"login-card\">\n    <mat-card-header>\n      <mat-card-title class=\"title\">\n        <h1>User Registration</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"First Name\" [(ngModel)]=\"firstname\" name=\"firstname\" required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Last Name\" [(ngModel)]=\"lastname\" name=\"lastname\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n        </mat-form-field>\n\n\n        <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>\n\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Telephone\" [(ngModel)]=\"telephone\" name=\"telephone\" required>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Alternate Telephone\" [(ngModel)]=\"alttelephone\" name=\"alttelephone\"\n                  required>\n              </mat-form-field>\n            </td>\n          </tr>\n        </table>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field>\n                <mat-select placeholder=\"ID Type\" class=\"full-width\" cellspacing=\"0\" required>\n                  <mat-option *ngFor=\"let idtype of idType\" [value]=\"idtype.id\">{{idtype.name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </td>\n\n            <td>\n              <mat-form-field class=\"full-width\" cellspacing=\"0\">\n                <input matInput placeholder=\"ID Number\" [(ngModel)]=\"idnumber\" name=\"idnumber\" required>\n              </mat-form-field>\n            </td>\n          </tr>\n\n        </table>\n\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-radio-button value=\"male\">Male</mat-radio-button>\n            </td>\n            <td>\n              <mat-radio-button value=\"female\">Female</mat-radio-button>\n            </td>\n          </tr>\n\n        </table>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <label *ngFor=\"let res of residency\">\n              <input type=\"radio\" name=\"residency\" [(ngModel)]=\"residency\" \n              [value]=\"res\">{{res.type}}</label>\n\n            <!-- <td>\n              <mat-radio-button value=\"individual\">Individual</mat-radio-button>\n            </td>\n            <td>\n              <mat-radio-button *ngIf=\"residency\" value=\"company\">Company</mat-radio-button>\n            </td> -->\n\n          </tr>\n        </table>\n        <div>\n            <label>If company, enter company name.</label>\n            <mat-form-field class=\"full-width\">\n                \n                <input matInput placeholder=\"Company name\" [(ngModel)]=\"company\" name=\"number\" required>\n\n              </mat-form-field>\n\n        </div>\n\n      </form>\n    </mat-card-content>\n\n\n    <div class=\"social-login\">\n      <p>Or Sign Up With</p>\n      <mat-icon>\n        <i class=\"material-icons\">\n          duo\n        </i>\n      </mat-icon>\n      <mat-icon>\n        <i class=\"material-icons\">\n          speaker_phone\n        </i></mat-icon>\n      <mat-icon>\n        <i class=\"material-icons\">\n          chat\n        </i>\n      </mat-icon>\n\n\n    </div>\n\n    <mat-card-actions align=\"end\">\n\n      <button mat-raised-button (click)=\"showForm()\" color=\"primary\">Next Step</button>\n\n    </mat-card-actions>\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/user-reg/user-reg.component.scss":
/*!**************************************************!*\
  !*** ./src/app/user-reg/user-reg.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 600px;\n  /* height: 400px; */\n  margin: 3rem auto; }\n\n.login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n\n[hidden] {\n  display: none !important; }\n\n/* .material-icons {\n      font-size: 40px;\n      margin-right: 1em;\n  }\n   */\n"

/***/ }),

/***/ "./src/app/user-reg/user-reg.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-reg/user-reg.component.ts ***!
  \************************************************/
/*! exports provided: UserRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegComponent", function() { return UserRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _residents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../residents.service */ "./src/app/residents.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegComponent = /** @class */ (function () {
    function UserRegComponent(residentsService) {
        this.residentsService = residentsService;
        this.idType = [
            { id: 1, name: "National ID" },
            { id: 2, name: "Passport" },
            { id: 3, name: "Work ID" }
        ];
        this.residency = [
            { id: 1, type: "Individual" },
            { id: 2, type: "Company" }
        ];
    }
    UserRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.residentsService.getResidents()
            .subscribe(function (data) {
            _this.residents = data;
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        console.log(this.residents);
    };
    UserRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-reg',
            template: __webpack_require__(/*! ./user-reg.component.html */ "./src/app/user-reg/user-reg.component.html"),
            styles: [__webpack_require__(/*! ./user-reg.component.scss */ "./src/app/user-reg/user-reg.component.scss")]
        }),
        __metadata("design:paramtypes", [_residents_service__WEBPACK_IMPORTED_MODULE_1__["ResidentsService"]])
    ], UserRegComponent);
    return UserRegComponent;
}());



/***/ }),

/***/ "./src/app/utilities/utilities.component.html":
/*!****************************************************!*\
  !*** ./src/app/utilities/utilities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-card class=\"login-card\">\n    <mat-card-header>\n      <mat-card-title class=\"title\">\n        <h1>Utilities Records</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Item Name\" [(ngModel)]=\"itemname\" name=\"itemname\" required>\n              </mat-form-field>\n            </td>\n            <td>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Unit Price\" [(ngModel)]=\"unitprice\" name=\"unitprice\" required>\n              </mat-form-field>\n            </td>\n           \n          </tr>\n        </table>\n        <table class=\"full-width\" cellspacing=\"0\">\n          <tr>\n              <td>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"Quantity\" [(ngModel)]=\"quantity\" name=\"quantity\" required>\n                  </mat-form-field>\n                </td>\n            <td>\n              <mat-form-field>\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date of Purchase\" required>\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1></mat-datepicker>\n              </mat-form-field>\n            </td>\n\n\n          </tr>\n        </table>\n\n\n\n\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">Record</button>\n\n      </form>\n    </mat-card-content>\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/utilities/utilities.component.scss":
/*!****************************************************!*\
  !*** ./src/app/utilities/utilities.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n  max-width: 500px;\n  /* height: 400px; */\n  margin: 3rem auto; }\n\n.login-card td {\n  padding: 0 10px; }\n\n.mat-card-header {\n  text-align: center; }\n\n.full-width {\n  width: 100%; }\n\n[hidden] {\n  display: none !important; }\n\n/* .material-icons {\n      font-size: 40px;\n      margin-right: 1em;\n  }\n   */\n"

/***/ }),

/***/ "./src/app/utilities/utilities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/utilities/utilities.component.ts ***!
  \**************************************************/
/*! exports provided: UtilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesComponent", function() { return UtilitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilitiesComponent = /** @class */ (function () {
    function UtilitiesComponent() {
    }
    UtilitiesComponent.prototype.ngOnInit = function () {
    };
    UtilitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-utilities',
            template: __webpack_require__(/*! ./utilities.component.html */ "./src/app/utilities/utilities.component.html"),
            styles: [__webpack_require__(/*! ./utilities.component.scss */ "./src/app/utilities/utilities.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UtilitiesComponent);
    return UtilitiesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/okello/Documents/projects/outboxAdm/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map