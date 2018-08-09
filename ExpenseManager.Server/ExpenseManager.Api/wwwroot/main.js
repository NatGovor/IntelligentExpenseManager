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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _unsecure_app_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsecure-app/login/login.component */ "./src/app/unsecure-app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _unsecure_app_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n}\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _unsecure_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unsecure-app/login/login.component */ "./src/app/unsecure-app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _secure_app_secure_app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./secure-app/secure-app.module */ "./src/app/secure-app/secure-app.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _unsecure_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _secure_app_secure_app_module__WEBPACK_IMPORTED_MODULE_7__["SecureAppModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/secure-app/debts/debts.component.css":
/*!******************************************************!*\
  !*** ./src/app/secure-app/debts/debts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secure-app/debts/debts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/secure-app/debts/debts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  debts works!\n</p>\n"

/***/ }),

/***/ "./src/app/secure-app/debts/debts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/secure-app/debts/debts.component.ts ***!
  \*****************************************************/
/*! exports provided: DebtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebtsComponent", function() { return DebtsComponent; });
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

var DebtsComponent = /** @class */ (function () {
    function DebtsComponent() {
    }
    DebtsComponent.prototype.ngOnInit = function () {
    };
    DebtsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-debts',
            template: __webpack_require__(/*! ./debts.component.html */ "./src/app/secure-app/debts/debts.component.html"),
            styles: [__webpack_require__(/*! ./debts.component.css */ "./src/app/secure-app/debts/debts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DebtsComponent);
    return DebtsComponent;
}());



/***/ }),

/***/ "./src/app/secure-app/expenses/expenses.component.css":
/*!************************************************************!*\
  !*** ./src/app/secure-app/expenses/expenses.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secure-app/expenses/expenses.component.html":
/*!*************************************************************!*\
  !*** ./src/app/secure-app/expenses/expenses.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul *ngIf=\"dayExpenses\" class=\"items-list\">\n      <li *ngFor=\"let day of dayExpenses\">\n        <div>\n          {{day.date | date}}\n          <div *ngFor=\"let expense of day.expenses\">\n            {{expense.description}} {{expense.amount | currency:'GBP':true:'1.2-2' }}\n          </div>\n        </div>\n      </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/secure-app/expenses/expenses.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/secure-app/expenses/expenses.component.ts ***!
  \***********************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/expense.service */ "./src/app/secure-app/services/expense.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent(expenseService) {
        this.expenseService = expenseService;
    }
    ExpensesComponent.prototype.ngOnInit = function () {
        this.getExpenses();
    };
    ExpensesComponent.prototype.getExpenses = function () {
        var _this = this;
        this.expenseService.getExpenses()
            .subscribe(function (dayExpenses) {
            _this.dayExpenses = dayExpenses;
        });
    };
    ExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! ./expenses.component.html */ "./src/app/secure-app/expenses/expenses.component.html"),
            styles: [__webpack_require__(/*! ./expenses.component.css */ "./src/app/secure-app/expenses/expenses.component.css")]
        }),
        __metadata("design:paramtypes", [_services_expense_service__WEBPACK_IMPORTED_MODULE_1__["ExpenseService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./src/app/secure-app/models/day-expenses.ts":
/*!***************************************************!*\
  !*** ./src/app/secure-app/models/day-expenses.ts ***!
  \***************************************************/
/*! exports provided: DayExpenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayExpenses", function() { return DayExpenses; });
var DayExpenses = /** @class */ (function () {
    function DayExpenses() {
    }
    return DayExpenses;
}());



/***/ }),

/***/ "./src/app/secure-app/reports/reports.component.css":
/*!**********************************************************!*\
  !*** ./src/app/secure-app/reports/reports.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secure-app/reports/reports.component.html":
/*!***********************************************************!*\
  !*** ./src/app/secure-app/reports/reports.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reports works!\n</p>\n"

/***/ }),

/***/ "./src/app/secure-app/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/secure-app/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
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

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/secure-app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/secure-app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/secure-app/secure-app-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/secure-app/secure-app-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SecureAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureAppRoutingModule", function() { return SecureAppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _secure_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secure-app.component */ "./src/app/secure-app/secure-app.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/secure-app/expenses/expenses.component.ts");
/* harmony import */ var _shared_expenses_shared_expenses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-expenses/shared-expenses.component */ "./src/app/secure-app/shared-expenses/shared-expenses.component.ts");
/* harmony import */ var _debts_debts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debts/debts.component */ "./src/app/secure-app/debts/debts.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/secure-app/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var secureAppRoutes = [
    {
        path: 'user',
        component: _secure_app_component__WEBPACK_IMPORTED_MODULE_2__["SecureAppComponent"],
        children: [
            {
                path: '',
                children: [
                    { path: 'expenses', component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"] },
                    { path: 'shared-expenses', component: _shared_expenses_shared_expenses_component__WEBPACK_IMPORTED_MODULE_4__["SharedExpensesComponent"] },
                    { path: 'debts', component: _debts_debts_component__WEBPACK_IMPORTED_MODULE_5__["DebtsComponent"] },
                    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"] }
                ]
            }
        ]
    }
];
var SecureAppRoutingModule = /** @class */ (function () {
    function SecureAppRoutingModule() {
    }
    SecureAppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(secureAppRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SecureAppRoutingModule);
    return SecureAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/secure-app/secure-app.component.css":
/*!*****************************************************!*\
  !*** ./src/app/secure-app/secure-app.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\r\n  background-color: #5bc5a7;\r\n  color: #fff;\r\n}\r\n\r\n.nav-top {\r\n  background-color: #5bc5a7;\r\n  color: #fff;\r\n  padding: 6px;\r\n}\r\n\r\n.nav-bottom {\r\n  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.nav-link {\r\n  padding: 0.2rem 0.4rem;\r\n  max-width: 105px;\r\n  text-align: center;\r\n  max-height: 56px;\r\n  min-height: 56px;\r\n}\r\n\r\na.nav-link {\r\n  color: #fff;\r\n}\r\n\r\na.nav-link.active {\r\n  border-bottom: 3px solid #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/secure-app/secure-app.component.html":
/*!******************************************************!*\
  !*** ./src/app/secure-app/secure-app.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row nav-top\">\r\n    <div class=\"col-10\">Intellginet Expense Manager</div>\r\n    <div class=\"col-2\">\r\n        <img src=\"assets/bell-icon.svg\"/>\r\n    </div>\r\n</div>\r\n<nav class=\"nav nav-bottom\">\r\n  <a class=\"nav-link active\" routerLink=\"/user/expenses\" routerLinkActive=\"active\">All expenses</a>\r\n  <a class=\"nav-link\" routerLink=\"/user/shared-expenses\" routerLinkActive=\"active\">Shared expenses</a>\r\n  <a class=\"nav-link\" routerLink=\"/user/debts\" routerLinkActive=\"active\">Debts</a>\r\n  <a class=\"nav-link\" routerLink=\"/user/reports\" routerLinkActive=\"active\">Reports</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/secure-app/secure-app.component.ts":
/*!****************************************************!*\
  !*** ./src/app/secure-app/secure-app.component.ts ***!
  \****************************************************/
/*! exports provided: SecureAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureAppComponent", function() { return SecureAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecureAppComponent = /** @class */ (function () {
    function SecureAppComponent() {
    }
    SecureAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./secure-app.component.html */ "./src/app/secure-app/secure-app.component.html"),
            styles: [__webpack_require__(/*! ./secure-app.component.css */ "./src/app/secure-app/secure-app.component.css")]
        })
    ], SecureAppComponent);
    return SecureAppComponent;
}());



/***/ }),

/***/ "./src/app/secure-app/secure-app.module.ts":
/*!*************************************************!*\
  !*** ./src/app/secure-app/secure-app.module.ts ***!
  \*************************************************/
/*! exports provided: SecureAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureAppModule", function() { return SecureAppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/secure-app/expenses/expenses.component.ts");
/* harmony import */ var _secure_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secure-app.component */ "./src/app/secure-app/secure-app.component.ts");
/* harmony import */ var _secure_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secure-app-routing.module */ "./src/app/secure-app/secure-app-routing.module.ts");
/* harmony import */ var _shared_expenses_shared_expenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-expenses/shared-expenses.component */ "./src/app/secure-app/shared-expenses/shared-expenses.component.ts");
/* harmony import */ var _debts_debts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debts/debts.component */ "./src/app/secure-app/debts/debts.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/secure-app/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SecureAppModule = /** @class */ (function () {
    function SecureAppModule() {
    }
    SecureAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _secure_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["SecureAppRoutingModule"]
            ],
            providers: [],
            declarations: [
                _secure_app_component__WEBPACK_IMPORTED_MODULE_3__["SecureAppComponent"],
                _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_2__["ExpensesComponent"],
                _shared_expenses_shared_expenses_component__WEBPACK_IMPORTED_MODULE_5__["SharedExpensesComponent"],
                _debts_debts_component__WEBPACK_IMPORTED_MODULE_6__["DebtsComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"]
            ]
        })
    ], SecureAppModule);
    return SecureAppModule;
}());



/***/ }),

/***/ "./src/app/secure-app/services/expense.service.ts":
/*!********************************************************!*\
  !*** ./src/app/secure-app/services/expense.service.ts ***!
  \********************************************************/
/*! exports provided: ExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_day_expenses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/day-expenses */ "./src/app/secure-app/models/day-expenses.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ExpenseService = /** @class */ (function () {
    function ExpenseService(http) {
        this.http = http;
        this.expensesUrl = 'api/expenses'; // URL to web api
    }
    ExpenseService.prototype.getExpenses = function () {
        var _this = this;
        var userId = "5b69aa4c544dfdd27f4e3c70";
        var url = this.expensesUrl + "/" + userId;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (expenses) {
            var dayExpenses = [];
            for (var key in expenses) {
                var dayExpense = new _models_day_expenses__WEBPACK_IMPORTED_MODULE_4__["DayExpenses"]();
                dayExpense.date = new Date(key);
                dayExpense.expenses = expenses[key];
                dayExpenses.push(dayExpense);
            }
            return dayExpenses;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (expenses) {
            _this.log("fetched expenses");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getExpenses', [])));
    };
    ExpenseService.prototype.log = function (message) {
        console.log('ExpenseService: ' + message);
    };
    ExpenseService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ExpenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/secure-app/shared-expenses/shared-expenses.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/secure-app/shared-expenses/shared-expenses.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secure-app/shared-expenses/shared-expenses.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/secure-app/shared-expenses/shared-expenses.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shared-expenses works!\n</p>\n"

/***/ }),

/***/ "./src/app/secure-app/shared-expenses/shared-expenses.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/secure-app/shared-expenses/shared-expenses.component.ts ***!
  \*************************************************************************/
/*! exports provided: SharedExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedExpensesComponent", function() { return SharedExpensesComponent; });
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

var SharedExpensesComponent = /** @class */ (function () {
    function SharedExpensesComponent() {
    }
    SharedExpensesComponent.prototype.ngOnInit = function () {
    };
    SharedExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shared-expenses',
            template: __webpack_require__(/*! ./shared-expenses.component.html */ "./src/app/secure-app/shared-expenses/shared-expenses.component.html"),
            styles: [__webpack_require__(/*! ./shared-expenses.component.css */ "./src/app/secure-app/shared-expenses/shared-expenses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SharedExpensesComponent);
    return SharedExpensesComponent;
}());



/***/ }),

/***/ "./src/app/unsecure-app/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/unsecure-app/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <p>Enter Credentials to login:</p>\r\n    <div class=\"form-group\">\r\n      <label>Email: </label>\r\n      <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password: </label>\r\n      <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button (click)=\"login()\" type=\"submit\">Login</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/unsecure-app/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/unsecure-app/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        if (this.email && this.password) {
            this.router.navigate(['/user/expenses']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/unsecure-app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");




if (environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\QMUL\Final-project\ExpenseManager\ExpenseManager.Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map