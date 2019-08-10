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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/presentation/presentation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    //   { path: 'skill', component: SkillsComponent },
    { path: '', component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_2__["PresentationComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n<!-- <app-header></app-header> -->\n<router-outlet></router-outlet>\n\n\n<!-- <app-skills></app-skills> -->\n<!-- <app-workexperence></app-workexperence> -->\n<!-- <app-education></app-education>\n<app-favoritephrases></app-favoritephrases>\n<app-footer></app-footer> -->\n"

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
        this.title = 'zonaDesarrollo';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _comp_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comp/header/header.component */ "./src/app/comp/header/header.component.ts");
/* harmony import */ var _comp_activity_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/activity/activity.component */ "./src/app/comp/activity/activity.component.ts");
/* harmony import */ var _comp_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp/specialities/specialities.component */ "./src/app/comp/specialities/specialities.component.ts");
/* harmony import */ var _comp_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/skills/skills.component */ "./src/app/comp/skills/skills.component.ts");
/* harmony import */ var _comp_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp/education/education.component */ "./src/app/comp/education/education.component.ts");
/* harmony import */ var _comp_workexperence_workexperence_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp/workexperence/workexperence.component */ "./src/app/comp/workexperence/workexperence.component.ts");
/* harmony import */ var _comp_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp/footer/footer.component */ "./src/app/comp/footer/footer.component.ts");
/* harmony import */ var _comp_favoritephrases_favoritephrases_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp/favoritephrases/favoritephrases.component */ "./src/app/comp/favoritephrases/favoritephrases.component.ts");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/presentation/presentation.component.ts");
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
                _comp_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _comp_activity_activity_component__WEBPACK_IMPORTED_MODULE_5__["ActivityComponent"],
                _comp_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_6__["SpecialitiesComponent"],
                _comp_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                _comp_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _comp_workexperence_workexperence_component__WEBPACK_IMPORTED_MODULE_9__["WorkexperenceComponent"],
                _comp_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _comp_favoritephrases_favoritephrases_component__WEBPACK_IMPORTED_MODULE_11__["FavoritephrasesComponent"],
                _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__["PresentationComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comp/activity/activity.component.html":
/*!*******************************************************!*\
  !*** ./src/app/comp/activity/activity.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  activity works!\n</p>\n"

/***/ }),

/***/ "./src/app/comp/activity/activity.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/comp/activity/activity.component.ts ***!
  \*****************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
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

var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/comp/activity/activity.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/comp/education/education.component.html":
/*!*********************************************************!*\
  !*** ./src/app/comp/education/education.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-education section-wrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"section-title\"><h2>Education</h2></div>\n            </div>\n\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <!-- <div class=\"content-item\">\n                            <small>2010 - 2012</small>\n                            <h3>MA Product Design</h3>\n                            <h4>University of California</h4>\n\n                            <p>United Kingdom, London</p>\n                        </div> -->\n                        <!-- .experience-item -->\n                        <!-- <div class=\"content-item\">\n                            <small>2007 - 2010</small>\n                            <h3>Business marketing course</h3>\n                            <h4>Royal Academy of Business</h4>\n\n                            <p>United Kingdom, London</p>\n                        </div> -->\n\n                        <div class=\"content-item\">\n                          <small>2016 - Present</small>\n                          <h3>Cursos Online</h3>\n                          <!-- <h4>Perfiles académicos</h4> -->\n\n                          <div class=\"box\">\n\n                            <div class=\"box-item\">\n                              <a href=\"https://www.udemy.com/user/harry-alvarado/\" target=\"_blank\">\n                                <svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 260.2 213.4\" width=\"65\" height=\"33\"><style>.st0{fill:#eb524f}</style><title>udemy</title><path class=\"st0\" d=\"M88.5.9c11.6 3.6 15.2 12.9 15.2 23.5-.1 8.4-1.1 16.8-3.1 25-4.3 18.7-9.6 37.2-14 55.8-3.6 15.3-6.9 30.8-7 46.6.1 4.3.8 8.6 2 12.7 2.3 8.2 9.2 8.8 14.4 3.8 3.3-3.2 6.3-6.6 9-10.3 13-17.3 24.5-35.7 34.3-55 9.5-18.5 31.2-60.3 32.5-62.8 6.8-12.5 25.6-10.4 31.3 1.8 3.2 6.6 5 13.9 5.3 21.2.5 15.8 2 59.9 2.7 66.2 1.3 12.2 9.1 16.1 19.5 9.3 6.3-4.1 12-9.3 17.7-14.2 5.3-4.7 8.1-4.2 10.7 2.4 2.3 5.8 1.3 11.6-.6 17.1-6.4 18.6-20.3 28.5-38.8 32.5-5.9 1.3-12 1.4-18 .4-13.3-2.2-21.8-9.9-26.9-21.8-4.9-11.5-6.4-44.2-7.5-48.4-1.8 3.8-23.1 47.7-34.3 64.4-7 10.7-15.5 20.4-25.3 28.7-9.7 8.1-20.7 13.1-33.6 13.4-15.6.4-26.9-6.7-34.7-19.9-5-8.5-7.1-18-7.8-27.8-1-13.7 1.2-27.1 4.2-40.5 1-4.3 1.7-8.7 2.8-14.2-4.3 2.2-7.1 4.2-10.3 5.3-3.8 1.3-7.9 2.6-11.9 2.5C2.1 118.2 0 102.5 0 99.9c4.8-3.7 9.9-7.1 14.3-11.1 21-19 36.8-41.8 48.2-67.6C66.3 12.7 71 5.4 79.4.9c2.8-1.2 5.3-1.3 9.1 0z\"/></svg>\n                              </a>\n                            </div>\n\n                            <div class=\"box-item-rl10\">\n                              <a href=\"https://platzi.com/@harryalvarado/\" target=\"_blank\">\n                                <img src=\"./assets/img/platzi.png\" alt=\"Logo Platzi\" width=\"40\" height=\"40\">\n                              </a>\n                            </div>\n\n                            <!-- <div class=\"box-item-rl10\">\n                              <a href=\"https://backtrackacademy.com/@Harry2Alvarado8\" target=\"_blank\">\n                                <img src=\"./assets/img/bta2.png\" alt=\"Logo BacktrackAdacemy\" width=\"40\" height=\"40\">\n                              </a>\n                            </div> -->\n\n                          </div>\n\n                          <!-- <p>Plataformas Online</p> -->\n                        </div>\n                        <!-- .experience-item -->\n\n                        <!-- .experience-item -->\n                        <div class=\"content-item\">\n                            <small>2015 - Present</small>\n                            <h3>Licenciatura en Ingeniería Informática</h3>\n                            <h4>Universidad de Panamá</h4>\n\n                            <p>Panamá, Ciudad de Panamá</p>\n                        </div>\n                        <!-- .experience-item -->\n\n                    </div>\n                </div>\n                <!--.row-->\n            </div>\n\n        </div>\n        <!--.row-->\n    </div>\n    <!-- .container -->\n</section>\n<!-- .section-education -->\n"

/***/ }),

/***/ "./src/app/comp/education/education.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/comp/education/education.component.ts ***!
  \*******************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/comp/education/education.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/comp/favoritephrases/favoritephrases.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/comp/favoritephrases/favoritephrases.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"review-section section-wrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"section-title\">\n                    <h2>Favorite phrases</h2>\n                </div>\n            </div>\n\n            <div class=\"col-md-9\">\n                <div id=\"review\">\n                    <div class=\"item\">\n\n                        <div class=\"review-text\">\n                            <i>Una persona que nunca cometió un error nunca intentó algo nuevo.</i>\n                        </div>\n                        <!--.review-text-->\n\n                        <span>- Albert Einstein</span>\n                    </div>\n                    <!--.item-->\n\n                    <div class=\"item\">\n\n                        <div class=\"review-text\">\n                          <i>Está bien celebrar el éxito pero es más importante prestar atención\n                            a las lecciones del fracaso.</i>\n                        </div>\n                        <!--.review-text-->\n                        <span>- Bill Gates</span>\n\n                    </div>\n                    <!--.item-->\n\n                </div>\n                <!--#review-->\n            </div>\n        </div>\n        <!-- /.row -->\n    </div>\n    <!-- /.container -->\n</section>\n<!-- .review-section -->\n"

/***/ }),

/***/ "./src/app/comp/favoritephrases/favoritephrases.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comp/favoritephrases/favoritephrases.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritephrasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritephrasesComponent", function() { return FavoritephrasesComponent; });
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

var FavoritephrasesComponent = /** @class */ (function () {
    function FavoritephrasesComponent() {
    }
    FavoritephrasesComponent.prototype.ngOnInit = function () {
    };
    FavoritephrasesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favoritephrases',
            template: __webpack_require__(/*! ./favoritephrases.component.html */ "./src/app/comp/favoritephrases/favoritephrases.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FavoritephrasesComponent);
    return FavoritephrasesComponent;
}());



/***/ }),

/***/ "./src/app/comp/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"copyright-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"copytext\">&copy; Mi Perfil, Todos los derechos reservados | Diseñado por mi, con el apoyo de <a\n                            href=\"https://themehippo.com\">themehippo</a></div>\n                </div>\n            </div>\n            <!--.row-->\n        </div>\n        <!-- .container-fluid -->\n    </div>\n    <!-- .copyright-section -->\n</footer>\n<!-- .footer -->\n"

/***/ }),

/***/ "./src/app/comp/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/comp/footer/footer.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/comp/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"profile-img\">\n                    <!-- <img src=\"./assets/img/img-profile.jpg\" class=\"img-responsive\" alt=\"\"/> -->\n                    <img src=\"./assets/img/programmer.png\" class=\"img-responsive\" alt=\"\">\n                </div>\n                <!-- Profile Image -->\n            </div>\n            <div class=\"col-md-9\">\n                <div class=\"name-wrapper\">\n                    <h1 class=\"name\">Harry Alvarado</h1>\n                    <span>¡un geek más!</span>\n                </div>\n                <p>\n                    Me considero un persona que se arriesga en situaciones que lo\n                    requieran, en beneficio de la empresa, en busca de una o varias soluciones.\n                </p>\n\n                <div class=\"row\">\n                    <!-- <div class=\"col-md-3\">\n                        <div class=\"personal-details\">\n                            <strong>OCTOBER 17, 1996</strong>\n                            <small>BIRTH</small>\n                        </div>\n                    </div> -->\n                    <div class=\"col-md-3\">\n                        <div class=\"personal-details\">\n                            <strong>PANAMÁ</strong>\n                            <small>NACIONALIDAD</small>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"personal-details\">\n                            <strong>ESPAÑOL <span>(NATIVO)</span>\n                              <!-- , FRENCH <span>(INTERMEDIATE)</span> -->\n                            </strong>\n                            <small>IDIOMA</small>\n                        </div>\n                    </div>\n                </div>\n\n                <ul class=\"social-icon\">\n                  <!-- <li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li> -->\n                  <li><a href=\"https://twitter.com/harryalvarado28\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                  <!-- <li><a href=\"#\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li> -->\n                  <!-- <li><a href=\"#\"><i class=\"fa fa-slack\" aria-hidden=\"true\"></i></a></li> -->\n                  <!-- <li><a href=\"https://hackrry.com/blog/\" target=\"_blank\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a></li> -->\n                  <li><a href=\"https://github.com/HarryAlvarado28\" target=\"_blank\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</header>\n<!-- .header-->\n"

/***/ }),

/***/ "./src/app/comp/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/comp/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/comp/skills/skills.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/skills/skills.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-wrapper skills-wrapper\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"section-title\">\n                    <h2>Skills</h2>\n                </div>\n            </div>\n\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-wrapper\">\n\n                            <h3>CODING SKILLS</h3>\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">Angular 7 (Framework)</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"64\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 64%\"><span\n                                            class=\"progress-percent\"> 64%</span>\n                                    </div>\n                                </div>\n                                <!-- .progress -->\n                            </div>\n                            <!-- .skill-progress -->\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">PL/SQL</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"83\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 83%\"><span\n                                            class=\"progress-percent\"> 83%</span>\n                                    </div>\n                                </div>\n                                <!-- /.progress -->\n                            </div>\n                            <!-- /.skill-progress -->\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">Java SE</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 75%;\"><span\n                                            class=\"progress-percent\"> 75%</span>\n                                    </div>\n                                </div>\n                                <!-- /.progress -->\n                            </div>\n                            <!-- /.skill-progress -->\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">JavaScript</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 55%;\"><span\n                                            class=\"progress-percent\"> 55%</span>\n                                    </div>\n                                </div>\n                                <!-- /.progress -->\n                            </div>\n                            <!-- /.skill-progress -->\n\n\n                        </div>\n                        <!-- /.progress-wrapper -->\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"progress-wrapper\">\n                            <h3>DEVELOPER TOOLS</h3>\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">Docker</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 55%\"><span\n                                            class=\"progress-percent\"> 55%</span>\n                                    </div>\n                                </div>\n                                <!-- .progress -->\n                            </div>\n                            <!-- .skill-progress -->\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">Atom/SublimeText/VisualCode/Notepad++</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 80%\"><span\n                                            class=\"progress-percent\"> 80%</span>\n                                    </div>\n                                </div>\n                                <!-- /.progress -->\n                            </div>\n                            <!-- /.skill-progress -->\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">Postman</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 65%;\"><span\n                                            class=\"progress-percent\"> 65%</span>\n                                    </div>\n                                </div>\n                                <!-- /.progress -->\n                            </div>\n                            <!-- /.skill-progress -->\n\n                            <div class=\"progress-item\">\n                                <span class=\"progress-title\">SQL Developer</span>\n\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"71\" aria-valuemin=\"0\"\n                                         aria-valuemax=\"100\" style=\"width: 71%;\"><span\n                                            class=\"progress-percent\"> 71%</span>\n                                    </div>\n                                </div>\n                                <!-- /.progress -->\n                            </div>\n                            <!-- /.skill-progress -->\n\n                        </div>\n                        <!-- /.progress-wrapper -->\n                    </div>\n                </div>\n                <!--.row -->\n            </div>\n        </div>\n\n    </div>\n    <!-- .container-fluid -->\n</section>\n<!-- .skills-wrapper -->\n"

/***/ }),

/***/ "./src/app/comp/skills/skills.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/skills/skills.component.ts ***!
  \*************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/comp/skills/skills.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/comp/specialities/specialities.component.html":
/*!***************************************************************!*\
  !*** ./src/app/comp/specialities/specialities.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  specialities works!\n</p>\n"

/***/ }),

/***/ "./src/app/comp/specialities/specialities.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comp/specialities/specialities.component.ts ***!
  \*************************************************************/
/*! exports provided: SpecialitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialitiesComponent", function() { return SpecialitiesComponent; });
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

var SpecialitiesComponent = /** @class */ (function () {
    function SpecialitiesComponent() {
    }
    SpecialitiesComponent.prototype.ngOnInit = function () {
    };
    SpecialitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specialities',
            template: __webpack_require__(/*! ./specialities.component.html */ "./src/app/comp/specialities/specialities.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SpecialitiesComponent);
    return SpecialitiesComponent;
}());



/***/ }),

/***/ "./src/app/comp/workexperence/workexperence.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/comp/workexperence/workexperence.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-wrapper section-experience\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"section-title\"><h2>Work Experience</h2></div>\n            </div>\n            <div class=\"col-md-9\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"content-item\">\n                            <small>2015 - Present</small>\n                            <h3>Senior Developer</h3>\n                            <h4>Computer & Motor Ltd.</h4>\n\n                            <p>United Kingdom, London</p>\n                        </div>\n                        <!-- .experience-item -->\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"content-item\">\n                            <small>2012 - 2015</small>\n                            <h3>Webdesigner</h3>\n                            <h4>BizzNiss</h4>\n\n                            <p>United Kingdom, London</p>\n                        </div>\n                        <!-- .experience-item -->\n                    </div>\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-md-6\">\n                        <div class=\"content-item\">\n                            <small>2012 - 2015</small>\n                            <h3>Web Developer</h3>\n                            <h4>Unique Soft</h4>\n\n                            <p>United Kingdom, London</p>\n                        </div>\n                        <!-- .experience-item -->\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"content-item\">\n                            <small>2010 - 2012</small>\n                            <h3>Front-end Developer</h3>\n                            <h4>Somsom LLC</h4>\n\n                            <p>United Kingdom, London</p>\n                        </div>\n                        <!-- .experience-item -->\n                    </div>\n                </div>\n            </div>\n            <!--.row-->\n        </div>\n    </div>\n    <!-- .container -->\n</section>\n<!-- .section-experience -->\n"

/***/ }),

/***/ "./src/app/comp/workexperence/workexperence.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/comp/workexperence/workexperence.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkexperenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkexperenceComponent", function() { return WorkexperenceComponent; });
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

var WorkexperenceComponent = /** @class */ (function () {
    function WorkexperenceComponent() {
    }
    WorkexperenceComponent.prototype.ngOnInit = function () {
    };
    WorkexperenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workexperence',
            template: __webpack_require__(/*! ./workexperence.component.html */ "./src/app/comp/workexperence/workexperence.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], WorkexperenceComponent);
    return WorkexperenceComponent;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  presentation works!\n</p>\n -->\n\n<app-header></app-header>\n\n<!-- <app-skills></app-skills> -->\n<!-- <app-workexperence></app-workexperence> -->\n<app-education></app-education>\n<app-favoritephrases></app-favoritephrases>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/presentation/presentation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
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

var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/presentation/presentation.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
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
    production: true
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

module.exports = __webpack_require__(/*! /Users/harry/GitHub/harryalvarado28.github.io/zonaDesarrollo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map