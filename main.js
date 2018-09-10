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
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_student_view_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/student-view/rules/rules.component */ "./src/app/views/student-view/rules/rules.component.ts");
/* harmony import */ var _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main-view/main-view.component */ "./src/app/views/main-view/main-view.component.ts");
/* harmony import */ var _views_student_view_question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/student-view/question/question.component */ "./src/app/views/student-view/question/question.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    // {
    //   path: "main", component: MainComponent,
    //   children: [
    //     {path: "dashboard", component: DashboardComponent},
    //     {
    //       path: "student-reg", component: StudentRegComponent,
    //       children: [
    //         {path: "student-details", component: StudentDetailsComponent},
    //         {path: "student-registrations", component: StudentRegistrationsComponent},
    //         {path: "semester-registrations", component: SemesterRegistrationComponent, canActivate: [LoginGuard]},
    //         {path: "semester-payments", component: SemesterPaymentsComponent},
    //         {path: "student-summary", component: StudentSummaryComponent},
    //       ]
    //     },
    //     {
    //       path: "lecturers-subjects", component: LecturerSubjectsRegistrationsComponent, canActivate: [LoginGuard],
    //       children: [
    //         {path: "lecturer-details", component: LecturerDetailsComponent},
    //         {path: "subject-details", component: SubjectsDetailsComponent},
    //       ]
    //     },
    //   ]
    // },
    { path: "main", component: _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_4__["MainViewComponent"] },
    { path: "rules", component: _views_student_view_rules_rules_component__WEBPACK_IMPORTED_MODULE_3__["RulesComponent"] },
    { path: "question", component: _views_student_view_question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"] },
    { path: "login", component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: "", pathMatch: "full", redirectTo: "/login" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
        this.title = 'app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/main-view/main-view.component */ "./src/app/views/main-view/main-view.component.ts");
/* harmony import */ var _views_student_view_rules_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/student-view/rules/rules.component */ "./src/app/views/student-view/rules/rules.component.ts");
/* harmony import */ var _views_student_view_question_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/student-view/question/question.component */ "./src/app/views/student-view/question/question.component.ts");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown-timer */ "./node_modules/ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _views_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_6__["MainViewComponent"],
                _views_student_view_rules_rules_component__WEBPACK_IMPORTED_MODULE_7__["RulesComponent"],
                _views_student_view_question_question_component__WEBPACK_IMPORTED_MODULE_8__["QuestionComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_9__["CountdownTimerModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dtos/user.ts":
/*!******************************!*\
  !*** ./src/app/dtos/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = "/api/v1/user";
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getLogin = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend_url + URL + "/authenticate", user);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/socket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/socket.service.ts ***!
  \*******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/stompjs */ "./node_modules/@stomp/stompjs/index.js");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dtos_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dtos/user */ "./src/app/dtos/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = "/api/v1/user";
var SocketService = /** @class */ (function () {
    function SocketService() {
        this.teamReg = new rxjs_index__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    SocketService.prototype.initSocket = function () {
        this.socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2___default.a(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend_url + "/phase1-web-socket");
        this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__["over"](this.socket);
        this.stompClient.debug = null;
        var that = this;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/out/onlineTeam', function (user) {
                if (JSON.parse(user.body).authenticate) {
                    var userDto = new _dtos_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
                    userDto.teamPosition = JSON.parse(user.body).teamPosition;
                    userDto.authenticate = true;
                    that.teamReg.next(userDto);
                }
            });
            that.stompClient.subscribe('/out/offlineTeam', function (user) {
                var userDto = new _dtos_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
                userDto.teamPosition = JSON.parse(user.body).teamPosition;
                userDto.authenticate = false;
                that.teamReg.next(userDto);
            });
        });
    };
    SocketService.prototype.startGame = function () {
        this.stompClient.send("/in/start");
    };
    SocketService.prototype.sendTeamPos = function (id) {
        this.stompClient.send("/in/onlineTeamId", {}, id);
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"off-canvas-sidebar\">\r\n  <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\r\n    <!--<nav class=\"navbar navbar-transparent navbar-absolute\" style=\"background-color: #FAFAFA\">-->\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n\r\n        <a class=\"navbar-brand\">Aurora</a>\r\n      </div>\r\n      <!--<div class=\"collapse navbar-collapse\">-->\r\n        <!--<ul class=\"nav navbar-nav navbar-right\">-->\r\n          <!--<li routerLinkActive=\"active\">-->\r\n            <!--<a routerLink=\"/main/dashboard\">-->\r\n              <!--<i class=\"material-icons\">dashboard</i>-->\r\n              <!--Dashboard-->\r\n            <!--</a>-->\r\n          <!--</li>-->\r\n        <!--</ul>-->\r\n      <!--</div>-->\r\n    </div>\r\n  </nav>\r\n  <div class=\"wrapper wrapper-full-page\">\r\n    <div class=\"full-page login-page\" filter-color=\"black\"\r\n         data-image=\"assets/img/dashboard/architecture-asphalt-berlin-417023.jpg\" style=\"background-size: cover;\">\r\n      <div class=\"content\">\r\n        <div class=\"container\">\r\n\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n              <form #frmLogin=\"ngForm\" action=\"\" method=\"post\" (ngSubmit)=\"getLogin()\">\r\n                <div class=\"card card-login card-hidden\" style=\"background-color: rgba(0,0,0,0.6);border: none\">\r\n                  <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                    <h4 class=\"card-title\">Login</h4>\r\n                    <div class=\"social-line\">\r\n                      <a href=\"https://www.google.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\r\n                        <i class=\"fa fa-google\"></i>\r\n                      </a>\r\n                      <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\r\n                        <i class=\"fa fa-youtube-play\"></i>\r\n                      </a>\r\n                      <a href=\"https://www.github.com/\" target=\"_blank\" class=\"btn btn-just-icon btn-simple\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <!--<p class=\"category text-center\">-->\r\n                  <!--Or Be Classical-->\r\n                  <!--</p>-->\r\n                  <div class=\"card-content\">\r\n\r\n                    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">\r\n          <i class=\"material-icons\">face</i>\r\n        </span>\r\n\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Team ID</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.teamId\" name=\"txtUserid\" style=\"color: white\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">\r\n          <i class=\"material-icons\">lock_outline</i>\r\n        </span>\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Password</label>\r\n                        <input type=\"{{passwordVisibility?'text':'password'}}\" class=\"form-control\" [(ngModel)]=\"user.teamPassword\" name=\"txtPassword\"\r\n                               style=\"color: white\">\r\n                      </div>\r\n                      <span class=\"input-group-addon\" style=\"cursor: pointer\" (click)=\"passwordVisible()\">\r\n          <i class=\"material-icons\">visibility</i>\r\n        </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"footer text-center\">\r\n                    <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" style=\"color: #e9b500\">\r\n                      Sign In\r\n                    </button>\r\n                  </div>\r\n                  <div *ngIf=\"failed\" class=\"alert alert-danger\"\r\n                       style=\"margin-left: 10px;margin-right: 10px;text-align: center;color: #870c00;font-weight: bold\">\r\n                    Incorrect username or password\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <footer class=\"footer\" style=\"padding: 0px\">\r\n        <div class=\"container\" style=\"margin-right: 0px\">\r\n          <p class=\"copyright pull-right\">\r\n            Copyright &copy; 2018 - University Of Sri Jayewardenapura / Department Of Computer Science\r\n          </p>\r\n        </div>\r\n      </footer>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dtos_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dtos/user */ "./src/app/dtos/user.ts");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/login/login.js */ "./src/assets/js/login/login.js");
/* harmony import */ var _assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_login_login_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/material-dashboard98f3.js */ "./src/assets/js/material-dashboard98f3.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/socket.service */ "./src/app/service/socket.service.ts");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/login.service */ "./src/app/service/login.service.ts");
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
    function LoginComponent(router, socketService, loginService) {
        this.router = router;
        this.socketService = socketService;
        this.loginService = loginService;
        this.user = new _dtos_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.loggedUser = new _dtos_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.failed = false;
        this.passwordVisibility = false;
        this.socketService.initSocket();
    }
    LoginComponent.prototype.ngOnInit = function () {
        loadMaterials();
        loadLogin();
    };
    LoginComponent.prototype.getLogin = function () {
        var _this = this;
        this.loginService.getLogin(this.user).subscribe(function (result) {
            _this.loggedUser = result;
            if (_this.loggedUser.authenticate == true) {
                _this.failed = false;
                localStorage.clear();
                localStorage.setItem("login", "logged");
                localStorage.setItem("teamId", _this.loggedUser.teamId);
                localStorage.setItem("teamPos", _this.loggedUser.teamPosition + '');
                _this.socketService.sendTeamPos(localStorage.getItem("teamPos"));
                _this.router.navigate(['/rules']);
            }
            else {
                _this.failed = true;
            }
        });
    };
    LoginComponent.prototype.passwordVisible = function () {
        if (this.passwordVisibility == false) {
            this.passwordVisibility = true;
        }
        else {
            this.passwordVisibility = false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _service_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/main-view/main-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/main-view/main-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main-view/main-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/main-view/main-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"background-color: #FAFAFA;margin-top: 0px;padding-top: 20px;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-12\" style=\"padding-bottom: 30px\">\r\n        <div class=\"card\">\r\n          <form class=\"form-horizontal\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"rose\">\r\n              <h4 class=\"card-title\" style=\"font-weight: lighter\">TEAMS ONLINE / CURRENT STATUS</h4>\r\n            </div>\r\n            <!-- /.card-header -->\r\n            <div class=\"card-content\" style=\"padding-left: 70px\">\r\n\r\n              <!--Ring nodes-->\r\n              <div class=\"row\">\r\n                <div class=\"col-12\"></div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\" style=\"padding-left: 0px;padding-top: 30px\">\r\n                  <div id=\"area\">\r\n                    <div id=\"circle1\">\r\n                      <div class=\"node\" id=\"node1-1\" style=\"top: -35px;left: 277px;\" [ngStyle]=\"{'background-color': circle1[0]&&status[0]? 'orange' : '#09a8f3'}\">1</div>\r\n                      <div class=\"node\" id=\"node1-2\" style=\"top: -16px;left: 380px;\" [ngStyle]=\"{'background-color': circle1[1]&&status[1]? 'orange' : '#09a8f3'}\">2</div>\r\n                      <div class=\"node\" id=\"node1-3\" style=\"top: 28px;left: 463px;\" [ngStyle]=\"{'background-color': circle1[2]&&status[2]? 'orange' : '#09a8f3'}\">3</div>\r\n                      <div class=\"node\" id=\"node1-4\" style=\"top: 94px;left: 525px;\" [ngStyle]=\"{'background-color': circle1[3]&&status[3]? 'orange' : '#09a8f3'}\">4</div>\r\n                      <div class=\"node\" id=\"node1-5\" style=\"top: 178px;left: 568px;\" [ngStyle]=\"{'background-color': circle1[4]&&status[4]? 'orange' : '#09a8f3'}\">5</div>\r\n                      <div class=\"node\" id=\"node1-6\" style=\"top: 275px;left: 585px;\" [ngStyle]=\"{'background-color': circle1[5]&&status[5]? 'orange' : '#09a8f3'}\">6</div>\r\n                      <div class=\"node\" id=\"node1-7\" style=\"top: 380px;left: 568px;\" [ngStyle]=\"{'background-color': circle1[6]&&status[6]? 'orange' : '#09a8f3'}\">7</div>\r\n                      <div class=\"node\" id=\"node1-8\" style=\"top: 458px;left: 525px;\" [ngStyle]=\"{'background-color': circle1[7]&&status[7]? 'orange' : '#09a8f3'}\">8</div>\r\n                      <div class=\"node\" id=\"node1-9\" style=\"top: 521px;left: 463px;\" [ngStyle]=\"{'background-color': circle1[8]&&status[8]? 'orange' : '#09a8f3'}\">9</div>\r\n                      <div class=\"node\" id=\"node1-10\" style=\"top: 567px;left: 380px;\" [ngStyle]=\"{'background-color': circle1[9]&&status[9]? 'orange' : '#09a8f3'}\">10</div>\r\n                      <div class=\"node\" id=\"node1-11\" style=\"top: 585px;left: 277px;\" [ngStyle]=\"{'background-color': circle1[10]&&status[10]? 'orange' : '#09a8f3'}\">11</div>\r\n                      <div class=\"node\" id=\"node1-12\" style=\"top: 567px;left: 168px;\" [ngStyle]=\"{'background-color': circle1[11]&&status[11]? 'orange' : '#09a8f3'}\">12</div>\r\n                      <div class=\"node\" id=\"node1-13\" style=\"top: 521px;left: 85px;\" [ngStyle]=\"{'background-color': circle1[12]&&status[12]? 'orange' : '#09a8f3'}\">13</div>\r\n                      <div class=\"node\" id=\"node1-14\" style=\"top: 453px;left: 20px;\" [ngStyle]=\"{'background-color': circle1[13]&&status[13]? 'orange' : '#09a8f3'}\">14</div>\r\n                      <div class=\"node\" id=\"node1-15\" style=\"top: 370px;left: -20px;\" [ngStyle]=\"{'background-color': circle1[14]&&status[14]? 'orange' : '#09a8f3'}\">15</div>\r\n                      <div class=\"node\" id=\"node1-16\" style=\"top: 275px;left: -35px;\" [ngStyle]=\"{'background-color': circle1[15]&&status[15]? 'orange' : '#09a8f3'}\">16</div>\r\n                      <div class=\"node\" id=\"node1-17\" style=\"top: 178px;left: -20px;\" [ngStyle]=\"{'background-color': circle1[16]&&status[16]? 'orange' : '#09a8f3'}\">17</div>\r\n                      <div class=\"node\" id=\"node1-18\" style=\"top: 96px;left: 20px;\" [ngStyle]=\"{'background-color': circle1[17]&&status[17]? 'orange' : '#09a8f3'}\">18</div>\r\n                      <div class=\"node\" id=\"node1-19\" style=\"top: 28px;left: 85px;\" [ngStyle]=\"{'background-color': circle1[18]&&status[18]? 'orange' : '#09a8f3'}\">19</div>\r\n                      <div class=\"node\" id=\"node1-20\" style=\"top: -16px;left: 168px;\" [ngStyle]=\"{'background-color': circle1[19]&&status[19]? 'orange' : '#09a8f3'}\">20</div>\r\n                    </div>\r\n                    <div id=\"circle2\">\r\n                      <div class=\"node\" id=\"node2-1\" style=\"top: -35px;left: 198px;\" [ngStyle]=\"{'background-color': circle2[0]&&status[0]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-2\" style=\"top: 15px;left: 340px;\" [ngStyle]=\"{'background-color': circle2[1]&&status[1]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-3\" style=\"top: 135px;left: 418px;\" [ngStyle]=\"{'background-color': circle2[2]&&status[2]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-4\" style=\"top: 275px;left: 410px;\" [ngStyle]=\"{'background-color': circle2[3]&&status[3]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-5\" style=\"top: 375px;left: 335px;\" [ngStyle]=\"{'background-color': circle2[4]&&status[4]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-6\" style=\"top: 425px;left: 198px;\" [ngStyle]=\"{'background-color': circle2[5]&&status[5]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-7\" style=\"top: 385px;left: 65px;\" [ngStyle]=\"{'background-color': circle2[6]&&status[6]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-8\" style=\"top: 275px;left: -20px;\" [ngStyle]=\"{'background-color': circle2[7]&&status[7]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-9\" style=\"top: 135px;left: -28px;\" [ngStyle]=\"{'background-color': circle2[8]&&status[8]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node2-10\" style=\"top: 15px;left: 50px;\" [ngStyle]=\"{'background-color': circle2[9]&&status[9]? 'orange' : '#09a8f3'}\"></div>\r\n                    </div>\r\n                    <div id=\"circle3\">\r\n                      <div class=\"node\" id=\"node3-1\" style=\"top: -35px;left: 115px;\" [ngStyle]=\"{'background-color': circle3[0]&&status[0]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-2\" style=\"top: 15px;left: 220px;\" [ngStyle]=\"{'background-color': circle3[1]&&status[1]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-3\" style=\"top: 110px;left: 255px;\" [ngStyle]=\"{'background-color': circle3[2]&&status[2]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-4\" style=\"top: 213px;left: 213px;\" [ngStyle]=\"{'background-color': circle3[3]&&status[3]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-5\" style=\"top: 255px;left: 115px;\" [ngStyle]=\"{'background-color': circle3[4]&&status[4]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-6\" style=\"top: 213px;left: 10px;\" [ngStyle]=\"{'background-color': circle3[5]&&status[5]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-7\" style=\"top: 110px;left: -35px;\" [ngStyle]=\"{'background-color': circle3[6]&&status[6]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node3-8\" style=\"top: 15px;left: 0px;\" [ngStyle]=\"{'background-color': circle3[7]&&status[7]? 'orange' : '#09a8f3'}\"></div>\r\n                    </div>\r\n                    <div id=\"circle4\">\r\n                      <div class=\"node\" id=\"node4-1\" style=\"top: -35px;left: 26px;\" [ngStyle]=\"{'background-color': circle4[0]&&status[0]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node4-2\" style=\"top: 25px;left: -35px;\" [ngStyle]=\"{'background-color': circle4[1]&&status[1]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node4-3\" style=\"top: 85px;left: 26px;\" [ngStyle]=\"{'background-color': circle4[2]&&status[2]? 'orange' : '#09a8f3'}\"></div>\r\n                      <div class=\"node\" id=\"node4-4\" style=\"top: 25px;left: 85px;\" [ngStyle]=\"{'background-color': circle4[3]&&status[3]? 'orange' : '#09a8f3'}\"></div>\r\n                    </div>\r\n                  </div>\r\n\r\n                    <!--Countdown Timer-->\r\n                    <div class=\"col-12\" style=\"width: 650px;margin-bottom: 50px;margin-top: 50px;background-color: orange;color: #836200;text-align: center;font-size: 30px;font-weight: bold;height: 50px;padding-top: 15px;border-radius: 10px\">\r\n                      <div><span id=\"time\">00h : 00m : 00s</span></div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!--Score board-->\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"row\" style=\"font-weight: 900;font-size: 17px;margin-top: 10px;margin-bottom: 60px\">\r\n\r\n                      <div class=\"row\" style=\"line-height: 35px;border-bottom: 1px black solid;font-size: 22px\">\r\n                        <div class=\"col-sm-2\" style=\"color:#666666;text-align:center;padding-left: 0px;padding-right: 0px\">-Team-</div>\r\n                        <div class=\"col-sm-2\" style=\"color:#666666;text-align:center;padding-left: 0px\">-Ring 1-</div>\r\n                        <div class=\"col-sm-2\" style=\"color:#666666;text-align:center;padding-left: 0px\">-Ring 2-</div>\r\n                        <div class=\"col-sm-2\" style=\"color:#666666;text-align:center;padding-left: 0px\">-Ring 3-</div>\r\n                        <div class=\"col-sm-2\" style=\"color:#666666;text-align:center;padding-left: 0px\">-Ring 4-</div>\r\n                        <div class=\"col-sm-2\" style=\"color:#666666;text-align:center;padding-left: 0px\">-Total-</div>\r\n                      </div>\r\n                      <div *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\r\n                        <div class=\"row\" style=\"line-height: 35px;border-bottom: 1px black solid\">\r\n                          <div class=\"col-sm-2\" style=\"text-align:center;padding-left: 0px;padding-right: 0px;margin-left: -10px;margin-right: 10px\" [ngStyle]=\"{'color': status[number-1]? '#034c8d' : '#8a8d86'}\"><i class=\"fa fa-circle\" style=\"padding-right: 10px\" [ngStyle]=\"{'color': status[number-1]? '#034c8d' : '#fcfff5'}\"></i>Team {{number}}</div>\r\n                          <div class=\"col-sm-2\" style=\"text-align:center;padding-left: 0px\" [ngStyle]=\"{'color': status[number-1]? '#ea9300' : '#8a8d86'}\">0</div>\r\n                          <div class=\"col-sm-2\" style=\"text-align:center;padding-left: 0px\" [ngStyle]=\"{'color': status[number-1]? '#ea9300' : '#8a8d86'}\">0</div>\r\n                          <div class=\"col-sm-2\" style=\"text-align:center;padding-left: 0px\" [ngStyle]=\"{'color': status[number-1]? '#ea9300' : '#8a8d86'}\">0</div>\r\n                          <div class=\"col-sm-2\" style=\"text-align:center;padding-left: 0px\" [ngStyle]=\"{'color': status[number-1]? '#ea9300' : '#8a8d86'}\">0</div>\r\n                          <div class=\"col-sm-2\" style=\"text-align:center;padding-left: 0px\" [ngStyle]=\"{'color': status[number-1]? '#ea9300' : '#8a8d86'}\">0</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"readyStatus()&&!started\" style=\"text-align: center;font-size: 20px;font-weight: normal\">All teams are ready to start</div>\r\n                    <div *ngIf=\"!readyStatus()&&!started\" style=\"text-align: center;font-size: 20px;font-weight: normal\">All teams are <strong>not</strong> ready to start</div>\r\n                    <button type=\"button\" style=\"left: 50%;transform: translateX(-50%);margin-top: 10px\" class=\"btn btn-fill\" (click)=\"startGame()\">{{btnText}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer\" style=\"background-color: white;border-top: 1px solid #e7e7e7\">\r\n    <div class=\"container-fluid\">\r\n      <p class=\"copyright pull-right\">\r\n        Copyright &copy; 2018 - University Of Sri Jayewardenapura / Department Of Computer Science\r\n      </p>\r\n    </div>\r\n  </footer>\r\n</div>\r\n<style>\r\n  #area {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    position: relative;\r\n    /*width: 326px;*/\r\n    height: 650px;\r\n  }\r\n\r\n  #circle1, #circle2, #circle3, #circle4, .node {\r\n    position: absolute;\r\n    -moz-border-radius: 100%;\r\n    -webkit-border-radius: 100%;\r\n    border-radius: 100%;\r\n    background: transparent;\r\n  }\r\n\r\n  #circle1 {\r\n    border: 30px solid #1b1178;\r\n    width: 650px;\r\n    height: 650px;\r\n  }\r\n\r\n  #circle2 {\r\n    border: 30px solid #1b1178;\r\n    width: 490px;\r\n    height: 490px;\r\n    top: 80px;\r\n    left: 80px;\r\n  }\r\n\r\n  #circle3 {\r\n    border: 30px solid #1b1178;\r\n    width: 320px;\r\n    height: 320px;\r\n    top: 163px;\r\n    left: 163px;\r\n  }\r\n\r\n  #circle4 {\r\n    border: 30px solid #1b1178;\r\n    width: 150px;\r\n    height: 150px;\r\n    top: 248px;\r\n    left: 248px;\r\n  }\r\n\r\n  .node {\r\n    width: 40px;\r\n    height: 40px;\r\n    /*background: #949790;*/\r\n    -moz-border-radius: 50px;\r\n    -webkit-border-radius: 50px;\r\n    border-radius: 50px;\r\n    z-index: 1;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    padding-top: 9px;\r\n    text-align: center;\r\n    /*padding-left: 5px;*/\r\n    /*border: 20px solid #949790;*/\r\n    /*width: 20px;*/\r\n    /*height: 20px;*/\r\n\r\n  }\r\n</style>\r\n\r\n<script>\r\n\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/views/main-view/main-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/main-view/main-view.component.ts ***!
  \********************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_countdown_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/js/countdown_timer.js */ "./src/assets/js/countdown_timer.js");
/* harmony import */ var _assets_js_countdown_timer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_countdown_timer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/socket.service */ "./src/app/service/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(socketService) {
        var _this = this;
        this.socketService = socketService;
        this.status = new Array();
        this.circle1 = new Array();
        this.circle2 = new Array();
        this.circle3 = new Array();
        this.circle4 = new Array();
        this.btnText = 'Start';
        this.started = false;
        this.socketService.initSocket();
        socketService.teamReg.subscribe(function (value) {
            if (value.authenticate) {
                _this.status[value.teamPosition - 1] = true;
            }
            else {
                _this.status[value.teamPosition - 1] = false;
            }
        });
    }
    MainViewComponent.prototype.ngOnInit = function () {
        // startCountdownTimer();
        for (var i = 0; i < 20; i++) {
            this.status.push(false);
            this.circle1.push(false);
        }
        for (var i = 0; i < 10; i++) {
            this.circle2.push(false);
        }
        for (var i = 0; i < 8; i++) {
            this.circle3.push(false);
        }
        for (var i = 0; i < 4; i++) {
            this.circle4.push(false);
        }
    };
    MainViewComponent.prototype.readyStatus = function () {
        for (var i = 0; i < 20; i++) {
            if (this.status[i] == false) {
                return false;
            }
        }
        return true;
    };
    MainViewComponent.prototype.startGame = function () {
        startCountdownTimer();
        this.started = true;
        for (var i = 0; i < 20; i++) {
            // this.status[i] = true;
            this.circle1[i] = true;
        }
        this.btnText = 'Restart';
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/views/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/views/main-view/main-view.component.css")]
        }),
        __metadata("design:paramtypes", [_service_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/views/student-view/question/question.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/student-view/question/question.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-view/question/question.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/student-view/question/question.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"background-color: #FAFAFA;margin-top: 0px;padding-top: 50px\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-12\" style=\"padding-bottom: 30px\">\n        <div class=\"card\">\n          <form class=\"form-horizontal\">\n            <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n              <h4 class=\"card-title\" style=\"font-weight: lighter\">RING-1 / QUESTION-1</h4>\n            </div>\n            <!-- /.card-header -->\n            <div class=\"card-content\" style=\"padding-left: 70px\">\n              <div class=\"row\" style=\"margin-bottom: 50px\">\n              <!--Countdown Timer-->\n              <div class=\"col-sm-12\" style=\"width: 650px;left: 50%;transform: translateX(-50%);background-color: orange;color: #836200;text-align: center;font-size: 30px;font-weight: bold;height: 50px;padding-top: 15px;border-radius: 10px\">\n                <div><span id=\"time\">00h : 00m : 00s</span></div>\n              </div>\n              </div>\n              <div class=\"row\" style=\"font-weight: 600;font-size: 20px;padding-left: 15px;color: #034c8d\">\n                <!--<div class=\"col-12\"></div>-->\n                <div class=\"col-sm-1\" style=\"padding-right: 0px;width: 60px;color: #E9B500\"><i class=\"fa fa-circle\"></i></div>\n                <div class=\"col-sm-11\" style=\"padding-left: 0px\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aspernatur delectus dignissimos dolorem est et itaque laudantium maiores molestias nihil officia omnis possimus provident quas, reprehenderit sed suscipit tempore.?</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"card-content\" style=\"padding-left: 70px\">\n                <form class=\"form-horizontal\" (ngSubmit)=\"saveStudent(frmStudent)\" #frmStudent=\"ngForm\" action=\"\" method=\"post\">\n                  <div class=\"row\">\n                <div class=\"col-sm-10 checkbox-radios\">\n                  <div class=\"radio\" style=\"font-size: 20px\">\n                  <label style=\"color: #034c8d;font-weight: 500;padding-left: 40px;\">\n                    <input type=\"radio\" ng-control=\"options\" name=\"optionsRadios\"\n                           value=\"Male\" (click)=\"setGender(1)\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias distinctio ducimus et fuga, harum quas quidem .\n                  </label>\n                </div>\n                  <div class=\"radio\">\n                    <label style=\"color: #034c8d;font-weight: 500;padding-left: 40px;\">\n                      <input type=\"radio\" ng-control=\"options\" name=\"optionsRadios\"\n                             value=\"Female\" (click)=\"setGender(2)\">\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut ea earum fugiat impedit, inventore ipsum !\n                    </label>\n                  </div>\n                  <div class=\"radio\" style=\"font-size: 20px\">\n                    <label style=\"color: #034c8d;font-weight: 500;padding-left: 40px;\">\n                      <input type=\"radio\" ng-control=\"options\" name=\"optionsRadios\"\n                             value=\"Male\" (click)=\"setGender(3)\">\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque cupiditate, eos error esse facilis,\n                    </label>\n                  </div>\n                  <div class=\"radio\">\n                    <label style=\"color: #034c8d;font-weight: 500;padding-left: 40px;\">\n                      <input type=\"radio\" ng-control=\"options\" name=\"optionsRadios\"\n                             value=\"Female\" (click)=\"setGender(4)\">\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio ducimus maxime, nam nemo nobis\n                    </label>\n                  </div>\n                </div>\n                  </div>\n                  <div class=\"row\" style=\"margin-top: 50px;text-align: center;font-weight: bold;font-size: 20px;line-height: 50px\">\n                    <!--<div class=\"col-sm-12\" style=\"border-radius: 10px;background-color: #ff2e2d;color: #7a0000\">Incorrect Answer</div>-->\n                    <!--<div class=\"col-sm-12\" style=\"border-radius: 10px;background-color: #2c802b;color: #004b00\">Correct Answer</div>-->\n                  </div>\n                  <button type=\"button\" style=\"left: 50%;transform: translateX(-50%);margin-top: 80px\" class=\"btn btn-fill\" (click)=\"startGame()\">Confirm</button>\n                </form>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\" style=\"background-color: white;border-top: 1px solid #e7e7e7\">\n    <div class=\"container-fluid\">\n      <p class=\"copyright pull-right\">\n        Copyright &copy; 2018 - University Of Sri Jayewardenapura / Department Of Computer Science\n      </p>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-view/question/question.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/student-view/question/question.component.ts ***!
  \*******************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_countdown_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/countdown_timer.js */ "./src/assets/js/countdown_timer.js");
/* harmony import */ var _assets_js_countdown_timer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_countdown_timer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/js/material-dashboard98f3.js */ "./src/assets/js/material-dashboard98f3.js");
/* harmony import */ var _assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_material_dashboard98f3_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
        loadMaterials();
        startCountdownTimer();
    };
    /*Set gender radio options*/
    QuestionComponent.prototype.setGender = function (value) {
        // this.student.gender = value;
        // this.saveToLocalStorage();
    };
    /*Save student*/
    QuestionComponent.prototype.saveStudent = function (f) {
        // if (this.checkInputs(f)) {
        //   if (this.loginStatus() == 1) {
        //
        //   } else {
        //     this.nextPage();
        //   }
        // }
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/views/student-view/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/views/student-view/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/views/student-view/rules/rules.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/student-view/rules/rules.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/student-view/rules/rules.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/student-view/rules/rules.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"background-color: #FAFAFA;margin-top: 0px;padding-top: 50px;height:100vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12 col-12\" style=\"padding-bottom: 30px\">\n        <div class=\"card\">\n          <form class=\"form-horizontal\">\n            <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n              <h4 class=\"card-title\" style=\"font-weight: lighter\">RULES AND REGULATIONS</h4>\n            </div>\n            <!-- /.card-header -->\n            <div class=\"card-content\">\n              <div class=\"row\" style=\"height: 40px\"></div>\n              <div class=\"row\" style=\"font-weight: bold;font-size: 16px;padding-left: 15px\">\n                <div class=\"col-12\"></div>\n                <div class=\"col-12\">\n                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae, cupiditate eaque ex\n                    pariatur perferendis praesentium tempore. Adipisci deserunt est, fugiat ipsam iste iusto\n                    necessitatibus quia voluptate. Sint soluta, sunt.\n                  </div>\n                  <div>Ab accusamus, alias animi at cum dignissimos ducimus eligendi esse facilis fugit iusto labore,\n                    laborum nam natus nisi odio quaerat quam qui rerum sed sit soluta vero. Fugit illo, minus?\n                  </div>\n                  <div>Accusamus accusantium aliquid, architecto, beatae eaque error eveniet facilis, fuga laboriosam\n                    obcaecati odio perspiciatis recusandae saepe tenetur voluptas! Corporis eos ex illum laboriosam modi\n                    nemo quaerat recusandae repudiandae sit sunt?\n                  </div>\n                  <div>Atque deserunt doloremque earum fuga, perspiciatis ullam! Animi asperiores deleniti distinctio\n                    dolorem eveniet, excepturi exercitationem expedita facilis harum incidunt, iure maiores molestias\n                    placeat quae recusandae sapiente sunt temporibus ut? Ullam.\n                  </div>\n                  <div>Amet est iusto laudantium rerum voluptate. Adipisci aperiam cum dolores ducimus error esse\n                    facilis mollitia nam nihil nulla odio perferendis placeat praesentium quaerat rerum tempora,\n                    voluptate. Cumque earum numquam recusandae?\n                  </div>\n                  <div>Accusantium amet architecto consectetur debitis dolor dolorem enim est exercitationem illo ipsum\n                    laudantium, magni modi natus omnis provident, repellendus velit. Ab aliquid atque dolores eligendi\n                    libero nulla unde vitae voluptates.\n                  </div>\n                  <div>Culpa minus molestias neque nobis odit. Assumenda, ducimus eos est id in iusto labore libero, non\n                    optio quam quas reiciendis sint totam veniam voluptatem. Adipisci at nam officiis temporibus velit.\n                  </div>\n                  <div>Aliquam et eveniet odio qui tenetur vel vitae! Aliquam, atque consequuntur deserunt et iusto\n                    magni unde! Aliquam, eaque eius fugiat laborum natus odio perspiciatis quae, quasi quo recusandae\n                    sunt vitae?\n                  </div>\n                  <div>Accusamus, atque culpa eligendi expedita facilis illum inventore, ipsam laborum maxime natus\n                    perspiciatis quae quos sit, soluta suscipit temporibus veritatis. Eaque iure iusto nisi obcaecati\n                    tenetur totam veritatis, voluptatem voluptatibus.\n                  </div>\n                  <div>A ab atque blanditiis consequatur cupiditate eos eveniet, facere fugit hic in iure iusto labore\n                    laudantium maxime mollitia, necessitatibus provident quam quidem quos reiciendis temporibus tenetur\n                    vero voluptate voluptatem voluptatum?\n                  </div></div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/student-view/rules/rules.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/student-view/rules/rules.component.ts ***!
  \*************************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
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

var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/views/student-view/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/views/student-view/rules/rules.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/assets/js/countdown_timer.js":
/*!******************************************!*\
  !*** ./src/assets/js/countdown_timer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime, display) {
  var hoursSpan;
  var minutesSpan;
  var secondsSpan;

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan = ('0' + t.hours).slice(-2);
    minutesSpan = ('0' + t.minutes).slice(-2);
    secondsSpan = ('0' + t.seconds).slice(-2);
    display.textContent = hoursSpan + "h : " + minutesSpan + "m : " + secondsSpan+"s";

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline;

function startCountdownTimer() {
  deadline = new Date(Date.parse(new Date()) + 1 * 5 * 60 * 1000);
  initializeClock('time', deadline, document.querySelector('#time'));
};


/***/ }),

/***/ "./src/assets/js/login/login.js":
/*!**************************************!*\
  !*** ./src/assets/js/login/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function loadLogin() {
  $().ready(function(){
    demo.checkFullPageBackgroundImage();

    setTimeout(function(){
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700)
  });
}


/***/ }),

/***/ "./src/assets/js/material-dashboard98f3.js":
/*!*************************************************!*\
  !*** ./src/assets/js/material-dashboard98f3.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! =========================================================
 *
 * Material Dashboard PRO - V1.3.0
 *
 * =========================================================
 *
 * Copyright 2016 Creative Tim (http://www.creative-tim.com/product/material-dashboard-pro)
 *
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \|     |// '.
 *                 / \|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */
function loadMaterials() {
  (function () {
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
  // && !$('body').hasClass('sidebar-mini')
  //   if (isWindows ) {
  //     // if we are on windows OS we activate the perfectScrollbar function
  //     $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
  //
  //     $('html').addClass('perfect-scrollbar-on');
  //   } else {
  //     $('html').addClass('perfect-scrollbar-off');
  //   }
  })();

  var breakCards = true;

  var searchVisible = 0;
  var transparent = true;

  var transparentDemo = true;
  var fixedTop = false;

  var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false;

  var seq = 0, delays = 80, durations = 500;
  var seq2 = 0, delays2 = 80, durations2 = 500;


  $(document).ready(function () {

    $sidebar = $('.sidebar');

    $.material.init();

    md.initSidebarsCheck();

    if ($('body').hasClass('sidebar-mini')) {
      md.misc.sidebar_mini_active = true;
    }

    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    md.checkSidebarImage();

    md.initMinimizeSidebar();
    $('body').addClass('sidebar-mini');
    md.misc.sidebar_mini_active = true;

    //    Activate bootstrap-select
    if ($(".selectpicker").length != 0) {
      $(".selectpicker").selectpicker();
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    //removed class label and label-color from tag span and replaced with data-color
    var tagClass = $('.tagsinput').data('color');

    $('.tagsinput').tagsinput({
      tagClass: ' tag-' + tagClass + ' '
    });

    //    Activate bootstrap-select
    $(".select").dropdown({"dropdownClass": "dropdown-menu", "optionClass": ""});

    $('.form-control').on("focus", function () {
      $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function () {
      $(this).parent(".input-group").removeClass("input-group-focus");
    });


    if (breakCards == true) {
      // We break the cards headers if there is too much stress on them :-)
      $('[data-header-animation="true"]').each(function () {
        var $fix_button = $(this)
        var $card = $(this).parent('.card');

        $card.find('.fix-broken-card').click(function () {
          console.log(this);
          var $header = $(this).parent().parent().siblings('.card-header, .card-image');

          $header.removeClass('hinge').addClass('fadeInDown');

          $card.attr('data-count', 0);

          setTimeout(function () {
            $header.removeClass('fadeInDown animate');
          }, 480);
        });

        $card.mouseenter(function () {
          var $this = $(this);
          hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
          $this.attr("data-count", hover_count);

          if (hover_count >= 20) {
            $(this).children('.card-header, .card-image').addClass('hinge animated');
          }
        });
      });
    }

    // remove class has-error for checkbox validation
    $('input[type="checkbox"][required="true"], input[type="radio"][required="true"]').on('click', function () {
      if ($(this).hasClass('error')) {
        $(this).closest('div').removeClass('has-error');
      }
    });

  });

  $(document).on('click', '.navbar-toggle', function () {
    $toggle = $(this);

    if (mobile_menu_visible == 1) {
      $('html').removeClass('nav-open');

      $('.close-layer').remove();
      setTimeout(function () {
        $toggle.removeClass('toggled');
      }, 400);

      mobile_menu_visible = 0;
    } else {
      setTimeout(function () {
        $toggle.addClass('toggled');
      }, 430);

      var $layer = $('<div class="close-layer"></div>');

      if ($('body').find('.main-panel').length != 0 && $('body').find('.close-layer').length == 0) {
        $layer.appendTo(".main-panel");

      } else if (($('body').hasClass('off-canvas-sidebar'))) {
        $layer.appendTo(".wrapper-full-page");
      }

      setTimeout(function () {
        $layer.addClass('visible');
      }, 100);

      $layer.click(function () {
        $('html').removeClass('nav-open');
        mobile_menu_visible = 0;

        $layer.removeClass('visible');

        setTimeout(function () {
          $layer.remove();
          $toggle.removeClass('toggled');

        }, 400);
      });

      $('html').addClass('nav-open');
      mobile_menu_visible = 1;

    }

  });

// activate collapse right menu when the windows is resized
  $(window).resize(function () {
    md.initSidebarsCheck();
  });

  md = {
    misc: {
      navbar_menu_visible: 0,
      active_collapse: true,
      disabled_collapse_init: 0,
    },

    checkSidebarImage: function () {
      $sidebar = $('.sidebar');
      image_src = $sidebar.data('image');

      if (image_src !== undefined) {
        sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
        $sidebar.append(sidebar_container);
      }
    },

    initSliders: function () {
      // Sliders for demo purpose in refine cards section
      var slider = document.getElementById('sliderRegular');

      noUiSlider.create(slider, {
        start: 40,
        connect: [true, false],
        range: {
          min: 0,
          max: 100
        }
      });

      var slider2 = document.getElementById('sliderDouble');

      noUiSlider.create(slider2, {
        start: [20, 60],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });
    },

    initSidebarsCheck: function () {
      if ($(window).width() <= 991) {
        if ($sidebar.length != 0) {
          md.initRightMenu();
        }
      }
    },

    initMinimizeSidebar: function () {

      $('#minimizeSidebar').click(function () {
        var $btn = $(this);

        if (md.misc.sidebar_mini_active == true) {
          $('body').removeClass('sidebar-mini');
          md.misc.sidebar_mini_active = false;
        } else {
          $('body').addClass('sidebar-mini');
          md.misc.sidebar_mini_active = true;
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
          window.dispatchEvent(new Event('resize'));
        }, 180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
          clearInterval(simulateWindowResize);
        }, 1000);
      });
    },

    checkScrollForTransparentNavbar: debounce(function () {
      if ($(document).scrollTop() > 260) {
        if (transparent) {
          transparent = false;
          $('.navbar-color-on-scroll').removeClass('navbar-transparent');
        }
      } else {
        if (!transparent) {
          transparent = true;
          $('.navbar-color-on-scroll').addClass('navbar-transparent');
        }
      }
    }, 17),


    initRightMenu: debounce(function () {
      $sidebar_wrapper = $('.sidebar-wrapper');

      if (!mobile_menu_initialized) {
        $navbar = $('nav').find('.navbar-collapse').children('.navbar-nav.navbar-right');

        mobile_menu_content = '';

        nav_content = $navbar.html();

        // nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

        // navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

        $sidebar_nav = $sidebar_wrapper.find(' > .nav');

        // insert the navbar form before the sidebar list
        $nav_content = $(nav_content);
        // $navbar_form = $(navbar_form);
        $nav_content.insertBefore($sidebar_nav);
        // $navbar_form.insertBefore($nav_content);

        $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function (event) {
          event.stopPropagation();

        });

        // simulate resize so all the charts/maps will be redrawn
        window.dispatchEvent(new Event('resize'));

        mobile_menu_initialized = true;
      } else {
        if ($(window).width() > 991) {
          // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
          $sidebar_wrapper.find('.navbar-form').remove();
          $sidebar_wrapper.find('.nav-mobile-menu').remove();

          mobile_menu_initialized = false;
        }
      }
    }, 200),


    // initBootstrapNavbarMenu: debounce(function(){
    //
    //     if(!bootstrap_nav_initialized){
    //         $navbar = $('nav').find('.navbar-collapse').first().clone(true);
    //
    //         nav_content = '';
    //         mobile_menu_content = '';
    //
    //         //add the content from the regular header to the mobile menu
    //         $navbar.children('ul').each(function(){
    //             content_buff = $(this).html();
    //             nav_content = nav_content + content_buff;
    //         });
    //
    //         nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';
    //
    //         $navbar.html(nav_content);
    //         $navbar.addClass('off-canvas-sidebar');
    //
    //         // append it to the body, so it will come from the right side of the screen
    //         $('body').append($navbar);
    //
    //         $toggle = $('.navbar-toggle');
    //
    //         $navbar.find('a').removeClass('btn btn-round btn-default');
    //         $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
    //         $navbar.find('button').addClass('btn-simple btn-block');
    //
    //         bootstrap_nav_initialized = true;
    //     }
    // }, 500),

    startAnimationForLineChart: function (chart) {

      chart.on('draw', function (data) {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
          seq++;
          data.element.animate({
            opacity: {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
        }
      });

      seq = 0;
    },
    startAnimationForBarChart: function (chart) {

      chart.on('draw', function (data) {
        if (data.type === 'bar') {
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
        }
      });

      seq2 = 0;
    }
  }


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  };


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-46172202-1']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
}


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
    production: false,
    // backend_url: 'http://localhost:8080'
    backend_url: 'http://imalkag.ddns.net:8080'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! E:\class\Angular Web\Phase1\Phase1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map