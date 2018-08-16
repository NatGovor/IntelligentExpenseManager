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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _unsecure_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unsecure-app/login/login.component */ "./src/app/unsecure-app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _secure_app_secure_app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./secure-app/secure-app.module */ "./src/app/secure-app/secure-app.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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
                _unsecure_app_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _secure_app_secure_app_module__WEBPACK_IMPORTED_MODULE_8__["SecureAppModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common-services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common-services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.service */ "./src/app/common-services/helpers.service.ts");
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
var AuthService = /** @class */ (function () {
    function AuthService(http, helpersService) {
        this.http = http;
        this.helpersService = helpersService;
        this.authUrl = 'api/auth'; // URL to web api
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.authUrl, { 'email': email, 'password': password }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return _this.log("authenticate user"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('authenticate user')));
    };
    AuthService.prototype.logout = function () {
        this.helpersService.clearLocalStorage();
    };
    AuthService.prototype.log = function (message) {
        console.log('AuthService: ' + message);
    };
    AuthService.prototype.handleError = function (operation, result) {
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
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common-services/helpers.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common-services/helpers.service.ts ***!
  \****************************************************/
/*! exports provided: HelpersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpersService", function() { return HelpersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HelpersService = /** @class */ (function () {
    function HelpersService() {
    }
    HelpersService.prototype.getStorageProperty = function (name) {
        if (localStorage.getItem(name) != null) {
            var value = localStorage.getItem(name);
            if (value[0] === '{' || value[0] === '[') {
                return JSON.parse(value);
            }
            return value;
        }
        return null;
    };
    HelpersService.prototype.setStorageProperty = function (name, value) {
        if (value === null) {
            localStorage.removeItem(name);
        }
        else {
            localStorage.setItem(name, typeof (value) === 'string' ? value : JSON.stringify(value));
        }
    };
    HelpersService.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    HelpersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HelpersService);
    return HelpersService;
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

module.exports = ".close { \r\n  float: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/secure-app/expenses/expenses.component.html":
/*!*************************************************************!*\
  !*** ./src/app/secure-app/expenses/expenses.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n  <ul *ngIf=\"dayExpenses\" class=\"items-list\">\n      <li *ngFor=\"let day of dayExpenses; let i = index\">\n        <div>\n          <div class=\"date-header\">\n            {{day.date | date}}\n          </div>\n          <div *ngFor=\"let expense of day.expenses\" class=\"row\">\n            <div class=\"col-9\">\n              {{expense.description}}\n            </div>\n            <div class=\"col-2 negative\">\n              {{expense.amount | currency:'GBP':'symbol':'1.2-2'}}\n            </div>\n            <div class=\"col-1\">\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteExpense(expense, i)\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n</div>\n<div class=\"circle-btn-wrapper\">\n    <div class=\"circle-btn\" (click)=\"gotoNewExpense()\">+</div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/expense.service */ "./src/app/secure-app/services/expense.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/balance.service */ "./src/app/secure-app/services/balance.service.ts");
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
    function ExpensesComponent(expenseService, router, balanceService) {
        this.expenseService = expenseService;
        this.router = router;
        this.balanceService = balanceService;
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
    ExpensesComponent.prototype.gotoNewExpense = function () {
        this.router.navigate(['/user/new-expense']);
    };
    ExpensesComponent.prototype.deleteExpense = function (expense, index) {
        var _this = this;
        this.dayExpenses[index].expenses = this.dayExpenses[index].expenses.filter(function (e) { return e !== expense; });
        if (this.dayExpenses[index].expenses.length == 0) {
            this.dayExpenses.splice(index, 1);
        }
        this.expenseService.deleteExpense(expense.id).subscribe(function (_) {
            _this.balanceService.checkBalance(expense.date)
                .subscribe(function (result) {
                console.log(result);
                // if expense belongs to current month => update state of the app
                var currentDate = new Date();
                var expenseDate = new Date(expense.date);
                if (currentDate.getMonth() == expenseDate.getMonth()) {
                    _this.balanceService.updateBalance(result);
                }
            });
        });
    };
    ExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! ./expenses.component.html */ "./src/app/secure-app/expenses/expenses.component.html"),
            styles: [__webpack_require__(/*! ./expenses.component.css */ "./src/app/secure-app/expenses/expenses.component.css")]
        }),
        __metadata("design:paramtypes", [_services_expense_service__WEBPACK_IMPORTED_MODULE_2__["ExpenseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./src/app/secure-app/modals/modal-content.ts":
/*!****************************************************!*\
  !*** ./src/app/secure-app/modals/modal-content.ts ***!
  \****************************************************/
/*! exports provided: NgbdModalContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "headerClassName", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" [ngClass]=\"headerClassName\">{{title}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{text}}\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn\" (click)=\"activeModal.close('Cross click')\">Ok, thanks</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
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

/***/ "./src/app/secure-app/models/expense.ts":
/*!**********************************************!*\
  !*** ./src/app/secure-app/models/expense.ts ***!
  \**********************************************/
/*! exports provided: Expense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expense", function() { return Expense; });
var Expense = /** @class */ (function () {
    function Expense() {
    }
    return Expense;
}());



/***/ }),

/***/ "./src/app/secure-app/new-expense/new-expense.component.css":
/*!******************************************************************!*\
  !*** ./src/app/secure-app/new-expense/new-expense.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/secure-app/new-expense/new-expense.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/secure-app/new-expense/new-expense.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n  <h5>Add expense</h5>\n  <form (ngSubmit)=\"onSubmit()\" #expenseForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"description\"\n        required\n        [(ngModel)]=\"model.description\" name=\"description\"/>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"amount\">Amount (£)</label>\n        <input type=\"number\" class=\"form-control\" id=\"amount\"\n          required\n          [(ngModel)]=\"model.amount\" name=\"amount\"/>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"date\">Date</label>\n        <input type=\"date\" class=\"form-control\" id=\"date\"\n          required\n          [(ngModel)]=\"model.date\" name=\"date\"/>\n    </div>\n    <button type=\"submit\"\n      class=\"btn btn-long\"\n      [disabled]=\"!expenseForm.form.valid\">\n      Save\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/secure-app/new-expense/new-expense.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/secure-app/new-expense/new-expense.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExpenseComponent", function() { return NewExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_expense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/expense */ "./src/app/secure-app/models/expense.ts");
/* harmony import */ var _services_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/expense.service */ "./src/app/secure-app/services/expense.service.ts");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/balance.service */ "./src/app/secure-app/services/balance.service.ts");
/* harmony import */ var _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common-services/helpers.service */ "./src/app/common-services/helpers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewExpenseComponent = /** @class */ (function () {
    function NewExpenseComponent(expenseService, balanceService, helpersService, location) {
        this.expenseService = expenseService;
        this.balanceService = balanceService;
        this.helpersService = helpersService;
        this.location = location;
        this.model = new _models_expense__WEBPACK_IMPORTED_MODULE_2__["Expense"]();
    }
    NewExpenseComponent.prototype.ngOnInit = function () {
    };
    NewExpenseComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = this.helpersService.getStorageProperty("user");
        this.model.userId = user.id;
        this.expenseService.addExpense(this.model)
            .subscribe(function (expense) {
            _this.balanceService.checkBalance(_this.model.date)
                .subscribe(function (result) {
                console.log(result);
                // if expense belongs to current month => update state of the app
                var currentDate = new Date();
                var expenseDate = new Date(_this.model.date);
                if (currentDate.getMonth() == expenseDate.getMonth()) {
                    _this.balanceService.updateBalance(result);
                }
                _this.location.back();
            });
        });
    };
    NewExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-expense',
            template: __webpack_require__(/*! ./new-expense.component.html */ "./src/app/secure-app/new-expense/new-expense.component.html"),
            styles: [__webpack_require__(/*! ./new-expense.component.css */ "./src/app/secure-app/new-expense/new-expense.component.css")]
        }),
        __metadata("design:paramtypes", [_services_expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"],
            _services_balance_service__WEBPACK_IMPORTED_MODULE_4__["BalanceService"],
            _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_5__["HelpersService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NewExpenseComponent);
    return NewExpenseComponent;
}());



/***/ }),

/***/ "./src/app/secure-app/pipes/make-positive.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/secure-app/pipes/make-positive.pipe.ts ***!
  \********************************************************/
/*! exports provided: MakePositivePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePositivePipe", function() { return MakePositivePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MakePositivePipe = /** @class */ (function () {
    function MakePositivePipe() {
    }
    MakePositivePipe.prototype.transform = function (value) {
        return Math.abs(value);
    };
    MakePositivePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'makePositive' })
    ], MakePositivePipe);
    return MakePositivePipe;
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
/* harmony import */ var _new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-expense/new-expense.component */ "./src/app/secure-app/new-expense/new-expense.component.ts");
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
                    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"] },
                    { path: 'new-expense', component: _new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_7__["NewExpenseComponent"] }
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

module.exports = ".custom-nav {\r\n  background-color: #5bc5a7;\r\n  color: #fff;\r\n  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.custom-nav .vertical-align {\r\n  line-height: 45px;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0.2rem 0.4rem;\r\n  max-width: 105px;\r\n  text-align: center;\r\n  max-height: 56px;\r\n  min-height: 56px;\r\n}\r\n\r\na.nav-link {\r\n  color: #fff;\r\n}\r\n\r\na.nav-link.active {\r\n  border-bottom: 3px solid #fff;\r\n}\r\n\r\n.top-nav {\r\n  padding: 5px;\r\n}\r\n\r\n.top-left-nav img {\r\n  width: 23px;\r\n  float: right;\r\n  margin-left: 5px;\r\n}\r\n\r\n.popover {\r\n  top: 36px;\r\n  left: 68%;\r\n}\r\n\r\n.popover div {\r\n  margin: 0 0 10px;\r\n}\r\n\r\n.popover div:last-child {\r\n  margin: 0;\r\n}\r\n\r\n.header img {\r\n  width: 25px;\r\n}\r\n\r\n.header .header-text {\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 5px;\r\n  top: 1px;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/secure-app/secure-app.component.html":
/*!******************************************************!*\
  !*** ./src/app/secure-app/secure-app.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-nav\" [ngClass]=\"balanceStateClass\">\r\n    <div class=\"row top-nav no-margin\">\r\n      <div class=\"col-9 no-padding header\">\r\n          <img src=\"assets/wallet-icon.png\">\r\n          <div class=\"header-text\">Intelligent Expense Manager</div>\r\n        </div>\r\n      <div class=\"col-3 top-left-nav no-padding\">\r\n        <img src=\"assets/menu.png\" (click)=\"toggleSideMenu()\">\r\n        <img src=\"assets/notification.png\"/>\r\n      </div>\r\n      <div class=\"popover\" [@heroState]=\"state\">\r\n          <div class=\"popover-body\">\r\n            <div>Profile settings</div>\r\n            <div (click)=\"logout()\">Log out</div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <nav class=\"row no-margin\">\r\n      <div class=\"col-3 no-padding\">\r\n        <a class=\"nav-link active\" routerLink=\"/user/expenses\" routerLinkActive=\"active\">All expenses</a>\r\n      </div>\r\n      <div class=\"col-3 no-padding\">\r\n        <a class=\"nav-link\" routerLink=\"/user/shared-expenses\" routerLinkActive=\"active\">Shared expenses</a>\r\n      </div>\r\n      <div class=\"col-3 no-padding vertical-align\">\r\n        <a class=\"nav-link\" routerLink=\"/user/debts\" routerLinkActive=\"active\">Debts</a>\r\n      </div>\r\n      <div class=\"col-3 no-padding vertical-align\">\r\n        <a class=\"nav-link\" routerLink=\"/user/reports\" routerLinkActive=\"active\">Reports</a>\r\n      </div>\r\n    </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"dateOfBirth\">Date of birth</label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-black\" (click)=\"c('Save click')\">Save</button>\r\n  </div>\r\n</ng-template>\r\n"

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_balance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/balance.service */ "./src/app/secure-app/services/balance.service.ts");
/* harmony import */ var _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-services/helpers.service */ "./src/app/common-services/helpers.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modals_modal_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modal-content */ "./src/app/secure-app/modals/modal-content.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common-services/auth.service */ "./src/app/common-services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SecureAppComponent = /** @class */ (function () {
    function SecureAppComponent(balanceService, helpersService, modalService, authService, router) {
        var _this = this;
        this.balanceService = balanceService;
        this.helpersService = helpersService;
        this.modalService = modalService;
        this.authService = authService;
        this.router = router;
        this.balanceStateClass = '';
        this.state = "inactive";
        this.warningTitle = "Warning!";
        this.warningText = "You are getting closer to your limit! Reduce your expenses if " +
            "you do not want to overspend this month.";
        this.congratulationTitle = "Congratulations!";
        this.congratulationText = "Congratulations! You have controlled your " +
            "expenses carefully and now you are going to meet the set budget by the end of the month";
        this.subscription = balanceService.balanceUpdated$.subscribe(function (state) {
            _this.getBalanceStateClass(state);
        });
    }
    SecureAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var prevBalanceStatus = this.helpersService.getStorageProperty("balanceStatus");
        if (prevBalanceStatus === "false") {
            this.balanceStateClass = "negative-state";
        }
        var currentDate = new Date();
        this.balanceService.checkBalance(currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate())
            .subscribe(function (result) {
            console.log(result);
            _this.getBalanceStateClass(result);
        });
    };
    SecureAppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SecureAppComponent.prototype.getBalanceStateClass = function (currentBalanceState) {
        if (currentBalanceState) {
            this.balanceStateClass = 'positive-state';
        }
        else {
            this.balanceStateClass = 'negative-state';
        }
        var balanceStatus = this.helpersService.getStorageProperty("balanceStatus");
        if (balanceStatus === null) {
            if (!currentBalanceState) {
                this.showPopup(this.warningTitle, this.warningText, 'negative');
                this.helpersService.setStorageProperty("balanceStatus", currentBalanceState);
            }
        }
        else {
            balanceStatus = balanceStatus === "true"; // convert to boolean
            if (balanceStatus !== currentBalanceState) {
                this.showPopup(this.congratulationTitle, this.congratulationText, 'positive');
                this.helpersService.setStorageProperty("balanceStatus", null);
            }
        }
    };
    SecureAppComponent.prototype.showPopup = function (title, text, headerClassName) {
        var modalRef = this.modalService.open(_modals_modal_content__WEBPACK_IMPORTED_MODULE_6__["NgbdModalContent"]);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.headerClassName = headerClassName;
    };
    SecureAppComponent.prototype.toggleSideMenu = function () {
        this.state = this.state === "active" ? "inactive" : "active";
    };
    SecureAppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    SecureAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./secure-app.component.html */ "./src/app/secure-app/secure-app.component.html"),
            styles: [__webpack_require__(/*! ./secure-app.component.css */ "./src/app/secure-app/secure-app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('heroState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(-200%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(0%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"],
            _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modals_modal_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modal-content */ "./src/app/secure-app/modals/modal-content.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/secure-app/expenses/expenses.component.ts");
/* harmony import */ var _secure_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secure-app.component */ "./src/app/secure-app/secure-app.component.ts");
/* harmony import */ var _secure_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secure-app-routing.module */ "./src/app/secure-app/secure-app-routing.module.ts");
/* harmony import */ var _shared_expenses_shared_expenses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-expenses/shared-expenses.component */ "./src/app/secure-app/shared-expenses/shared-expenses.component.ts");
/* harmony import */ var _debts_debts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debts/debts.component */ "./src/app/secure-app/debts/debts.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/secure-app/reports/reports.component.ts");
/* harmony import */ var _pipes_make_positive_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/make-positive.pipe */ "./src/app/secure-app/pipes/make-positive.pipe.ts");
/* harmony import */ var _new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-expense/new-expense.component */ "./src/app/secure-app/new-expense/new-expense.component.ts");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _secure_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["SecureAppRoutingModule"]
            ],
            providers: [],
            declarations: [
                _secure_app_component__WEBPACK_IMPORTED_MODULE_5__["SecureAppComponent"],
                _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_4__["ExpensesComponent"],
                _shared_expenses_shared_expenses_component__WEBPACK_IMPORTED_MODULE_7__["SharedExpensesComponent"],
                _debts_debts_component__WEBPACK_IMPORTED_MODULE_8__["DebtsComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"],
                _pipes_make_positive_pipe__WEBPACK_IMPORTED_MODULE_10__["MakePositivePipe"],
                _new_expense_new_expense_component__WEBPACK_IMPORTED_MODULE_11__["NewExpenseComponent"],
                _modals_modal_content__WEBPACK_IMPORTED_MODULE_3__["NgbdModalContent"]
            ],
            entryComponents: [
                _modals_modal_content__WEBPACK_IMPORTED_MODULE_3__["NgbdModalContent"]
            ]
        })
    ], SecureAppModule);
    return SecureAppModule;
}());



/***/ }),

/***/ "./src/app/secure-app/services/balance.service.ts":
/*!********************************************************!*\
  !*** ./src/app/secure-app/services/balance.service.ts ***!
  \********************************************************/
/*! exports provided: BalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceService", function() { return BalanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-services/helpers.service */ "./src/app/common-services/helpers.service.ts");
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
var BalanceService = /** @class */ (function () {
    function BalanceService(http, helpersService) {
        this.http = http;
        this.helpersService = helpersService;
        this.balanceUpdatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.balanceUpdated$ = this.balanceUpdatedSource.asObservable();
        this.balancesUrl = 'api/balances'; // URL to web api
    }
    BalanceService.prototype.updateBalance = function (state) {
        this.balanceUpdatedSource.next(state);
    };
    BalanceService.prototype.checkBalance = function (date) {
        var _this = this;
        var user = this.helpersService.getStorageProperty("user");
        var url = this.balancesUrl + "/" + user.id + "/" + date;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            _this.log("fetched balance");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('checkExpenses')));
    };
    BalanceService.prototype.log = function (message) {
        console.log('ExpenseService: ' + message);
    };
    BalanceService.prototype.handleError = function (operation, result) {
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
    BalanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]])
    ], BalanceService);
    return BalanceService;
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
/* harmony import */ var _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common-services/helpers.service */ "./src/app/common-services/helpers.service.ts");
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
    function ExpenseService(http, helpersService) {
        this.http = http;
        this.helpersService = helpersService;
        this.expensesUrl = 'api/expenses'; // URL to web api
    }
    ExpenseService.prototype.getExpenses = function () {
        var _this = this;
        var user = this.helpersService.getStorageProperty("user");
        var url = this.expensesUrl + "/user/" + user.id;
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
    ExpenseService.prototype.addExpense = function (expense) {
        var _this = this;
        return this.http.post(this.expensesUrl, expense, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (expense) { return _this.log("added expense w/ id=" + expense.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addExpense')));
    };
    ExpenseService.prototype.deleteExpense = function (id) {
        var _this = this;
        var url = this.expensesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted expense id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteExpense')));
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_5__["HelpersService"]])
    ], ExpenseService);
    return ExpenseService;
}());



/***/ }),

/***/ "./src/app/secure-app/services/shared-expense.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/secure-app/services/shared-expense.service.ts ***!
  \***************************************************************/
/*! exports provided: SharedExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedExpenseService", function() { return SharedExpenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common-services/helpers.service */ "./src/app/common-services/helpers.service.ts");
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
var SharedExpenseService = /** @class */ (function () {
    function SharedExpenseService(http, helpersService) {
        this.http = http;
        this.helpersService = helpersService;
        this.expensesUrl = 'api/sharedexpenses'; // URL to web api
    }
    SharedExpenseService.prototype.getSharedExpenses = function () {
        var _this = this;
        var user = this.helpersService.getStorageProperty("user");
        var url = this.expensesUrl + "/" + user.id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (expenses) { return _this.log("fetched sharedExpenses"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSharedExpenses', [])));
    };
    SharedExpenseService.prototype.log = function (message) {
        console.log('SharedExpenseService: ' + message);
    };
    SharedExpenseService.prototype.handleError = function (operation, result) {
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
    SharedExpenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_4__["HelpersService"]])
    ], SharedExpenseService);
    return SharedExpenseService;
}());



/***/ }),

/***/ "./src/app/secure-app/shared-expenses/shared-expenses.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/secure-app/shared-expenses/shared-expenses.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paid-section {\r\n  text-align: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/secure-app/shared-expenses/shared-expenses.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/secure-app/shared-expenses/shared-expenses.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n    <ul class=\"items-list\">\n      <li *ngFor=\"let expense of sharedExpenses\">\n        <div class=\"date-header\">{{expense.date | date}}</div>\n        <div class=\"row\">\n            <div class=\"col-5\">{{expense.description}}</div>\n            <div class=\"col-7 paid-section\">\n              <div>{{getPayerName(expense)}} paid {{expense.totalAmount | currency:'GBP':'symbol':'1.2-2'}}</div>\n              <div [ngClass]=\"addClass(expense)\">\n                {{getDebtText(expense)}} {{expense.userDebt | makePositive | currency:'GBP':'symbol':'1.2-2'}}\n              </div>\n            </div>\n        </div>\n      </li>\n    </ul>\n</div>\n<div class=\"circle-btn-wrapper\">\n  <div class=\"circle-btn\" (click)=\"gotoNewExpense()\">+</div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_expense_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared-expense.service */ "./src/app/secure-app/services/shared-expense.service.ts");
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
    function SharedExpensesComponent(sharedExpenseService, router) {
        this.sharedExpenseService = sharedExpenseService;
        this.router = router;
    }
    SharedExpensesComponent.prototype.ngOnInit = function () {
        this.getSharedExpenses();
    };
    SharedExpensesComponent.prototype.getSharedExpenses = function () {
        var _this = this;
        this.sharedExpenseService.getSharedExpenses()
            .subscribe(function (sharedExpenses) {
            _this.sharedExpenses = sharedExpenses;
        });
    };
    SharedExpensesComponent.prototype.getPayerName = function (expense) {
        if (expense.userId === expense.payerId) {
            return 'you';
        }
        else {
            return expense.payerName;
        }
    };
    SharedExpensesComponent.prototype.getDebtText = function (expense) {
        if (expense.userDebt < 0) {
            return "you borrowed";
        }
        else {
            return "you lent";
        }
    };
    SharedExpensesComponent.prototype.addClass = function (expense) {
        if (expense.userId === expense.payerId) {
            return 'positive';
        }
        else {
            return 'negative';
        }
    };
    SharedExpensesComponent.prototype.gotoNewExpense = function () {
        this.router.navigate(['/user/new-expense']);
    };
    SharedExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shared-expenses',
            template: __webpack_require__(/*! ./shared-expenses.component.html */ "./src/app/secure-app/shared-expenses/shared-expenses.component.html"),
            styles: [__webpack_require__(/*! ./shared-expenses.component.css */ "./src/app/secure-app/shared-expenses/shared-expenses.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shared_expense_service__WEBPACK_IMPORTED_MODULE_2__["SharedExpenseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SharedExpensesComponent);
    return SharedExpensesComponent;
}());



/***/ }),

/***/ "./src/app/unsecure-app/login/login.component.css":
/*!********************************************************!*\
  !*** ./src/app/unsecure-app/login/login.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  margin: 30% 0 30px;\r\n}\r\n\r\n.header img {\r\n  float: left;\r\n}\r\n\r\n.header h1 {\r\n  position: relative;\r\n  left: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/unsecure-app/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/unsecure-app/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\r\n  <div class=\"header\">\r\n    <img src=\"assets/wallet-icon.png\">\r\n    <h1>Intelligent Expense Manager</h1>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n  <div>\r\n    <h5>Enter Credentials to login:</h5>\r\n    <div class=\"form-group\">\r\n      <label>Email: </label>\r\n      <input [(ngModel)]=\"email\" type=\"text\" class=\"form-control\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Password: </label>\r\n      <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button (click)=\"login()\" type=\"submit\" class=\"btn btn-long\">Login</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common-services/auth.service */ "./src/app/common-services/auth.service.ts");
/* harmony import */ var _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common-services/helpers.service */ "./src/app/common-services/helpers.service.ts");
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
    function LoginComponent(router, authService, helpersService) {
        this.router = router;
        this.authService = authService;
        this.helpersService = helpersService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var user = this.helpersService.getStorageProperty("user");
        if (user) {
            this.router.navigate(['/user/expenses']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.email && this.password) {
            this.authService.login(this.email, this.password)
                .subscribe(function (result) {
                if (result.isSuccess) {
                    _this.helpersService.setStorageProperty("user", result.user);
                    _this.router.navigate(['/user/expenses']);
                }
                else {
                    alert('Invalid login or password');
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/unsecure-app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/unsecure-app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _common_services_helpers_service__WEBPACK_IMPORTED_MODULE_3__["HelpersService"]])
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