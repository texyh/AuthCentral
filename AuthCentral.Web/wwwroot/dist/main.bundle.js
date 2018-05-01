webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_app_component__ = __webpack_require__("./src/app/layout/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__ = __webpack_require__("./src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_aside_aside_component__ = __webpack_require__("./src/app/shared/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__clients_clientList_clients_component__ = __webpack_require__("./src/app/clients/clientList/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clients_clientaside_clientaside_component__ = __webpack_require__("./src/app/clients/clientaside/clientaside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clients_services_client_service__ = __webpack_require__("./src/app/clients/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__clients_clientdetails_clientdetails_component__ = __webpack_require__("./src/app/clients/clientdetails/clientdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__clients_clientscopes_clientscopes_component__ = __webpack_require__("./src/app/clients/clientscopes/clientscopes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__clients_clientroles_clientroles_component__ = __webpack_require__("./src/app/clients/clientroles/clientroles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__layout_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__clients_clientList_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__clients_clientaside_clientaside_component__["a" /* ClientAsideComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shared_aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_14__clients_clientdetails_clientdetails_component__["a" /* ClientdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__clients_clientscopes_clientscopes_component__["a" /* ClientscopesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__clients_clientroles_clientroles_component__["a" /* ClientrolesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'clients', pathMatch: 'full' },
                    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_11__clients_clientList_clients_component__["a" /* ClientsComponent */] },
                    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__["a" /* ResourcesComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__users_users_component__["a" /* UsersComponent */] },
                    { path: '**', redirectTo: 'clients' }
                ]),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_8__angular_common__["d" /* HashLocationStrategy */] },
                __WEBPACK_IMPORTED_MODULE_13__clients_services_client_service__["a" /* ClientService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__layout_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clientList/clients.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clientList/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Clients</p>\r\n<table class=\"table table-striped\">\r\n  <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Identifier</th>\r\n        <th>Enabled</th>\r\n        <th>url</th>\r\n    </tr>\r\n    \r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let client of clients\">\r\n      <td> <a (click)=\"showClient(client.id)\">{{client.name}}</a></td>\r\n      <td>{{client.identifier}}</td>\r\n      <td>{{client.enabled}}</td>\r\n      <td>{{client.uri}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<!-- <button (click)=\"open()\">Open</button> -->\r\n\r\n<app-client-aside>\r\n\r\n</app-client-aside>"

/***/ }),

/***/ "./src/app/clients/clientList/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clientaside_clientaside_component__ = __webpack_require__("./src/app/clients/clientaside/clientaside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("./src/app/clients/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(_clientService) {
        this._clientService = _clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientService.getClients()
            .subscribe(function (clients) {
            _this.clients = clients;
        });
    };
    ClientsComponent.prototype.showClient = function (id) {
        this.clientAside.show(id);
    };
    ClientsComponent.prototype.open = function () {
        this.clientAside.open();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__clientaside_clientaside_component__["a" /* ClientAsideComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__clientaside_clientaside_component__["a" /* ClientAsideComponent */])
    ], ClientsComponent.prototype, "clientAside", void 0);
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clientList/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients/clientList/clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/clients/clientaside/clientaside.component.css":
/***/ (function(module, exports) {

module.exports = ".client-tabs {\r\n    margin-bottom: 20px;\r\n}"

/***/ }),

/***/ "./src/app/clients/clientaside/clientaside.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside [title]=\"'Client'\">\n    <div xaside-header class=\"pull-right\">\n        <!-- <button  type=\"button\" class=\"close\" aria-label=\"edit\">\n            <span class=\"glyphicon glyphicon-pencil\"></span>\n        </button> -->\n    </div>\n    <div xaside-body>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <ul class=\"nav nav-tabs client-tabs nav-justified\" role=\"tablist\">\n                        <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Home</a></li>\n                        <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Scopes</a></li>\n                        <li role=\"presentation\"><a href=\"#messages\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">Roles</a></li>\n                </ul>\n                <div class=\"tab-content\">\n                    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n                        <app-clientdetails [client]=\"client\"></app-clientdetails>\n                    </div>\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\n                        <app-clientscopes></app-clientscopes>\n                    </div>\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"messages\">\n                        <app-clientroles></app-clientroles>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n    <div xaside-footer>\n        <button>save</button>\n    </div>\n\n</app-aside>"

/***/ }),

/***/ "./src/app/clients/clientaside/clientaside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientAsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_aside_aside_component__ = __webpack_require__("./src/app/shared/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("./src/app/clients/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientAsideComponent = /** @class */ (function () {
    function ClientAsideComponent(_service) {
        this._service = _service;
    }
    ClientAsideComponent.prototype.ngOnInit = function () {
    };
    ClientAsideComponent.prototype.show = function (id) {
        var _this = this;
        this._service.getClient(id).subscribe(function (client) {
            _this.client = client;
        });
        this.open();
    };
    ClientAsideComponent.prototype.open = function () {
        this.asideComponent.show();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__shared_aside_aside_component__["a" /* AsideComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_aside_aside_component__["a" /* AsideComponent */])
    ], ClientAsideComponent.prototype, "asideComponent", void 0);
    ClientAsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-aside',
            template: __webpack_require__("./src/app/clients/clientaside/clientaside.component.html"),
            styles: [__webpack_require__("./src/app/clients/clientaside/clientaside.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]])
    ], ClientAsideComponent);
    return ClientAsideComponent;
}());



/***/ }),

/***/ "./src/app/clients/clientdetails/clientdetails.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clientdetails/clientdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"row\">\n    <div class=\"form-group col-md-12\">\n      <label>Name</label>\n      <input name=\"name\" [(ngModel)]=\"clientDetail.name\" class=\"form-control\" />\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-md-6\">\n      <label>Identifier</label>\n      <input name=\"identifier\" [(ngModel)]=\"clientDetail.identifier\" class=\"form-control\" />\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>Url</label>\n      <input name=\"uri\" [(ngModel)]=\"clientDetail.uri\" class=\"form-control\" />\n    </div>\n  </div>\n\n</form>\n\n      <div class=\"panel col-md-6 panel-default\">\n        <div class=\"panel-heading\">Secrets</div>\n        <div class=\"panel-body\">\n          Panel content\n        </div>\n      </div>\n      <div class=\"panel col-md-6 panel-default\">\n          <div class=\"panel-heading\">Redirect Uris</div>\n          <div class=\"panel-body\">\n            Panel content\n          </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/clients/clientdetails/clientdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_client_model__ = __webpack_require__("./src/app/clients/models/client.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientdetailsComponent = /** @class */ (function () {
    function ClientdetailsComponent() {
    }
    ClientdetailsComponent.prototype.ngOnInit = function () {
        this.clientDetail = new __WEBPACK_IMPORTED_MODULE_1__models_client_model__["a" /* Client */]();
    };
    ClientdetailsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.client) {
            this.clientDetail = changes.client.currentValue;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_client_model__["a" /* Client */])
    ], ClientdetailsComponent.prototype, "client", void 0);
    ClientdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientdetails',
            template: __webpack_require__("./src/app/clients/clientdetails/clientdetails.component.html"),
            styles: [__webpack_require__("./src/app/clients/clientdetails/clientdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientdetailsComponent);
    return ClientdetailsComponent;
}());



/***/ }),

/***/ "./src/app/clients/clientroles/clientroles.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clientroles/clientroles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Roles</div>\n    <div class=\"panel-body\">\n      Panel content\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/clients/clientroles/clientroles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientrolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientrolesComponent = /** @class */ (function () {
    function ClientrolesComponent() {
    }
    ClientrolesComponent.prototype.ngOnInit = function () {
    };
    ClientrolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientroles',
            template: __webpack_require__("./src/app/clients/clientroles/clientroles.component.html"),
            styles: [__webpack_require__("./src/app/clients/clientroles/clientroles.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientrolesComponent);
    return ClientrolesComponent;
}());



/***/ }),

/***/ "./src/app/clients/clientscopes/clientscopes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clients/clientscopes/clientscopes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">Scopes</div>\n    <div class=\"panel-body\">\n      Panel content\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/clients/clientscopes/clientscopes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientscopesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientscopesComponent = /** @class */ (function () {
    function ClientscopesComponent() {
    }
    ClientscopesComponent.prototype.ngOnInit = function () {
    };
    ClientscopesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientscopes',
            template: __webpack_require__("./src/app/clients/clientscopes/clientscopes.component.html"),
            styles: [__webpack_require__("./src/app/clients/clientscopes/clientscopes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientscopesComponent);
    return ClientscopesComponent;
}());



/***/ }),

/***/ "./src/app/clients/models/client.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
        this.accessTokenType = 0;
        this.alwaysIncludeUserClaimsInIdToken = true;
        this.alwaysSendClientClaims = true;
        this.authorizationCodeLifetime = 300;
        this.allowPlextPkce = false;
        this.enableLocalLogin = true;
        this.identityTokenLifetime = 300;
        this.includeJwtId = false;
        this.backChannelLogoutSessionRequired = true;
        this.frontChannelLogoutSessionRequired = true;
        this.protocolType = 'oidc';
        this.refreshTokenUsage = 1;
        this.requirePkce = false;
        this.updateAccessTokenClaimsOnRefresh = false;
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/clients/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(_http) {
        this._http = _http;
        this.apiRoot = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
        this.baseUrl = 'api/clients';
    }
    ClientService.prototype.getClients = function () {
        return this._http.get("" + this.apiRoot + this.baseUrl);
    };
    ClientService.prototype.getClient = function (id) {
        return this._http.get("" + this.apiRoot + this.baseUrl + "/" + id);
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/layout/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ndiv.spa {\r\n    bottom: 0;\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n<div class=\"spa\">\r\n<div class=\"col-md-3\">\r\n    <app-nav></app-nav>\r\n</div>\r\n<div class=\"col-md-9\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/layout/app.component.html"),
            styles: [__webpack_require__("./src/app/layout/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "ul.side-nav {\r\n    background-color: #2D323F;\r\n    height:100%;\r\n    position: fixed;\r\n}\r\n\r\n\r\n.side-nav {\r\n    display:block; \r\n    width: 25%;\r\n    padding: 10px 0px 10px 0px;\r\n    text-align: left;    \r\n}\r\n\r\n\r\n.side-nav  li{\r\n    display:block;\r\n    \r\n    height: 40px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n     \r\n}\r\n\r\n\r\n.side-nav  li a{\r\n    text-decoration: none;\r\n    list-style: none;\r\n    color: white;\r\n    display: block;\r\n    padding-top:7px;\r\n    padding-bottom: 7px;\r\n    padding-left: 7px;\r\n        \r\n   \r\n}\r\n\r\n\r\n.side-nav  li a:hover{\r\n    display: block;\r\n    background-color: #424652;\r\n  \r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"side-nav\">\r\n    <li>\r\n        <a [routerLinkActive]=\"['active']\" [routerLink]=\"['clients']\"> Clients </a>\r\n    </li>\r\n    <li>\r\n        <a [routerLinkActive]=\"['active']\" [routerLink]=\"['resources']\"> Resources</a>\r\n    </li>\r\n    <li>\r\n        <a [routerLinkActive]=\"['active']\" [routerLink]=\"['users']\"> Users </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/resources/resources.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resources works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resources',
            template: __webpack_require__("./src/app/resources/resources.component.html"),
            styles: [__webpack_require__("./src/app/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/shared/aside/aside.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.sidebar {\r\n    width: 50em;\r\n    position: fixed;\r\n    top: 0;\r\n    /* bottom: 20px; */\r\n    right: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    -webkit-overflow-scrolling: touch;\r\n    overflow: auto;\r\n    pointer-events: auto;\r\n    -ms-touch-action: auto;\r\n        touch-action: auto;\r\n    will-change: initial;\r\n    z-index: 99999999;\r\n    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);\r\n    transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);\r\n    transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);\r\n    transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);\r\n}\r\n\r\n.aside-header {\r\n    padding-left: 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    height: 5vh;\r\n}\r\n\r\n.aside-footer {\r\n    padding: 15px;\r\n    text-align: right;\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\n.aside-body {\r\n    position: relative;\r\n    padding: 15px;\r\n    height: 85vh;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: #000;\r\n    opacity: 0.75;\r\n    pointer-events: auto;\r\n    z-index: 99999998;\r\n}\r\n\r\n.close {\r\n    font-size: 25px;\r\n    opacity: .4;\r\n}\r\n\r\n/* @media only screen and (min-width: 769px) {\r\n    .sidebar {\r\n        width: 28em;\r\n    }\r\n} */\r\n\r\n@media only screen and (max-width: 360px) {\r\n    .aside-body {\r\n        height: 82vh;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/shared/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{backdrop: visibleStatus}\"></div>\r\n<aside class=\"container sidebar\" *ngIf=\"visibleStatus\">\r\n    <div class=\"aside-header\">\r\n        <button (click)=\"close()\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <ng-content select=\"[xaside-header]\"></ng-content>                    \r\n        <h3 class=\"aside-title\">{{title}}</h3>\r\n    </div>\r\n    <div class=\"aside-body\">\r\n        <ng-content select=\"[xaside-body]\"></ng-content>\r\n    </div>\r\n    <div class=\"aside-footer\">\r\n        <ng-content select=\"[xaside-footer]\"></ng-content>        \r\n    </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/shared/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideComponent = /** @class */ (function () {
    function AsideComponent() {
        this.title = '[Title Goes Here]';
    }
    AsideComponent.prototype.show = function () {
        this.visibleStatus = true;
    };
    AsideComponent.prototype.close = function () {
        this.visibleStatus = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AsideComponent.prototype, "title", void 0);
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aside',
            template: __webpack_require__("./src/app/shared/aside/aside.component.html"),
            styles: [__webpack_require__("./src/app/shared/aside/aside.component.css")]
        })
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  users works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    apiUrl: '/',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map