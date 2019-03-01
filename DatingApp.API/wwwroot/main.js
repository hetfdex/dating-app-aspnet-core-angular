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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var userPhotoUrl = localStorage.getItem('userPhotoUrl');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        if (userPhotoUrl) {
            this.authService.updatePhoto(userPhotoUrl);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/error.interceptor */ "./src/app/services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _connections_connections_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./connections/connections.component */ "./src/app/connections/connections.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _matches_matches_list_matches_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./matches/matches-list/matches-list.component */ "./src/app/matches/matches-list/matches-list.component.ts");
/* harmony import */ var _matches_matches_card_matches_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./matches/matches-card/matches-card.component */ "./src/app/matches/matches-card/matches-card.component.ts");
/* harmony import */ var _matches_matches_details_matches_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./matches/matches-details/matches-details.component */ "./src/app/matches/matches-details/matches-details.component.ts");
/* harmony import */ var _resolvers_matches_details_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./resolvers/matches-details.resolver */ "./src/app/resolvers/matches-details.resolver.ts");
/* harmony import */ var _resolvers_matches_list_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./resolvers/matches-list.resolver */ "./src/app/resolvers/matches-list.resolver.ts");
/* harmony import */ var _matches_matches_edit_matches_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./matches/matches-edit/matches-edit.component */ "./src/app/matches/matches-edit/matches-edit.component.ts");
/* harmony import */ var _resolvers_matches_edit_resolver__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./resolvers/matches-edit.resolver */ "./src/app/resolvers/matches-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./guards/prevent-unsaved-changes.guard */ "./src/app/guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _matches_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./matches/photo-editor/photo-editor.component */ "./src/app/matches/photo-editor/photo-editor.component.ts");
/* harmony import */ var _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./resolvers/list.resolver */ "./src/app/resolvers/list.resolver.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./resolvers/messages.resolver */ "./src/app/resolvers/messages.resolver.ts");
/* harmony import */ var _matches_matches_messages_matches_messages_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./matches/matches-messages/matches-messages.component */ "./src/app/matches/matches-messages/matches-messages.component.ts");




































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
                _connections_connections_component__WEBPACK_IMPORTED_MODULE_20__["ConnectionsComponent"],
                _matches_matches_list_matches_list_component__WEBPACK_IMPORTED_MODULE_24__["MatchesListComponent"],
                _matches_matches_card_matches_card_component__WEBPACK_IMPORTED_MODULE_25__["MatchesCardComponent"],
                _matches_matches_details_matches_details_component__WEBPACK_IMPORTED_MODULE_26__["MatchesDetailsComponent"],
                _matches_matches_edit_matches_edit_component__WEBPACK_IMPORTED_MODULE_29__["MatchesEditComponent"],
                _matches_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_32__["PhotoEditorComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"],
                _matches_matches_messages_matches_messages_component__WEBPACK_IMPORTED_MODULE_35__["MatchesMessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_21__["appRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_7__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_18__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
                _resolvers_matches_details_resolver__WEBPACK_IMPORTED_MODULE_27__["MatchesDetailsResolver"],
                _resolvers_matches_list_resolver__WEBPACK_IMPORTED_MODULE_28__["MatchesListResolver"],
                _resolvers_matches_edit_resolver__WEBPACK_IMPORTED_MODULE_30__["MatchesEditResolver"],
                _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_33__["ListsResolver"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_31__["PreventUnsavedChangesGuard"],
                _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_34__["MessagesResolver"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/connections/connections.component.css":
/*!*******************************************************!*\
  !*** ./src/app/connections/connections.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3Rpb25zL2Nvbm5lY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/connections/connections.component.html":
/*!********************************************************!*\
  !*** ./src/app/connections/connections.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n  <h3>{{likesParam === 'Likers' ? 'Like me' : 'Like them'}}: {{pagination.totalItems}}</h3>\r\n</div>\r\n\r\n<div class=\"container mt-3\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Like me</button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Like them</button>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\r\n      <app-matches-card [user]=\"user\"></app-matches-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\r\n    (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\r\n</div>"

/***/ }),

/***/ "./src/app/connections/connections.component.ts":
/*!******************************************************!*\
  !*** ./src/app/connections/connections.component.ts ***!
  \******************************************************/
/*! exports provided: ConnectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionsComponent", function() { return ConnectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");






var ConnectionsComponent = /** @class */ (function () {
    function ConnectionsComponent(authService, userService, route, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
    }
    ConnectionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.likesParam = 'Likers';
    };
    ConnectionsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ConnectionsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (response) {
            _this.users = response.result;
            _this.pagination = response.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ConnectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connections',
            template: __webpack_require__(/*! ./connections.component.html */ "./src/app/connections/connections.component.html"),
            styles: [__webpack_require__(/*! ./connections.component.css */ "./src/app/connections/connections.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('Access Denied: Login Required');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/prevent-unsaved-changes.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/guards/prevent-unsaved-changes.guard.ts ***!
  \*********************************************************/
/*! exports provided: PreventUnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChangesGuard", function() { return PreventUnsavedChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreventUnsavedChangesGuard = /** @class */ (function () {
    function PreventUnsavedChangesGuard() {
    }
    PreventUnsavedChangesGuard.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return window.confirm('Unsaved changes will be lost');
        }
        return true;
    };
    PreventUnsavedChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PreventUnsavedChangesGuard);
    return PreventUnsavedChangesGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div *ngIf=\"!registerMode\" style=\"text-align: center\">\r\n      <h1>Find your match</h1>\r\n      <p class=\"lead\">Sign up to view matches</p>\r\n      <hr class=\"my-4\">\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"enterRegisterMode()\">Register</button>\r\n        <button class=\"btn btn-info btn-lg\">About</button>\r\n      </div>\r\n    </div>\r\n  \r\n    <div *ngIf=\"registerMode\" class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-4\">\r\n          <app-register (cancelRegister)=\"exitRegisterMode()\"></app-register>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.registerMode = false;
    }
    HomeComponent.prototype.enterRegisterMode = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.exitRegisterMode = function () {
        this.registerMode = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches-card/matches-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/matches/matches-card/matches-card.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img {\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.8;\r\n}\r\n\r\n.card img {\r\n    -webkit-transform: scale(1.0, 1.0);\r\n            transform: scale(1.0, 1.0);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 1.0;\r\n}\r\n\r\n.card-img-wrapper {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0%;\r\n    right: 0%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons {\r\n    bottom: 0%;\r\n    opacity: 1;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLWNhcmQvbWF0Y2hlcy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9tYXRjaGVzL21hdGNoZXMtY2FyZC9tYXRjaGVzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIGltZyB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1lbWJlci1pY29ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXdyYXBwZXI6aG92ZXIgLm1lbWJlci1pY29ucyB7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmFuaW1hdGUge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/matches/matches-card/matches-card.component.html":
/*!******************************************************************!*\
  !*** ./src/app/matches/matches-card/matches-card.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <div class=\"card-img-wrapper\">\r\n    <img class=\"card-img-top\" src=\"{{user.photoUrl || '../../../assets/user.png'}}\">\r\n    <ul class=\"list-inline member-icons animate text-center\">\r\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/matches/', user.id]\"><i class=\"fa fa-user\"></i></button></li>\r\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" (click)=\"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button></li>\r\n      <li class=\"list-inline-item\"><button class=\"btn btn-primary\" [routerLink]=\"['/matches', user.id]\" [queryParams]=\"{tab : 3}\"><i class=\"fa fa-envelope\"></i></button></li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-body p-1\">\r\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-user\"></i>{{user.alias}}, {{user.age}}</h6>\r\n    <p class=\"card-text text-center text-muted\">{{user.city}}</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/matches/matches-card/matches-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/matches/matches-card/matches-card.component.ts ***!
  \****************************************************************/
/*! exports provided: MatchesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesCardComponent", function() { return MatchesCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");





var MatchesCardComponent = /** @class */ (function () {
    function MatchesCardComponent(authService, userService, altertify) {
        this.authService = authService;
        this.userService = userService;
        this.altertify = altertify;
    }
    MatchesCardComponent.prototype.sendLike = function (recipientId) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, recipientId).subscribe(function (data) {
            _this.altertify.success('Liked: ' + _this.user.alias);
        }, function (error) {
            _this.altertify.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatchesCardComponent.prototype, "user", void 0);
    MatchesCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matches-card',
            template: __webpack_require__(/*! ./matches-card.component.html */ "./src/app/matches/matches-card/matches-card.component.html"),
            styles: [__webpack_require__(/*! ./matches-card.component.css */ "./src/app/matches/matches-card/matches-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MatchesCardComponent);
    return MatchesCardComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches-details/matches-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/matches/matches-details/matches-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: white;\r\n    border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLWRldGFpbHMvbWF0Y2hlcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21hdGNoZXMvbWF0Y2hlcy1kZXRhaWxzL21hdGNoZXMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/matches/matches-details/matches-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/matches/matches-details/matches-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <div class=\"row\">\r\n    <h1>{{user.alias}}'s Profile</h1>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top img-thumbnail\" src=\"{{user.photoUrl || '../../../assets/user.png'}}\">\r\n        <div class=\"card-body\">\r\n          <div>\r\n            <strong>Location:</strong>\r\n            <p>{{user.city}}, {{user.country}}</p>\r\n          </div>\r\n          <div>\r\n              <strong>Age:</strong>\r\n              <p>{{user.age}}</p>\r\n          </div>\r\n          <div>\r\n              <strong>Last Active:</strong>\r\n              <p>{{user.lastActive | timeAgo}}</p>\r\n          </div>\r\n          <div>\r\n              <strong>Member since:</strong>\r\n              <p>{{user.created | date}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"btn-group d-flex\">\r\n            <button class=\"btn btn-primary w-100\">Like</button>\r\n            <button class=\"btn btn-info w-100\" (click)=\"selectTab(3)\">Message</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n        <tabset class=\"matches-tabset\" #matchesTabs>\r\n          <tab heading=\"About\">\r\n            <h4>Bio:</h4>\r\n            <p>{{user.bio}}</p>\r\n            <h4>Looking For:</h4>\r\n            <p>{{user.lookingFor}}</p>\r\n          </tab>\r\n          <tab heading=\"Hobbies\">\r\n              <h4>Hobbies:</h4>\r\n              <p>{{user.hobbies}}</p>\r\n          </tab>\r\n          <tab heading=\"Photos\">\r\n              <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n          </tab>\r\n          <tab heading=\"Message\">\r\n              <app-matches-messages [recipientId]=\"user.id\"></app-matches-messages>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/matches/matches-details/matches-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/matches/matches-details/matches-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: MatchesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesDetailsComponent", function() { return MatchesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");







var MatchesDetailsComponent = /** @class */ (function () {
    function MatchesDetailsComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MatchesDetailsComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getRoute();
        this.setupPhotos();
    };
    MatchesDetailsComponent.prototype.getUser = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
    };
    MatchesDetailsComponent.prototype.getRoute = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params['tab'];
            _this.matchesTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        });
    };
    MatchesDetailsComponent.prototype.setupPhotos = function () {
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getPhotos();
    };
    MatchesDetailsComponent.prototype.getPhotos = function () {
        var imageUrls = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                big: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
        }
        return imageUrls;
    };
    MatchesDetailsComponent.prototype.selectTab = function (tabId) {
        this.matchesTabs.tabs[tabId].active = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matchesTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"])
    ], MatchesDetailsComponent.prototype, "matchesTabs", void 0);
    MatchesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matches-details',
            template: __webpack_require__(/*! ./matches-details.component.html */ "./src/app/matches/matches-details/matches-details.component.html"),
            styles: [__webpack_require__(/*! ./matches-details.component.css */ "./src/app/matches/matches-details/matches-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MatchesDetailsComponent);
    return MatchesDetailsComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches-edit/matches-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/matches/matches-edit/matches-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: white;\r\n    border-top: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLWVkaXQvbWF0Y2hlcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21hdGNoZXMvbWF0Y2hlcy1lZGl0L21hdGNoZXMtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWwge1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/matches/matches-edit/matches-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/matches/matches-edit/matches-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <h1>My Profile</h1>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\r\n          <strong>Warning: </strong>Unsaved changes will be lost\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top img-thumbnail\" src=\"{{photoUrl}}\" alt=\"{{user.alias}}\">\r\n        <div class=\"card-body\">\r\n          <div>\r\n            <strong>Location:</strong>\r\n            <p>{{user.city}}, {{user.country}}</p>\r\n          </div>\r\n          <div>\r\n              <strong>Age:</strong>\r\n              <p>{{user.age}}</p>\r\n          </div>\r\n          <div>\r\n              <strong>Last Active:</strong>\r\n              <p>{{user.lastActive | timeAgo}}</p>\r\n          </div>\r\n          <div>\r\n              <strong>Member since:</strong>\r\n              <p>{{user.created | date}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n        <tabset class=\"matches-tabset\">\r\n          <tab heading=\"Edit Profile\">\r\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\r\n                <h4>Bio:</h4>\r\n                <textarea name=\"bio\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.bio\"></textarea>\r\n                <h4>Looking For:</h4>\r\n                <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.lookingFor\"></textarea>\r\n                <h4>Hobbies:</h4>\r\n                <textarea name=\"hobbies\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.hobbies\"></textarea>\r\n                <h4>Location Details:</h4>\r\n                <div class=\"form-inline\">\r\n                  <label for=\"city\">City</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"user.city\">\r\n                  <label for=\"city\">Country</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"user.country\">\r\n                </div>\r\n            </form>\r\n          </tab>\r\n          <tab heading=\"Edit Photos\">\r\n              <app-photo-editor [photos]=\"user.photos\" (getMatchesPhotoChange)=\"updateMainPhoto($event)\"></app-photo-editor>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/matches/matches-edit/matches-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/matches/matches-edit/matches-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: MatchesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesEditComponent", function() { return MatchesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var MatchesEditComponent = /** @class */ (function () {
    function MatchesEditComponent(route, altertify, userService, authService) {
        this.route = route;
        this.altertify = altertify;
        this.userService = userService;
        this.authService = authService;
    }
    MatchesEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MatchesEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.altertify.success('Profile Updated');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.altertify.error(error);
        });
    };
    MatchesEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    MatchesEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MatchesEditComponent.prototype, "editForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MatchesEditComponent.prototype, "unloadNotification", null);
    MatchesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matches-edit',
            template: __webpack_require__(/*! ./matches-edit.component.html */ "./src/app/matches/matches-edit/matches-edit.component.html"),
            styles: [__webpack_require__(/*! ./matches-edit.component.css */ "./src/app/matches/matches-edit/matches-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MatchesEditComponent);
    return MatchesEditComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches-list/matches-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/matches/matches-list/matches-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoZXMvbWF0Y2hlcy1saXN0L21hdGNoZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/matches/matches-list/matches-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/matches/matches-list/matches-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n  <h3>Matches: {{pagination.totalItems}}</h3>\r\n</div>\r\n\r\n<div class=\"container mt-3\">\r\n    <form class=\"form-inline justify-content-center\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label for=\"minAge\">Age From</label>\r\n          <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"minAge\" [(ngModel)]=\"userParams.minAge\" name=\"minAge\">\r\n        </div>\r\n        <div class=\"form-group px-2\">\r\n          <label for=\"maxAge\">Age To</label>\r\n          <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\" id=\"maxAge\" [(ngModel)]=\"userParams.maxAge\" name=\"maxAge\">\r\n        </div>\r\n        <div class=\"form-group px-2\">\r\n          <label for=\"gender\">Show: </label>\r\n          <select class=\"form-control ml-1\" style=\"width: 130px\" id=\"gender\"  [(ngModel)]=\"userParams.gender\" name=\"gender\">\r\n            <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">{{gender.display}}</option>\r\n          </select>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply</button>\r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"resetFilters()\" style=\"margin-left:10px\">Reset</button>\r\n        <div class=\"col\">\r\n          <div class=\"btn-group float-right\">\r\n            <button type=\"buton\" name=\"orderBy\" class=\"btn btn-primary\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"lastActive\">Last Active</button>\r\n            <button type=\"buton\" name=\"orderBy\" class=\"btn btn-primary\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"created\">Last Joined</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <br>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-matches-card [user]=\"user\"></app-matches-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\" [(ngModel)]=\"pagination.currentPage\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n\r\n</pagination>\r\n</div>"

/***/ }),

/***/ "./src/app/matches/matches-list/matches-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/matches/matches-list/matches-list.component.ts ***!
  \****************************************************************/
/*! exports provided: MatchesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesListComponent", function() { return MatchesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MatchesListComponent = /** @class */ (function () {
    function MatchesListComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.userGender = localStorage.getItem('userGender');
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = {};
    }
    MatchesListComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.userParams.gender = this.userGender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MatchesListComponent.prototype.getUsers = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
    };
    MatchesListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.userGender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    };
    MatchesListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MatchesListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (response) {
            _this.users = response.result;
            _this.pagination = response.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MatchesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matches-list',
            template: __webpack_require__(/*! ./matches-list.component.html */ "./src/app/matches/matches-list/matches-list.component.html"),
            styles: [__webpack_require__(/*! ./matches-list.component.css */ "./src/app/matches/matches-list/matches-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MatchesListComponent);
    return MatchesListComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches-messages/matches-messages.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/matches/matches-messages/matches-messages.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.card-body {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLW1lc3NhZ2VzL21hdGNoZXMtbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLW1lc3NhZ2VzL21hdGNoZXMtbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNoYXQge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jaGF0IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0IzQTlBOTtcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/matches/matches-messages/matches-messages.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/matches/matches-messages/matches-messages.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div *ngIf=\"messages?.length === 0\">\n      <p>No Messages</p>\n    </div>\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <div *ngIf=\"message.senderId == recipientId\">\n          <span class=\"chat-img float-left\">\n            <img class=\"rounded-circle\" src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderAlias}}\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderAlias}}</strong>\n              <small class=\"text-muted float-right\">\n                <span class=\"fa fa-clock-o\">{{message.dateSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n        <div *ngIf=\"message.senderId != recipientId\">\n            <span class=\"chat-img float-right\">\n              <img class=\"rounded-circle\" src=\"{{message.senderPhotoUrl}}\" alt=\"{{message.senderAlias}}\">\n            </span>\n            <div class=\"chat-body\">\n              <div class=\"header\">\n                  <small class=\"text-muted\">\n                      <span class=\"fa fa-clock-o\">{{message.dateSent | timeAgo}}</span>\n                      <span *ngIf=\"!message.isRead\" class=\"text-danger\">(unread)</span>\n                      <span *ngIf=\"message.isRead\" class=\"text-success\">(read {{message.dateRead | timeAgo}})</span>\n                    </small>\n                <strong class=\"primary-font float-right\">{{message.senderAlias}}</strong>\n\n              </div>\n              <p>{{message.content}}</p>\n            </div>\n          </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input [(ngModel)]=\"newMessage.content\" name=\"content\" required class=\"form-control input-sm\" type=\"text\" placeholder=\"Send message\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\" >Send</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/matches/matches-messages/matches-messages.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/matches/matches-messages/matches-messages.component.ts ***!
  \************************************************************************/
/*! exports provided: MatchesMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesMessagesComponent", function() { return MatchesMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var MatchesMessagesComponent = /** @class */ (function () {
    function MatchesMessagesComponent(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.newMessage = {};
    }
    MatchesMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MatchesMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var userId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (messages) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].isRead === false && messages[i].recipientId === userId) {
                    _this.userService.markMessageAsRead(userId, messages[i].id);
                }
            }
        })).subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MatchesMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.recipientId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MatchesMessagesComponent.prototype, "recipientId", void 0);
    MatchesMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matches-messages',
            template: __webpack_require__(/*! ./matches-messages.component.html */ "./src/app/matches/matches-messages/matches-messages.component.html"),
            styles: [__webpack_require__(/*! ./matches-messages.component.css */ "./src/app/matches/matches-messages/matches-messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MatchesMessagesComponent);
    return MatchesMessagesComponent;
}());



/***/ }),

/***/ "./src/app/matches/photo-editor/photo-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/matches/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.img-thumbnail {\r\n    max-width:100px;\r\n    max-height:100px;\r\n    width: auto;\r\n    height: auto;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over {\r\n    border: dotted 3px red;\r\n}\r\n\r\ninput[type=file] {\r\n    color: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hlcy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hlcy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuaW1nLXRodW1ibmFpbCB7XHJcbiAgICBtYXgtd2lkdGg6MTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5udi1maWxlLW92ZXIge1xyXG4gICAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/matches/photo-editor/photo-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/matches/photo-editor/photo-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\r\n    <img src=\"{{photo.url}}\" class=\"img-thumbnail p-1\">\r\n    <div class=\"text-center\">\r\n      <button type=\"button\" class=\"btn btn-sm mr-1\" (click)=\"setMainPhoto(photo)\" [ngClass]=\"photo.isMain ? 'btn-primary active' : 'btn-info'\" [disabled]=\"photo.isMain\">Main</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deletePhoto(photo.id)\" [disabled]=\"photo.isMain\"><i class=\"fa fa-trash-o\"></i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-3\">\r\n    <div class=\"col-md-3\">\r\n        <h3>Add Photos</h3>\r\n        <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"card bg-faded p-4 text-center mb-3 my-drop-zone\">\r\n          <i class=\"fa fa-upload fa-2x\"></i>\r\n          Drop Photos\r\n        </div>\r\n        Select Photos\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple/><br/>\r\n    </div>\r\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\r\n        <h3>Upload queue</h3>\r\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th width=\"50%\">Name</th>\r\n                <th>Size</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <div>\r\n            <div>\r\n                Queue progress:\r\n                <div class=\"progress mb-4\">\r\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                <span class=\"fa fa-upload\"></span> Upload\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                <span class=\"fa fa-ban\"></span> Cancel\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                <span class=\"fa fa-trash\"></span> Remove\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/matches/photo-editor/photo-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/matches/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");







var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.getMatchesPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.hasBaseDropZoneOver = false;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initUploader();
    };
    PhotoEditorComponent.prototype.initUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var result = JSON.parse(response);
                var photo = {
                    id: result.id,
                    url: result.url,
                    added: result.added,
                    description: result.description,
                    isMain: result.isMain
                };
                if (photo.isMain) {
                    _this.authService.updatePhoto(photo.url);
                    localStorage.setItem('userPhotoUrl', photo.url);
                    _this.alertify.success('Main Photo Set');
                }
                _this.photos.push(photo);
            }
        };
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function () {
            _this.currentMainPhoto = _this.photos.filter(function (p) { return p.isMain === true; })[0];
            _this.currentMainPhoto.isMain = false;
            photo.isMain = true;
            _this.authService.updatePhoto(photo.url);
            localStorage.setItem('userPhotoUrl', photo.url);
            _this.alertify.success('Main Photo Set');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm('Confirm Photo Deletion', function () {
            _this.userService.deletePhoto(_this.authService.decodedToken.nameid, id).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === id; }), 1);
                _this.alertify.success('Photo Deleted');
            }, function (error) {
                _this.alertify.error('Delete Photo Failure');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMatchesPhotoChange", void 0);
    PhotoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/matches/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/matches/photo-editor/photo-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    margin-top: 15px;\r\n}\r\n\r\n.img-circle {\r\n    max-height: 50px;\r\n}\r\n\r\ntd {\r\n    vertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uaW1nLWNpcmNsZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope\"></i> Unread\r\n      </button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope-open\"></i> Inbox\r\n      </button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-paper-plane\"></i> Outbox\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <hr class=\"my-4\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"messages.length == 0\">\r\n    <h3>No messages</h3>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\r\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\r\n      <tr>\r\n        <th style=\"width: 40%\">Message</th>\r\n        <th style=\"width: 20%\">From / To</th>\r\n        <th style=\"width: 20%\">Sent / Received</th>\r\n        <th style=\"width: 20%\"></th>\r\n      </tr>\r\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/matches', \r\n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab : 3}\">\r\n        <td>{{message.content}}</td>\r\n        <td>\r\n          <div *ngIf=\"messageContainer != 'Outbox'\">\r\n                <img src={{message?.senderPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\r\n                <strong>{{message.senderKnownAs}}</strong>\r\n          </div>\r\n          <div *ngIf=\"messageContainer == 'Outbox'\">\r\n                <img src={{message?.recipientPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\r\n                <strong>{{message.recipientKnownAs}}</strong>\r\n          </div>\r\n        </td>\r\n        <td>{{message.messageSent | timeAgo}}</td>\r\n        <td>\r\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\"\r\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\r\n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userService, authService, route, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.alertify = alertify;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (result) {
            _this.messages = result.result;
            _this.pagination = result.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure?', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid).subscribe(function () {
                _this.messages.splice(_this.messages.findIndex(function (m) { return m.id === id; }), 1);
                _this.alertify.success('Message deleted');
            }, function (error) {
                _this.alertify.error('Delete message fail');
            });
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/pagination.ts":
/*!**************************************!*\
  !*** ./src/app/models/pagination.ts ***!
  \**************************************/
/*! exports provided: PaginatedResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResults", function() { return PaginatedResults; });
var PaginatedResults = /** @class */ (function () {
    function PaginatedResults() {
    }
    return PaginatedResults;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display: inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi10b2dnbGUsIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Datting App</a>\r\n\r\n      <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/matches']\">Matches</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/connections']\">Connections</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/messages']\">Messages</a>\r\n        </li>\r\n      </ul>\r\n    \r\n      <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\r\n        <span class=\"mr-1\">\r\n          <img src=\"{{photoUrl || '../../assets/user.png'}}\">\r\n        </span>\r\n        <a class=\"dropdown-toggle text-light\" dropdownToggle>Welcome {{authService.decodedToken?.unique_name | titlecase}}</a>\r\n        <div class=\"dropdown-menu mt-3\" *dropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/matches/edit']\"><i class=\"fa fa-user mr-2\"></i>Edit Profile</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out mr-2\"></i>Logout</a>\r\n        </div>\r\n      </div>\r\n    \r\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"model.username\">\r\n        <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"model.password\">\r\n        <button [disabled]=\"!loginForm.valid\" class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Login</button>\r\n      </form>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Login Success');
            _this.loginForm.reset();
        }, function (error) {
            _this.loginForm.reset();
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/matches']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userPhotoUrl');
        localStorage.removeItem('userGender');
        this.authService.decodedToken = null;
        this.alertify.message('Logged Out');
        this.router.navigate(['/home']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], NavComponent.prototype, "loginForm", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\r\n  <hr>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"text\" [ngClass]=\"{'is-invalid': registerForm.get('username').errors && registerForm.get('username').touched}\"\r\n    class=\"form-control\" formControlName=\"username\" placeholder=\"Username\">\r\n    <div class=\"invalid-feedback\">Username required</div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" style=\"margin-right:12px\">Gender: </label>\r\n    <label class=\"radio-inline\">\r\n      <input class=\"mr-1\" type=\"radio\" value=\"male\" formControlName=\"gender\">Male\r\n    </label>\r\n    <label class=\"radio-inline ml-3\">\r\n      <input class=\"mr-1\" type=\"radio\" value=\"female\" formControlName=\"gender\">Female\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input [ngClass]=\"{'is-invalid': registerForm.get('dob').errors && registerForm.get('dob').touched}\" class=\"form-control\"\r\n      placeholder=\"Date of Birth\" formControlName=\"dob\" type=\"text\" bsDatepicker>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('dob').touched && registerForm.get('dob').hasError('required')\">Date of Birth required</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\" class=\"form-control\"\r\n      placeholder=\"City\" formControlName=\"city\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\" class=\"form-control\"\r\n      placeholder=\"Country\" formControlName=\"country\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is required</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"password\" [ngClass]=\"{'is-invalid': registerForm.get('password').errors && registerForm.get('password').touched}\"\r\n    class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">Password required</div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">Password must be at least 6 characters</div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">Password must not exceed 12 characters</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input type=\"password\" [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched || registerForm.hasError('mismatch') && registerForm.get('confirmPassword').touched}\"\r\n    class=\"form-control\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\">\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">Password required</div>\r\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.hasError('mismatch') && registerForm.get('confirmPassword').touched\">Passwords must match</div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-center\">\r\n    <button class=\"btn btn-primary mr-2\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\r\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, formBuilder, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: ['male'],
            dob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.resgister(this.user).subscribe(function () {
                _this.alertify.success('Registration Success');
                _this.registerForm.reset();
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/matches']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit();
        this.registerForm.reset();
    };
    RegisterComponent.prototype.passwordMatchValidator = function (formGroup) {
        return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/list.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/list.resolver.ts ***!
  \********************************************/
/*! exports provided: ListsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsResolver", function() { return ListsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, altertify) {
        this.userService = userService;
        this.router = router;
        this.altertify = altertify;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.likes = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.currentPage, this.itemsPerPage, null, this.likes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.altertify.error('Error: Could not retrieve data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    ListsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/matches-details.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/resolvers/matches-details.resolver.ts ***!
  \*******************************************************/
/*! exports provided: MatchesDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesDetailsResolver", function() { return MatchesDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MatchesDetailsResolver = /** @class */ (function () {
    function MatchesDetailsResolver(userService, router, altertify) {
        this.userService = userService;
        this.router = router;
        this.altertify = altertify;
    }
    MatchesDetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.altertify.error('Error: Could not retrieve data');
            _this.router.navigate(['/matches']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MatchesDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MatchesDetailsResolver);
    return MatchesDetailsResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/matches-edit.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/resolvers/matches-edit.resolver.ts ***!
  \****************************************************/
/*! exports provided: MatchesEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesEditResolver", function() { return MatchesEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");








var MatchesEditResolver = /** @class */ (function () {
    function MatchesEditResolver(userService, authService, router, altertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.altertify = altertify;
    }
    MatchesEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.altertify.error('Error: Could not retrieve data');
            _this.router.navigate(['/matches']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MatchesEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MatchesEditResolver);
    return MatchesEditResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/matches-list.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/resolvers/matches-list.resolver.ts ***!
  \****************************************************/
/*! exports provided: MatchesListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchesListResolver", function() { return MatchesListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MatchesListResolver = /** @class */ (function () {
    function MatchesListResolver(userService, router, altertify) {
        this.userService = userService;
        this.router = router;
        this.altertify = altertify;
        this.currentPage = 1;
        this.itemsPerPage = 10;
    }
    MatchesListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.currentPage, this.itemsPerPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.altertify.error('Error: Could not retrieve data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MatchesListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MatchesListResolver);
    return MatchesListResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/messages.resolver.ts":
/*!************************************************!*\
  !*** ./src/app/resolvers/messages.resolver.ts ***!
  \************************************************/
/*! exports provided: MessagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesResolver", function() { return MessagesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");








var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, authService, router, altertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.altertify = altertify;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.currentPage, this.itemsPerPage, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.altertify.error('Error: Could not retrieve messages');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MessagesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _connections_connections_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connections/connections.component */ "./src/app/connections/connections.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _matches_matches_list_matches_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matches/matches-list/matches-list.component */ "./src/app/matches/matches-list/matches-list.component.ts");
/* harmony import */ var _matches_matches_details_matches_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matches/matches-details/matches-details.component */ "./src/app/matches/matches-details/matches-details.component.ts");
/* harmony import */ var _resolvers_matches_details_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/matches-details.resolver */ "./src/app/resolvers/matches-details.resolver.ts");
/* harmony import */ var _resolvers_matches_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/matches-list.resolver */ "./src/app/resolvers/matches-list.resolver.ts");
/* harmony import */ var _matches_matches_edit_matches_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./matches/matches-edit/matches-edit.component */ "./src/app/matches/matches-edit/matches-edit.component.ts");
/* harmony import */ var _resolvers_matches_edit_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/matches-edit.resolver */ "./src/app/resolvers/matches-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/prevent-unsaved-changes.guard */ "./src/app/guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/list.resolver */ "./src/app/resolvers/list.resolver.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/messages.resolver */ "./src/app/resolvers/messages.resolver.ts");













var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', runGuardsAndResolvers: 'always', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], children: [
            { path: 'matches', component: _matches_matches_list_matches_list_component__WEBPACK_IMPORTED_MODULE_4__["MatchesListComponent"], resolve: { users: _resolvers_matches_list_resolver__WEBPACK_IMPORTED_MODULE_7__["MatchesListResolver"] } },
            { path: 'matches/edit', component: _matches_matches_edit_matches_edit_component__WEBPACK_IMPORTED_MODULE_8__["MatchesEditComponent"], resolve: { user: _resolvers_matches_edit_resolver__WEBPACK_IMPORTED_MODULE_9__["MatchesEditResolver"] },
                canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_10__["PreventUnsavedChangesGuard"]] },
            { path: 'matches/:id', component: _matches_matches_details_matches_details_component__WEBPACK_IMPORTED_MODULE_5__["MatchesDetailsComponent"], resolve: { user: _resolvers_matches_details_resolver__WEBPACK_IMPORTED_MODULE_6__["MatchesDetailsResolver"] } },
            { path: 'connections', component: _connections_connections_component__WEBPACK_IMPORTED_MODULE_1__["ConnectionsComponent"], resolve: { users: _resolvers_list_resolver__WEBPACK_IMPORTED_MODULE_11__["ListsResolver"] } },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"], resolve: { messages: _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_12__["MessagesResolver"] } }
        ] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('userPhotoUrl', user.userPhotoUrl);
                localStorage.setItem('userGender', user.userGender);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                _this.updatePhoto(user.userPhotoUrl);
            }
        }));
    };
    AuthService.prototype.resgister = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.updatePhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    for (var key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                }
                else if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/pagination */ "./src/app/models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function (currentPage, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResults"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        if (currentPage != null && itemsPerPage != null) {
            params = params.append('currentPage', currentPage);
            params = params.append('itemsPerPage', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        if (likesParam === 'Likers') {
            params = params.append('likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('likees', 'true');
        }
        return this.http.get(this.baseUrl + 'users', { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, photoId) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + photoId + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, photoId) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + photoId);
    };
    UserService.prototype.sendLike = function (senderId, recipientId) {
        return this.http.post(this.baseUrl + 'users/' + senderId + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, currentPage, itemsPerPage, messageConainter) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResults"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('MessageContainer', messageConainter);
        if (currentPage != null && itemsPerPage != null) {
            params = params.append('currentPage', currentPage);
            params = params.append('itemsPerPage', itemsPerPage);
        }
        return this.http.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') !== null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessageThread = function (senderId, recipientId) {
        return this.http.get(this.baseUrl + 'users/' + senderId + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
    };
    UserService.prototype.deleteMessage = function (userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    };
    UserService.prototype.markMessageAsRead = function (userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id + '/read/', {}).subscribe();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ctw00331\Documents\dating-app-aspnet-core-angular\DatingApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map