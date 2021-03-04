(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./speeches/speeches.module": [
		"./src/app/speeches/speeches.module.ts",
		"speeches-speeches-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\">\r\n  <div class=\"container\">\r\n    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n      <div class=\"container\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fa fa-list-alt\" style=\"color: white;\"></i> Speech App</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSpeech\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div id=\"navbarSpeech\" class=\"navbar-collapse collapse justify-content-end\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\"><i class=\"fa fa-folder\" style=\"color: white;\"></i> My Speeches</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/speeches/add\" routerLinkActive=\"active-link\"><i class=\"fa fa-plus\" style=\"color: white;\"></i> Submit Speech</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"/speeches/search\" routerLinkActive=\"active-link\" ><i class=\"fa fa-search\" style=\"color: white;\"></i> Search Speeches</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/share-speech/share-speech.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/share-speech/share-speech.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\"><i class=\"fa fa-mail-forward\"></i> Share Speech</h4>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"emailForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input type=\"text\" formControlName=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter email\" required>\n      <div *ngIf=\"emailForm.controls.email.invalid && (emailForm.controls.email.dirty || emailForm.controls.email.touched)\"\n        class=\"alert alert-danger\" role=\"alert\">\n        <span *ngIf=\"emailForm.controls.email.errors.required\">\n          Email is required.\n        </span>\n        <span *ngIf=\"emailForm.controls.email.errors.email\">\n          Invalid email.\n        </span>\n      </div>\n    </div>\n    <div class=\"modal-footer\" >\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!emailForm.valid\" style=\"float: right;\">\n        <span *ngIf=\"isProcessingRequest\"><i class=\"fa fa-spinner fa-spin\"></i></span>\n        <span *ngIf=\"!isProcessingRequest\">Save</span>\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/speech-main/speech-main.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/speech-main/speech-main.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"speechForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"body\">Speech:</label>\n      <textarea formControlName=\"body\" rows=\"12\" id=\"body\" class=\"form-control\"  placeholder=\"Enter speech text\" required></textarea>\n      <div *ngIf=\"speechForm.controls.body.invalid && (speechForm.controls.body.dirty || speechForm.controls.body.touched)\"\n        class=\"alert alert-danger\" role=\"alert\">\n        <span *ngIf=\"speechForm.controls.body.errors.required\">\n          Speech content is required.\n        </span>\n        <span *ngIf=\"speechForm.controls.body.errors.minlength\">\n          Speech must be at least 10 characters long.\n        </span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"author\">Author:</label>\n      <input type=\"text\" formControlName=\"author\" id=\"author\" class=\"form-control\" placeholder=\"Enter author\" required>\n      <div *ngIf=\"speechForm.controls.author.invalid && (speechForm.controls.author.dirty || speechForm.controls.author.touched)\"\n        class=\"alert alert-danger\" role=\"alert\">\n        <span *ngIf=\"speechForm.controls.author.errors.required\">\n          Author is required.\n        </span>\n        <span *ngIf=\"speechForm.controls.author.errors.minlength\">\n          Author must be at least 10 characters long.\n        </span>\n        <span *ngIf=\"speechForm.controls.author.errors.pattern\">\n          Author must contain characters.\n        </span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"keywords\" tooltip=\"Double click keyword to edit. Enter to confirm.\">Keywords:</label>\n      <tag-input formControlName=\"keywords\" [editable]=\"true\" [(ngModel)]=\"speech.keywords\" *ngIf=\"speech\"></tag-input>\n      <div *ngIf=\"speechForm.controls.keywords.invalid && (speechForm.controls.keywords.dirty || speechForm.controls.keywords.touched)\"\n        class=\"alert alert-danger\" role=\"alert\">\n        <span *ngIf=\"speechForm.controls.keywords.errors.required\">\n          Keywords is required.\n        </span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"date\">Date:</label>\n      <input type=\"text\" formControlName=\"date\" placeholder=\"Date\" placeholder=\"Enter date\" placement=\"top\"\n        id=\"date\" class=\"form-control\" [bsConfig]=\"{ isAnimated: true }\" bsDatepicker required>\n      <div *ngIf=\"speechForm.controls.date.invalid && (speechForm.controls.date.dirty || speechForm.controls.date.touched)\"\n        class=\"alert alert-danger\" role=\"alert\">\n        <span *ngIf=\"speechForm.controls.date.errors.required\">\n          Date is required.\n        </span>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary share-btn\" [disabled]=\"!speechForm.valid\" (click)=\"openModal()\" style=\"float: right;\">\n      <span>Share</span>\n    </button>\n    <button type=\"submit\" class=\"btn btn-success save-btn\" [disabled]=\"!speechForm.valid\" style=\"float: right;\">\n      <span *ngIf=\"isProcessingRequest\"><i class=\"fa fa-spinner fa-spin\"></i></span>\n      <span *ngIf=\"!isProcessingRequest\">Save</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-danger delete-btn\" [disabled]=\"!speechForm.valid\" (click)=\"onDelete()\" style=\"float: right;\">\n      <span>Delete</span>\n    </button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/speech-sidebar/speech-sidebar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/speech-sidebar/speech-sidebar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n  <span class=\"primary-text\"><i class=\"fa fa-file\" style=\"color: black;\"></i> My Speeches</span>\n</h2>\n<br>\n<ng-container *ngIf=\"speeches.length > 0; else emptySpeech\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let speech of speeches\">\n      <button class=\"btn btn-outline-secondary btn-block speeches-btn\" (click)=\"onSelect(speech)\">\n        <b>Author:</b> {{ speech.author }}\n        <span class=\"badge badge-pill badge-primary\" tooltip=\"{{speech.emailAddress.length}} Shares\">\n          {{speech.emailAddress.length}}\n        </span>\n      </button>\n    </li>\n  </ul>\n</ng-container>\n<ng-template #emptySpeech>\n  No speech found.\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/speeches/add/add.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/speeches/add/add.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main role=\"main\" class=\"container-md\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-8 col-offset-4 mb-3\">\n      <h2>\n        <span class=\"primary-text\"><i class=\"fa fa-pencil-square\" style=\"color: black;\"></i> Submit New Speech</span>\n      </h2>\n      <br>\n      <form [formGroup]=\"speechForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"body\">Speech:</label>\n          <textarea formControlName=\"body\" rows=\"12\" id=\"body\" class=\"form-control\"  placeholder=\"Enter speech text\" required></textarea>\n          <div *ngIf=\"speechForm.controls.body.invalid && (speechForm.controls.body.dirty || speechForm.controls.body.touched)\"\n            class=\"alert alert-danger\" role=\"alert\">\n            <span *ngIf=\"speechForm.controls.body.errors.required\">\n              Speech content is required.\n            </span>\n            <span *ngIf=\"speechForm.controls.body.errors.minlength\">\n              Speech must be at least 10 characters long.\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"author\">Author:</label>\n          <input type=\"text\" formControlName=\"author\" id=\"author\" class=\"form-control\" placeholder=\"Enter author\" required>\n          <div *ngIf=\"speechForm.controls.author.invalid && (speechForm.controls.author.dirty || speechForm.controls.author.touched)\"\n            class=\"alert alert-danger\" role=\"alert\">\n            <span *ngIf=\"speechForm.controls.author.errors.required\">\n              Author is required.\n            </span>\n            <span *ngIf=\"speechForm.controls.author.errors.minlength\">\n              Author must be at least 10 characters long.\n            </span>\n            <span *ngIf=\"speechForm.controls.author.errors.pattern\">\n              Author must contain characters.\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"keywords\" tooltip=\"Double click keyword to edit. Enter to confirm.\">Keywords:</label>\n          <tag-input formControlName=\"keywords\" [editable]=\"true\" [(ngModel)]=\"keywords\"></tag-input>\n          <div *ngIf=\"speechForm.controls.keywords.invalid && (speechForm.controls.keywords.dirty || speechForm.controls.keywords.touched)\"\n            class=\"alert alert-danger\" role=\"alert\">\n            <span *ngIf=\"speechForm.controls.keywords.errors.required\">\n              Keywords is required.\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"date\">Date:</label>\n          <input type=\"text\" formControlName=\"date\" placeholder=\"Date\" placeholder=\"Enter date\" placement=\"top\"\n            id=\"date\" class=\"form-control\" [bsConfig]=\"{ isAnimated: true }\" bsDatepicker required>\n          <div *ngIf=\"speechForm.controls.date.invalid && (speechForm.controls.date.dirty || speechForm.controls.date.touched)\"\n            class=\"alert alert-danger\" role=\"alert\">\n            <span *ngIf=\"speechForm.controls.date.errors.required\">\n              Date is required.\n            </span>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success save-btn\" [disabled]=\"!speechForm.valid\" style=\"float: right;\">\n          <span *ngIf=\"isProcessingRequest\"><i class=\"fa fa-spinner fa-spin\"></i></span>\n          <span *ngIf=\"!isProcessingRequest\">Save</span>\n        </button>\n        <button type=\"button\" class=\"btn btn-warning clear-btn\" [disabled]=\"!speechForm.valid\" (click)=\"onClear()\" style=\"float: right;\">\n          <span>Clear</span>\n        </button>\n      </form>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/speeches/search/search.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/speeches/search/search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main role=\"main\" class=\"container-md\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-8 col-offset-4 mb-3\">\n      <h2>\n        <span class=\"primary-text\"><i class=\"fa fa-search\" style=\"color: black;\"></i> Search Speeches</span>\n      </h2>\n      <br>\n      <div class=\"form-group\">\n        <label for=\"categories\">Search By:</label>\n        <select class=\"form-control\" id=\"categories\" #categories (change)=\"setSearchCategory(categories.value)\">\n          <option selected></option>\n          <option value=\"1\">Author</option>\n          <option value=\"2\">Date</option>\n          <option value=\"3\">Keyword</option>\n          <option value=\"4\">Speech Text</option>\n        </select>\n        <ng-container *ngIf=\"speeches$ | async as speeches\">\n          <form [formGroup]=\"searchForm\">\n            <input formControlName=\"speeches\"\n              [isAnimated]=\"true\"\n              [typeahead]=\"speeches\"\n              [typeaheadOptionsLimit]=\"100\"\n              [typeaheadLatinize]=\"false\"\n              [typeaheadMinLength]=\"1\"\n              (typeaheadNoResults)=\"typeaheadNoResults($event)\"\n              (typeaheadOnSelect)=\"onSelect($event.item)\"\n              typeaheadOptionField=\"{{category}}\"\n              placeholder=\"Enter search value\"\n              class=\"form-control\">\n          </form>\n          <div class=\"alert alert-danger\" *ngIf=\"noResult\">No Results Found</div>\n        </ng-container>\n      </div>\n      <form [formGroup]=\"speechForm\">\n        <div class=\"form-group\">\n          <label for=\"body\">Speech:</label>\n          <textarea formControlName=\"body\" rows=\"12\" id=\"body\" class=\"form-control\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"author\">Author:</label>\n          <input type=\"text\" formControlName=\"author\" id=\"author\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"keywords\" tooltip=\"Double click keyword to edit\">Keywords:</label>\n          <tag-input formControlName=\"keywords\" [removable]=\"false\" [hideForm]=\"true\" [(ngModel)]=\"keywords\"></tag-input>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"date\">Date:</label>\n          <input type=\"text\" formControlName=\"date\" placement=\"top\"\n            id=\"date\" class=\"form-control\" [bsConfig]=\"{ isAnimated: true }\" bsDatepicker>\n        </div>\n    </form>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/speeches/speeches.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/speeches/speeches.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<main role=\"main\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-md-4\">\n      <app-speech-sidebar [speeches]=\"speeches$ | async\" (speechChanged)=\"onSelect($event)\"></app-speech-sidebar>\n    </div>\n    <div class=\"col-sm-8 col-md-8 mb-3\">\n      <app-speech-main [speech]=\"selectedSpeech\"></app-speech-main>\n    </div>\n  </div>\n</main>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: './speeches/speeches.module#SpeechesModule',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'speeches',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'speeches-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
  <router-outlet></router-outlet>
  `,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _speeches_speeches_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speeches/speeches-routing.module */ "./src/app/speeches/speeches-routing.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_share_speech_share_speech_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/share-speech/share-speech.component */ "./src/app/shared/share-speech/share-speech.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _shared_share_speech_share_speech_component__WEBPACK_IMPORTED_MODULE_11__["ShareSpeechComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _speeches_speeches_routing_module__WEBPACK_IMPORTED_MODULE_8__["SpeechesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [_shared_share_speech_share_speech_component__WEBPACK_IMPORTED_MODULE_11__["ShareSpeechComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/pending-changes.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/guards/pending-changes.guard.ts ***!
  \*************************************************/
/*! exports provided: PendingChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingChangesGuard", function() { return PendingChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PendingChangesGuard = class PendingChangesGuard {
    canDeactivate(component) {
        return component.canDeactivate() ? true : confirm('Changes you made may not be saved.');
    }
};
PendingChangesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PendingChangesGuard);



/***/ }),

/***/ "./src/app/services/data.json":
/*!************************************!*\
  !*** ./src/app/services/data.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = [{"id":1,"author":"Lottie Noble","keywords":["lottie","noble","alexandrianicholson@verbus.com"],"emailAddress":["alexandrianicholson@verbus.com"],"body":"Nam a egestas purus. Nam laoreet malesuada dolor, scelerisque rhoncus leo molestie vitae. Nam imperdiet lorem eget orci fringilla, vitae pharetra nunc maximus. In pellentesque et odio in aliquam. Etiam et nisi quis dui consectetur bibendum pharetra vel nulla. Aliquam facilisis purus dolor, at placerat sem posuere sed. Donec est orci, viverra non arcu ut, ultrices lacinia lacus. Morbi at nisi neque. Etiam eget ullamcorper erat. Quisque consequat placerat massa at tincidunt. Praesent viverra, massa ac venenatis volutpat, libero lectus venenatis velit, sed efficitur ex sapien quis dolor. Proin euismod tempor lacus, quis ornare orci eleifend non. Cras varius lobortis lacus, a porttitor ligula pellentesque et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","date":"Wed Mar 03 2021 13:00:24 GMT+0800 (Philippine Standard Time)"},{"id":2,"author":"Hana Daugherty","keywords":["hana","daugherty","violetsmall@bleendot.com"],"emailAddress":["violetsmall@bleendot.com"],"body":"Morbi augue tellus, convallis eget lorem at, posuere lobortis enim. Etiam sodales dictum metus. Aliquam tortor urna, bibendum eu rutrum nec, convallis vitae quam. Sed cursus neque in libero ultricies, sit amet egestas nibh dapibus. Suspendisse pharetra convallis mi, vel venenatis est. Donec vulputate metus eget felis semper venenatis. Aenean nec massa bibendum quam ultricies sollicitudin. In bibendum gravida leo, id consectetur justo vestibulum nec. Nam dignissim, justo at scelerisque facilisis, nulla magna bibendum lectus, a tincidunt risus metus eu lorem. Duis aliquam sit amet libero eget varius. Pellentesque vehicula tellus sed turpis porta, ac molestie nibh gravida.","date":"Wed Mar 03 2021 13:00:24 GMT+0800 (Philippine Standard Time)"},{"id":3,"author":"Rosie Lambert","keywords":["rosie","lambert","wallshuber@comvoy.com"],"emailAddress":[],"body":"Nulla nec euismod nisl, nec facilisis erat. Vivamus suscipit, lacus a scelerisque rutrum, neque mauris sagittis nibh, ut dapibus ipsum tortor nec ante. Vestibulum tincidunt, erat ut scelerisque luctus, libero lorem laoreet lectus, vitae commodo sapien nisl in ex. Maecenas dictum tortor eu volutpat iaculis. Quisque sapien lacus, gravida vel mauris sit amet, faucibus egestas metus. Pellentesque sit amet vestibulum ante, vitae pretium sem. Mauris placerat, velit non aliquet gravida, magna ligula tristique orci, dictum malesuada nisi diam eget ligula. Fusce augue lacus, tincidunt et libero eget, vehicula dapibus ante. Pellentesque sit amet elit sit amet est efficitur suscipit. Donec et lorem sed orci hendrerit consequat. Duis sollicitudin justo tellus, vel feugiat sem commodo non. Morbi laoreet tincidunt ipsum non pharetra. Donec facilisis, dui ac pretium lacinia, nibh nunc pellentesque neque, non euismod lorem enim sed neque. Nunc imperdiet scelerisque enim at blandit.","date":"Wed Mar 03 2021 13:00:24 GMT+0800 (Philippine Standard Time)"},{"id":4,"author":"Hayley Santos","keywords":["hayley","santos","olabauer@icology.com"],"emailAddress":[],"body":"In at egestas diam, vel tincidunt nulla. Nullam et eleifend elit. Vivamus elementum ante sed mattis euismod. Proin ac viverra sapien. Praesent sodales, tellus id sollicitudin semper, diam nunc feugiat augue, vel posuere leo arcu sed ligula. Pellentesque vitae dui non lacus convallis bibendum. Nunc vel maximus lectus. Fusce condimentum, libero vel luctus pharetra, quam libero eleifend lorem, in egestas libero magna tincidunt orci. Aenean lorem dui, congue et eleifend eu, pretium eget mi. Mauris metus diam, feugiat ut dapibus sit amet, varius a ligula. Suspendisse vulputate vehicula malesuada. Duis sodales vitae tellus non fermentum. Aenean porttitor enim eu urna elementum, suscipit fermentum urna accumsan. Pellentesque consequat mi ipsum. Nunc sodales tincidunt velit ut vulputate. Nulla facilisi. Curabitur efficitur diam vel vestibulum commodo. Vivamus orci sem, facilisis eu sem non, feugiat lacinia ante. Donec ac ligula placerat, euismod elit lacinia, placerat urna. Fusce vulputate ligula vitae iaculis lobortis.","date":"Wed Mar 03 2021 13:00:24 GMT+0800 (Philippine Standard Time)"},{"id":5,"author":"Caroline Merritt","keywords":["caroline","meritt","helenehale@terrasys.com"],"emailAddress":["helenehale@terrasys.com","olabauer@icology.com"],"body":"Sed molestie libero in tortor dapibus cursus. Morbi facilisis enim quis lorem finibus, non scelerisque velit bibendum. Donec efficitur, justo et accumsan volutpat, tellus metus porttitor risus, in tempus nisl diam vel arcu. Praesent tincidunt sapien sit amet ultrices malesuada. Vestibulum vel ligula est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus nibh elit, dictum a auctor vel, interdum quis dui. Aliquam molestie a mi at cursus. Curabitur at lorem enim. Morbi porta est tortor. Vivamus nibh nisl, imperdiet eget nibh a, sollicitudin pharetra elit. Praesent varius ut odio egestas mollis. Donec tristique augue sed turpis elementum, quis varius eros molestie.","date":"Wed Mar 03 2021 13:00:24 GMT+0800 (Philippine Standard Time)"}];

/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.json */ "./src/app/services/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/app/services/data.json", 1);





let DataService = class DataService {
    constructor() {
        this.speeches = _data_json__WEBPACK_IMPORTED_MODULE_4__;
    }
    /**
     * Load all speeches
     */
    loadSpeeches() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.speeches).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DataService);



/***/ }),

/***/ "./src/app/services/speeches.store.ts":
/*!********************************************!*\
  !*** ./src/app/services/speeches.store.ts ***!
  \********************************************/
/*! exports provided: SpeechesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechesStore", function() { return SpeechesStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");






let SpeechesStore = class SpeechesStore {
    constructor(dataService, toastr) {
        this.dataService = dataService;
        this.toastr = toastr;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.speeches$ = this.subject.asObservable();
        this.loadSpeeches();
    }
    /**
     * @param speech
     * Adds new speech
     */
    addSpeech(speech) {
        const speeches = this.subject.getValue();
        speeches.push(speech);
        this.subject.next(speeches);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(speech);
    }
    /**
     * @param postId
     * Deletes a speech
     */
    deleteSpeech(speechId) {
        const speeches = this.subject.getValue();
        const newSpeeches = speeches.filter(speech => speech.id !== speechId);
        this.subject.next(newSpeeches);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
    /**
     * Load all speeches
     */
    loadSpeeches() {
        this.dataService.loadSpeeches().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(speeches => this.subject.next(speeches))).subscribe();
    }
    /**
     * Get all speeches
     */
    getSpeeches() {
        return this.speeches$;
    }
    /**
     * @param postId
     * @param changes
     * Update speech
     */
    saveSpeech(speechId, changes) {
        const speeches = this.subject.getValue();
        const speechIndex = speeches.findIndex(post => post.id === speechId);
        const newCourse = Object.assign({}, speeches[speechIndex], changes);
        const newCourses = speeches.slice(0);
        newCourses[speechIndex] = newCourse;
        this.subject.next(newCourses);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(speeches[speechIndex]);
    }
};
SpeechesStore.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SpeechesStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], SpeechesStore);



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-link {\r\n  color: #fff !important;\r\n  font-weight: 500;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1saW5rIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/models/speech.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/speech.model.ts ***!
  \***********************************************/
/*! exports provided: Speech */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speech", function() { return Speech; });
class Speech {
    constructor() {
        this.id = null;
        this.author = '';
        this.keywords = [];
        this.emailAddress = [];
        this.body = '';
        this.date = '';
    }
}


/***/ }),

/***/ "./src/app/shared/share-speech/share-speech.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/share-speech/share-speech.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZS1zcGVlY2gvc2hhcmUtc3BlZWNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/share-speech/share-speech.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/share-speech/share-speech.component.ts ***!
  \***************************************************************/
/*! exports provided: ShareSpeechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareSpeechComponent", function() { return ShareSpeechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_speeches_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/speeches.store */ "./src/app/services/speeches.store.ts");






let ShareSpeechComponent = class ShareSpeechComponent {
    constructor(bsModalRef, speechesStore) {
        this.bsModalRef = bsModalRef;
        this.speechesStore = speechesStore;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.initializeSpeechForm();
    }
    /**
     * Initialize email form
     */
    initializeSpeechForm() {
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    }
    /**
     * Save email share
     */
    onSubmit() {
        const email = this.emailForm.value.email;
        this.speech.emailAddress.push(email);
        this.speechesStore.saveSpeech(this.speech.id, this.speech).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            this.event.emit(email);
            this.bsModalRef.hide();
        })).subscribe();
    }
};
ShareSpeechComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
    { type: _services_speeches_store__WEBPACK_IMPORTED_MODULE_5__["SpeechesStore"] }
];
ShareSpeechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-share-speech',
        template: __webpack_require__(/*! raw-loader!./share-speech.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/share-speech/share-speech.component.html"),
        styles: [__webpack_require__(/*! ./share-speech.component.css */ "./src/app/shared/share-speech/share-speech.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
        _services_speeches_store__WEBPACK_IMPORTED_MODULE_5__["SpeechesStore"]])
], ShareSpeechComponent);



/***/ }),

/***/ "./src/app/shared/speech-main/speech-main.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/speech-main/speech-main.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-btn, .share-btn, .save-btn {\r\n  margin-left: 20px;\r\n  width: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwZWVjaC1tYWluL3NwZWVjaC1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwZWVjaC1tYWluL3NwZWVjaC1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlLWJ0biwgLnNoYXJlLWJ0biwgLnNhdmUtYnRuIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/speech-main/speech-main.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/speech-main/speech-main.component.ts ***!
  \*************************************************************/
/*! exports provided: SpeechMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechMainComponent", function() { return SpeechMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _share_speech_share_speech_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share-speech/share-speech.component */ "./src/app/shared/share-speech/share-speech.component.ts");
/* harmony import */ var _services_speeches_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/speeches.store */ "./src/app/services/speeches.store.ts");
/* harmony import */ var _models_speech_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/speech.model */ "./src/app/shared/models/speech.model.ts");









let SpeechMainComponent = class SpeechMainComponent {
    constructor(modalService, speechesStore, toastr) {
        this.modalService = modalService;
        this.speechesStore = speechesStore;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.initializeSpeechForm();
    }
    ngOnChanges() {
        if (this.speech) {
            this.speechForm.patchValue(this.speech);
            this.speechForm.enable();
        }
    }
    /**
     * Initialize post form
     */
    initializeSpeechForm() {
        this.speechForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z].*[\s\.]*$')]),
            'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'body': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]),
            'emailAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
        this.speechForm.disable();
    }
    /**
     * Deletes a speech
     */
    onDelete() {
        const speech = this.speechForm.value;
        this.speechesStore.deleteSpeech(speech.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            this.speechForm.reset();
            this.speechForm.disable();
            this.toastr.warning('Speech deleted!', 'Speech App');
        })).subscribe();
    }
    /**
     * Update speech
     */
    onSubmit() {
        const speech = this.speechForm.value;
        speech.keywords = this.speech.keywords;
        this.isProcessingRequest = true;
        this.speechesStore.saveSpeech(speech.id, speech).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => {
            this.isProcessingRequest = false;
            this.toastr.success('Speech updated!', 'Speech App');
        })).subscribe();
    }
    /**
     * Open share speech modal
     */
    openModal() {
        const initialState = {
            speech: this.speechForm.value
        };
        this.modalRef = this.modalService.show(_share_speech_share_speech_component__WEBPACK_IMPORTED_MODULE_6__["ShareSpeechComponent"], { initialState });
        this.modalRef.content.event.subscribe(email => {
            this.toastr.success(`Speech shared to ${email}.`, 'Speech App');
        });
    }
};
SpeechMainComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _services_speeches_store__WEBPACK_IMPORTED_MODULE_7__["SpeechesStore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_speech_model__WEBPACK_IMPORTED_MODULE_8__["Speech"])
], SpeechMainComponent.prototype, "speech", void 0);
SpeechMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speech-main',
        template: __webpack_require__(/*! raw-loader!./speech-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/speech-main/speech-main.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./speech-main.component.css */ "./src/app/shared/speech-main/speech-main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        _services_speeches_store__WEBPACK_IMPORTED_MODULE_7__["SpeechesStore"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], SpeechMainComponent);



/***/ }),

/***/ "./src/app/shared/speech-sidebar/speech-sidebar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/speech-sidebar/speech-sidebar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.speeches-btn {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwZWVjaC1zaWRlYmFyL3NwZWVjaC1zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGVlY2gtc2lkZWJhci9zcGVlY2gtc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5zcGVlY2hlcy1idG4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/speech-sidebar/speech-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/speech-sidebar/speech-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SpeechSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechSidebarComponent", function() { return SpeechSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpeechSidebarComponent = class SpeechSidebarComponent {
    constructor() {
        this.speeches = [];
        this.speechChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /**
     * Set selected speech
     */
    onSelect(speech) {
        this.speechChanged.emit(speech);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SpeechSidebarComponent.prototype, "speeches", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SpeechSidebarComponent.prototype, "speechChanged", void 0);
SpeechSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speech-sidebar',
        template: __webpack_require__(/*! raw-loader!./speech-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/speech-sidebar/speech-sidebar.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./speech-sidebar.component.css */ "./src/app/shared/speech-sidebar/speech-sidebar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SpeechSidebarComponent);



/***/ }),

/***/ "./src/app/speeches/add/add.component.css":
/*!************************************************!*\
  !*** ./src/app/speeches/add/add.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  margin-top: 100px;\r\n}\r\n\r\n.clear-btn, .save-btn {\r\n  margin-left: 20px;\r\n  width: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlZWNoZXMvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NwZWVjaGVzL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4uY2xlYXItYnRuLCAuc2F2ZS1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/speeches/add/add.component.ts":
/*!***********************************************!*\
  !*** ./src/app/speeches/add/add.component.ts ***!
  \***********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_speeches_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/speeches.store */ "./src/app/services/speeches.store.ts");






let AddComponent = class AddComponent {
    constructor(speechesStore, toastr) {
        this.speechesStore = speechesStore;
        this.toastr = toastr;
    }
    canDeactivate() {
        return !this.speechForm.dirty;
    }
    ngOnInit() {
        this.initializeForm();
    }
    /**
     * Initialize speech form
     */
    initializeForm() {
        this.speechForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()),
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z].*[\s\.]*$')]),
            'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'body': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]),
            'emailAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
    }
    /**
     * Clear speech form
     */
    onClear() {
        this.speechForm.reset();
    }
    /**
     * Add new speech
     */
    onSubmit() {
        const speech = this.speechForm.value;
        this.isProcessingRequest = true;
        this.speechesStore.addSpeech(speech).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((speech) => {
            this.isProcessingRequest = false;
            this.toastr.success(`Speech by ${speech.author} is added!`, 'Speech App');
            this.speechForm.reset();
        })).subscribe();
    }
};
AddComponent.ctorParameters = () => [
    { type: _services_speeches_store__WEBPACK_IMPORTED_MODULE_5__["SpeechesStore"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Object)
], AddComponent.prototype, "canDeactivate", null);
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/speeches/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/speeches/add/add.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_speeches_store__WEBPACK_IMPORTED_MODULE_5__["SpeechesStore"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], AddComponent);



/***/ }),

/***/ "./src/app/speeches/search/search.component.css":
/*!******************************************************!*\
  !*** ./src/app/speeches/search/search.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  margin-top: 100px;\r\n}\r\n\r\n::ng-deep .dropdown-menu {\r\n  width: 100% !important;\r\n}\r\n\r\n::ng-deep .dropdown-item {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlZWNoZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zcGVlY2hlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51IHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/speeches/search/search.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/speeches/search/search.component.ts ***!
  \*****************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_speeches_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/speeches.store */ "./src/app/services/speeches.store.ts");




let SearchComponent = class SearchComponent {
    constructor(speechesStore) {
        this.speechesStore = speechesStore;
        this.category = 'author';
        this.keywords = [];
        this.noResult = false;
    }
    ngOnInit() {
        this.speeches$ = this.speechesStore.getSpeeches();
        this.initializeForms();
    }
    /**
     * Initialize forms
     */
    initializeForms() {
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'speeches': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
        this.speechForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'author': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'keywords': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'body': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.speechForm.disable();
    }
    /**
     * @param speech
     * Set form values
     */
    onSelect(speech) {
        this.speechForm.patchValue(speech);
        this.keywords = speech.keywords;
    }
    /**
     * @param category
     * Set search category
     */
    setSearchCategory(category) {
        switch (category) {
            case '1':
                this.category = 'author';
                break;
            case '2':
                this.category = 'date';
                break;
            case '3':
                this.category = 'keywords';
                break;
            default:
                this.category = 'body';
                break;
        }
    }
    /**
     * Show error when no results
     */
    typeaheadNoResults(event) {
        this.noResult = event;
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_speeches_store__WEBPACK_IMPORTED_MODULE_3__["SpeechesStore"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/speeches/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/speeches/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_speeches_store__WEBPACK_IMPORTED_MODULE_3__["SpeechesStore"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/speeches/speeches-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/speeches/speeches-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SpeechesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechesRoutingModule", function() { return SpeechesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _guards_pending_changes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../guards/pending-changes.guard */ "./src/app/guards/pending-changes.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add/add.component */ "./src/app/speeches/add/add.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/speeches/search/search.component.ts");
/* harmony import */ var _speeches_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./speeches.component */ "./src/app/speeches/speeches.component.ts");
/* harmony import */ var _shared_speech_sidebar_speech_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/speech-sidebar/speech-sidebar.component */ "./src/app/shared/speech-sidebar/speech-sidebar.component.ts");
/* harmony import */ var _shared_speech_main_speech_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/speech-main/speech-main.component */ "./src/app/shared/speech-main/speech-main.component.ts");


















const speechesRoutes = [
    {
        path: '',
        component: _speeches_component__WEBPACK_IMPORTED_MODULE_15__["SpeechesComponent"]
    },
    {
        canDeactivate: [_guards_pending_changes_guard__WEBPACK_IMPORTED_MODULE_6__["PendingChangesGuard"]],
        path: 'speeches/add',
        pathMatch: 'full',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"],
    },
    {
        path: 'speeches/search',
        pathMatch: 'full',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"]
    }
];
let SpeechesRoutingModule = class SpeechesRoutingModule {
};
SpeechesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _add_add_component__WEBPACK_IMPORTED_MODULE_12__["AddComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
            _speeches_component__WEBPACK_IMPORTED_MODULE_15__["SpeechesComponent"],
            _shared_speech_sidebar_speech_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SpeechSidebarComponent"],
            _shared_speech_main_speech_main_component__WEBPACK_IMPORTED_MODULE_17__["SpeechMainComponent"]
        ],
        imports: [
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_2__["BsDatepickerModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(speechesRoutes),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__["TypeaheadModule"].forRoot(),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
        providers: [_guards_pending_changes_guard__WEBPACK_IMPORTED_MODULE_6__["PendingChangesGuard"]]
    })
], SpeechesRoutingModule);



/***/ }),

/***/ "./src/app/speeches/speeches.component.css":
/*!*************************************************!*\
  !*** ./src/app/speeches/speeches.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  margin-top: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlZWNoZXMvc3BlZWNoZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NwZWVjaGVzL3NwZWVjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/speeches/speeches.component.ts":
/*!************************************************!*\
  !*** ./src/app/speeches/speeches.component.ts ***!
  \************************************************/
/*! exports provided: SpeechesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechesComponent", function() { return SpeechesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_speeches_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/speeches.store */ "./src/app/services/speeches.store.ts");




let SpeechesComponent = class SpeechesComponent {
    constructor(router, speechesStore) {
        this.router = router;
        this.speechesStore = speechesStore;
    }
    ngOnInit() {
        this.speeches$ = this.speechesStore.getSpeeches();
    }
    /**
     * Set selected speech
     */
    onSelect(speech) {
        this.selectedSpeech = speech;
    }
};
SpeechesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_speeches_store__WEBPACK_IMPORTED_MODULE_3__["SpeechesStore"] }
];
SpeechesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speeches',
        template: __webpack_require__(/*! raw-loader!./speeches.component.html */ "./node_modules/raw-loader/index.js!./src/app/speeches/speeches.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./speeches.component.css */ "./src/app/speeches/speeches.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_speeches_store__WEBPACK_IMPORTED_MODULE_3__["SpeechesStore"]])
], SpeechesComponent);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sawyer R5\Desktop\tech-challenge\tech-challenge-erick-rebadeo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map