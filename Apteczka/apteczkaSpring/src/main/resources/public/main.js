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

/***/ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1tZWRpY2luZS10by1waGFybWFjeS9hZGQtbWVkaWNpbmUtdG8tcGhhcm1hY3kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-medicine-to-pharmacy works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddMedicineToPharmacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedicineToPharmacyComponent", function() { return AddMedicineToPharmacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMedicineToPharmacyComponent = /** @class */ (function () {
    function AddMedicineToPharmacyComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
    }
    AddMedicineToPharmacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            var id2 = params["id2"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: id,
                    id2: id2
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/pharmacy/addmedicine", { params: param })
                .subscribe(function (data) {
                _this.router.navigate(["/avaliable_medicines/" + id]);
            });
        });
    };
    AddMedicineToPharmacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-medicine-to-pharmacy",
            template: __webpack_require__(/*! ./add-medicine-to-pharmacy.component.html */ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.html"),
            styles: [__webpack_require__(/*! ./add-medicine-to-pharmacy.component.css */ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddMedicineToPharmacyComponent);
    return AddMedicineToPharmacyComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-medicine/add-medicine.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/add-medicine/add-medicine.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1tZWRpY2luZS9hZGQtbWVkaWNpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/add-medicine/add-medicine.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/add-medicine/add-medicine.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n        <h1>Dodaj lek</h1>\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n              <div class=\"form\">\r\n                <form (ngSubmit)=\"onSubmit()\">\r\n                  <div>\r\n                    <label>Nazwa leku: </label> <br />\r\n                    <input\r\n                      type=\"text\"\r\n                      placeholder=\"Nazwa\"\r\n                      [(ngModel)]=\"name\"\r\n                      name=\"name\"\r\n                    />\r\n                  </div>\r\n                  <div>\r\n                    <label>Nazwa producenta: </label> <br />\r\n                    <input\r\n                      type=\"text\"\r\n                      placeholder=\"Producent\"\r\n                      [(ngModel)]=\"company\"\r\n                      name=\"company\"\r\n                    />\r\n                  </div>\r\n                  <div>\r\n                    <label>Opis leku: </label> <br />\r\n                    <input\r\n                      type=\"text\"\r\n                      placeholder=\"Opis\"\r\n                      [(ngModel)]=\"description\"\r\n                      name=\"description\"\r\n                    />\r\n                  </div>\r\n                  <div>\r\n                    <label>Skład: </label> <br />\r\n                    <input\r\n                      type=\"text\"\r\n                      placeholder=\"Skład\"\r\n                      [(ngModel)]=\"composition\"\r\n                      name=\"composition\"\r\n                    />\r\n                  </div> <br />\r\n                  <button type=\"submit\" class=\"btn btn-success\">Dodaj</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n      "

/***/ }),

/***/ "./src/app/admin/add-medicine/add-medicine.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-medicine/add-medicine.component.ts ***!
  \**************************************************************/
/*! exports provided: AddMedicineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMedicineComponent", function() { return AddMedicineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMedicineComponent = /** @class */ (function () {
    function AddMedicineComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.name = "";
        this.company = "";
        this.description = "";
        this.composition = "";
    }
    AddMedicineComponent.prototype.ngOnInit = function () {
    };
    AddMedicineComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("dodawanie leku");
        if (this.name == "" ||
            this.description == "" ||
            this.company == "" ||
            this.composition == "") {
            alert("Pola nie mogą być puste!");
            return;
        }
        var medicine = {
            name: this.name,
            company: this.company,
            description: this.description,
            composition: this.composition
        };
        this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/medicine/add", medicine)
            .subscribe(function (data) {
            _this.router.navigate(["/medicines/list"]);
        });
    };
    AddMedicineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-medicine",
            template: __webpack_require__(/*! ./add-medicine.component.html */ "./src/app/admin/add-medicine/add-medicine.component.html"),
            styles: [__webpack_require__(/*! ./add-medicine.component.css */ "./src/app/admin/add-medicine/add-medicine.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddMedicineComponent);
    return AddMedicineComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-pharmacy/add-pharmacy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/add-pharmacy/add-pharmacy.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1waGFybWFjeS9hZGQtcGhhcm1hY3kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/add-pharmacy/add-pharmacy.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/add-pharmacy/add-pharmacy.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <h1>Dodaj aptekę</h1>\r\n  <div class=\"col-md-8 col-md-offset-2\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"form\">\r\n          <form (ngSubmit)=\"onSubmit()\">\r\n            <div>\r\n              <label>Nazwa apteki: </label> <br />\r\n              <input\r\n                type=\"text\"\r\n                placeholder=\"Nazwa\"\r\n                [(ngModel)]=\"name\"\r\n                name=\"name\"\r\n              />\r\n            </div>\r\n            <div>\r\n              <label>Nazwa Firmy: </label> <br />\r\n              <input\r\n                type=\"text\"\r\n                placeholder=\"Firma\"\r\n                [(ngModel)]=\"company\"\r\n                name=\"company\"\r\n              />\r\n            </div>\r\n            <div>\r\n              <label>Opis: </label> <br />\r\n              <input\r\n                type=\"text\"\r\n                placeholder=\"Opis\"\r\n                [(ngModel)]=\"description\"\r\n                name=\"description\"\r\n              />\r\n            </div>\r\n            <div>\r\n              <label>Lat: </label> <br />\r\n              <input\r\n                type=\"number\"\r\n                placeholder=\"Lat\"\r\n                [(ngModel)]=\"lat\"\r\n                name=\"Lat\"\r\n              />\r\n            </div>\r\n            <div>\r\n              <label>Lng: </label> <br />\r\n              <input\r\n                type=\"number\"\r\n                placeholder=\"Lng\"\r\n                [(ngModel)]=\"lng\"\r\n                name=\"Lng\"\r\n              />\r\n            </div> <br />\r\n            <button type=\"submit\" class=\"btn btn-success\">Dodaj</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/admin/add-pharmacy/add-pharmacy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-pharmacy/add-pharmacy.component.ts ***!
  \**************************************************************/
/*! exports provided: AddPharmacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPharmacyComponent", function() { return AddPharmacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPharmacyComponent = /** @class */ (function () {
    function AddPharmacyComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.name = "";
        this.company = "";
        this.description = "";
        this.lat = "";
        this.lng = "";
    }
    AddPharmacyComponent.prototype.ngOnInit = function () {
    };
    AddPharmacyComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("dodawanie apteki");
        if (this.name == "" ||
            this.description == "" ||
            this.company == "" ||
            this.lat == "" ||
            this.lng == "" ||
            this.description == "") {
            alert("Pola nie mogą być puste!");
            return;
        }
        var pharmacy = {
            name: this.name,
            company: this.company,
            description: this.description,
            lat: this.lat,
            lon: this.lng
        };
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + '/pharmacy/add', pharmacy).subscribe(function (data) {
            _this.router.navigate(["/add_place"]);
        });
    };
    AddPharmacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-pharmacy',
            template: __webpack_require__(/*! ./add-pharmacy.component.html */ "./src/app/admin/add-pharmacy/add-pharmacy.component.html"),
            styles: [__webpack_require__(/*! ./add-pharmacy.component.css */ "./src/app/admin/add-pharmacy/add-pharmacy.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddPharmacyComponent);
    return AddPharmacyComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-place/add-place.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/add-place/add-place.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1wbGFjZS9hZGQtcGxhY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/add-place/add-place.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-place/add-place.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <h1>Lista aptek</h1>\r\n  <div class=\"col-md-8 col-md-offset-2\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/add_pharmacy']\">Dodaj aptekę</a>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-container\">\r\n          <table class=\"table table-filter\">\r\n            <tbody>\r\n              <tr *ngFor=\"let item of items\">\r\n                <td>\r\n                  <a\r\n                    [routerLink]=\"['/pharmacy/item/' + item.id]\"\r\n                    class=\"pull-left\"\r\n                  >\r\n                    <img src=\"/assets/laska-eskulapa_318-117971.jpg\" />\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <div class=\"media\">\r\n                    <div class=\"media-body\">\r\n                      <span class=\"media-meta pull-right\">{{\r\n                        item.company\r\n                      }}</span>\r\n                      <a [routerLink]=\"['/pharmacy/item/' + item.id]\">\r\n                        <h4 class=\"title\">{{ item.name }}</h4>\r\n                      </a>\r\n                      <p class=\"summary\">{{ item.description }}</p>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <button\r\n                    item-width=\"50\"\r\n                    item-height=\"50\"\r\n                    [routerLink]=\"['/edit_place/' + item.id]\"\r\n                  >\r\n                    Edytuj\r\n                  </button>\r\n                </td>\r\n                <td>\r\n                  <button\r\n                    item-width=\"50\"\r\n                    item-height=\"50\"\r\n                    [routerLink]=\"['/remove_place/' + item.id]\"\r\n                  >\r\n                    X\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/admin/add-place/add-place.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-place/add-place.component.ts ***!
  \********************************************************/
/*! exports provided: AddPlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlaceComponent", function() { return AddPlaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPlaceComponent = /** @class */ (function () {
    function AddPlaceComponent(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.items = [];
    }
    AddPlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint + "/pharmacy/all")
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    AddPlaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-place",
            template: __webpack_require__(/*! ./add-place.component.html */ "./src/app/admin/add-place/add-place.component.html"),
            styles: [__webpack_require__(/*! ./add-place.component.css */ "./src/app/admin/add-place/add-place.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddPlaceComponent);
    return AddPlaceComponent;
}());



/***/ }),

/***/ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/avaliable-medicines/avaliable-medicines.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2F2YWxpYWJsZS1tZWRpY2luZXMvYXZhbGlhYmxlLW1lZGljaW5lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/avaliable-medicines/avaliable-medicines.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <h1>Lista leków dostępna dla tej apteki</h1>\n  <div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"table-container\">\n          <table class=\"table table-filter\">\n            <tbody>\n              <tr *ngFor=\"let item of items\">\n                <td width=\"150\">\n                  <a\n                    [routerLink]=\"['/medicines/item/' + item.id]\"\n                    class=\"pull-left\"\n                  >\n                    <img src=\"/assets/medicine-128.png\" />\n                  </a>\n                </td>\n                <td>\n                  <div class=\"media\">\n                    <div class=\"media-body\">\n                      <span class=\"media-meta pull-right\">{{\n                        item.company\n                      }}</span>\n                      <a [routerLink]=\"['/medicines/item/' + item.id]\">\n                        <h4 class=\"title\">{{ item.name }}</h4>\n                      </a>\n                      <p class=\"summary\">{{ item.shortDescription }}</p>\n                    </div>\n                  </div>\n                </td>\n                <td>\n                  <button\n                    *ngIf=\"isLogged\"\n                    item-width=\"50\"\n                    item-height=\"50\"\n                    [routerLink]=\"['/add_medicine_to_pharmacy/' + pharmacyId + '/' + item.id]\"\n                  >\n                    +\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/avaliable-medicines/avaliable-medicines.component.ts ***!
  \****************************************************************************/
/*! exports provided: AvaliableMedicinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliableMedicinesComponent", function() { return AvaliableMedicinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvaliableMedicinesComponent = /** @class */ (function () {
    function AvaliableMedicinesComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.items = [];
        this.isLogged = JSON.parse(localStorage.getItem("loggedIn"));
        this.pharmacyId = "";
    }
    AvaliableMedicinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("edycja apteki");
        this.route.params.subscribe(function (params) {
            _this.pharmacyId = params["id"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: _this.pharmacyId
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/medicine/available", { params: param })
                .subscribe(function (data) {
                _this.items = data;
            });
        });
    };
    AvaliableMedicinesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-avaliable-medicines",
            template: __webpack_require__(/*! ./avaliable-medicines.component.html */ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.html"),
            styles: [__webpack_require__(/*! ./avaliable-medicines.component.css */ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AvaliableMedicinesComponent);
    return AvaliableMedicinesComponent;
}());



/***/ }),

/***/ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2RlbGV0ZS1tZWRpY2luZS1mcm9tLXBoYXJtYWN5L2RlbGV0ZS1tZWRpY2luZS1mcm9tLXBoYXJtYWN5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-medicine-from-pharmacy works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DeleteMedicineFromPharmacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMedicineFromPharmacyComponent", function() { return DeleteMedicineFromPharmacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteMedicineFromPharmacyComponent = /** @class */ (function () {
    function DeleteMedicineFromPharmacyComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
    }
    DeleteMedicineFromPharmacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            var id2 = params["id2"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: id,
                    id2: id2
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/pharmacy/deletemedicine", { params: param })
                .subscribe(function (data) {
                _this.router.navigate(["/pharmacy/item/" + id]);
            });
        });
    };
    DeleteMedicineFromPharmacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-medicine-from-pharmacy',
            template: __webpack_require__(/*! ./delete-medicine-from-pharmacy.component.html */ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.html"),
            styles: [__webpack_require__(/*! ./delete-medicine-from-pharmacy.component.css */ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DeleteMedicineFromPharmacyComponent);
    return DeleteMedicineFromPharmacyComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-medicine/edit-medicine.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/edit-medicine/edit-medicine.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtbWVkaWNpbmUvZWRpdC1tZWRpY2luZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/edit-medicine/edit-medicine.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/edit-medicine/edit-medicine.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <h1>Edytuj lek</h1>\n  <div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"form\">\n          <form (ngSubmit)=\"onSubmit()\">\n            <div>\n              <label>Nazwa leku: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Nazwa\"\n                [(ngModel)]=\"name\"\n                name=\"name\"\n              />\n            </div>\n            <div>\n              <label>Nazwa producenta: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Producent\"\n                [(ngModel)]=\"company\"\n                name=\"company\"\n              />\n            </div>\n            <div>\n              <label>Opis leku: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Opis\"\n                [(ngModel)]=\"description\"\n                name=\"description\"\n              />\n            </div>\n            <div>\n              <label>Skład: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Skład\"\n                [(ngModel)]=\"composition\"\n                name=\"composition\"\n              />\n            </div> <br />\n            <button type=\"submit\" class=\"btn btn-success\">Zapisz</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/admin/edit-medicine/edit-medicine.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-medicine/edit-medicine.component.ts ***!
  \****************************************************************/
/*! exports provided: EditMedicineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMedicineComponent", function() { return EditMedicineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMedicineComponent = /** @class */ (function () {
    function EditMedicineComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.name = "";
        this.company = "";
        this.description = "";
        this.composition = "";
    }
    EditMedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: id
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/medicine/get", { params: param })
                .subscribe(function (data) {
                (_this.name = data.name),
                    (_this.company = data.company),
                    (_this.description = data.description),
                    (_this.composition = data.composition),
                    (_this.id = data.id);
            });
        });
    };
    EditMedicineComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("edycja leku");
        if (this.name == "" ||
            this.description == "" ||
            this.company == "" ||
            this.composition == "") {
            alert("Pola nie mogą być puste!");
            return;
        }
        var medicine = {
            name: this.name,
            company: this.company,
            description: this.description,
            composition: this.composition,
            id: this.id
        };
        this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/medicine/add", medicine)
            .subscribe(function (data) {
            _this.router.navigate(["/medicines/list"]);
        });
    };
    EditMedicineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-medicine",
            template: __webpack_require__(/*! ./edit-medicine.component.html */ "./src/app/admin/edit-medicine/edit-medicine.component.html"),
            styles: [__webpack_require__(/*! ./edit-medicine.component.css */ "./src/app/admin/edit-medicine/edit-medicine.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditMedicineComponent);
    return EditMedicineComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-place/edit-place.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/edit-place/edit-place.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcGxhY2UvZWRpdC1wbGFjZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/edit-place/edit-place.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/edit-place/edit-place.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <h1>Edytuj aptekę</h1>\n  <div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"form\">\n          <form (ngSubmit)=\"onSubmit()\">\n            <div>\n              <label>Nazwa apteki: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Nazwa\"\n                [(ngModel)]=\"name\"\n                name=\"name\"\n              >\n            </div>\n            <div>\n              <label>Nazwa Firmy: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Firma\"\n                [(ngModel)]=\"company\"\n                name=\"company\"\n              />\n            </div>\n            <div>\n              <label>Opis: </label> <br />\n              <input\n                type=\"text\"\n                placeholder=\"Opis\"\n                [(ngModel)]=\"description\"\n                name=\"description\"\n              />\n            </div>\n            <div>\n              <label>Lat: </label> <br />\n              <input\n                type=\"number\"\n                placeholder=\"Lat\"\n                [(ngModel)]=\"lat\"\n                name=\"Lat\"\n              />\n            </div>\n            <div>\n              <label>Lng: </label> <br />\n              <input\n                type=\"number\"\n                placeholder=\"Lng\"\n                [(ngModel)]=\"lng\"\n                name=\"Lng\"\n              />\n            </div> <br />\n            <button type=\"submit\" class=\"btn btn-success\">Zapisz</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/admin/edit-place/edit-place.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/edit-place/edit-place.component.ts ***!
  \**********************************************************/
/*! exports provided: EditPlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlaceComponent", function() { return EditPlaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditPlaceComponent = /** @class */ (function () {
    function EditPlaceComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.name = "";
        this.company = "";
        this.description = "";
        this.lat = "";
        this.lng = "";
    }
    EditPlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("edycja apteki");
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: id
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/pharmacy/get", { params: param })
                .subscribe(function (data) {
                (_this.name = data.name),
                    (_this.company = data.company),
                    (_this.description = data.description),
                    (_this.lat = data.lat),
                    (_this.lng = data.lon);
                _this.id = data.id;
            });
        });
    };
    EditPlaceComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("edycja apteki");
        if (this.name == "" ||
            this.description == "" ||
            this.company == "" ||
            this.lat == "" ||
            this.lng == "" ||
            this.description == "") {
            alert("Pola nie mogą być puste!");
            return;
        }
        var pharmacy = {
            id: this.id,
            name: this.name,
            company: this.company,
            description: this.description,
            lat: this.lat,
            lon: this.lng
        };
        this.httpClient
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/pharmacy/add", pharmacy)
            .subscribe(function (data) {
            _this.router.navigate(["/add_place"]);
        });
    };
    EditPlaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-place",
            template: __webpack_require__(/*! ./edit-place.component.html */ "./src/app/admin/edit-place/edit-place.component.html"),
            styles: [__webpack_require__(/*! ./edit-place.component.css */ "./src/app/admin/edit-place/edit-place.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditPlaceComponent);
    return EditPlaceComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #4CAF50;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #43A047;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n\r\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;      \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnRUFBZ0U7O0FBRWhFO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkVBQTJFO0NBQzVFOztBQUNEO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUVoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0NBQ3ZCOztBQUNEO0VBQ0UsY0FBYztDQUNmOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtDQUNiOztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLGVBQWU7RUFDZixzQkFBc0I7Q0FDdkI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0Usb0JBQW9CLENBQUMsK0JBQStCO0VBSXBELHVEQUF1RDtFQUN2RCxrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLG1DQUFtQztDQUNwQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XHJcblxyXG4ubG9naW4tcGFnZSB7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIHBhZGRpbmc6IDglIDAgMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICBtYXJnaW46IDAgYXV0byAxMDBweDtcclxuICBwYWRkaW5nOiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZvcm0gYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ybSBidXR0b246aG92ZXIsLmZvcm0gYnV0dG9uOmFjdGl2ZSwuZm9ybSBidXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM0M0EwNDc7XHJcbn1cclxuLmZvcm0gLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3JtIC5tZXNzYWdlIGEge1xyXG4gIGNvbG9yOiAjNENBRjUwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9ybSAucmVnaXN0ZXItZm9ybSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5jb250YWluZXIgLmluZm8ge1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIGgxIHtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMxYTFhMWE7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIHtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIC5pbmZvIHNwYW4gLmZhIHtcclxuICBjb2xvcjogI0VGM0IzQTtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjNzZiODUyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJpZ2h0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyAgICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"form\">\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n      <input type=\"text\" placeholder=\"username\" [(ngModel)]=\"login\" name=\"login\"/>\r\n      <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\"/>\r\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
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
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.login = "";
        this.password = "";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function () {
        console.log("logownaie");
        if (this.login == "admin" && this.password == "admin") {
            localStorage.setItem("loggedIn", "true");
            this.router.navigate(["/add_medicine"]);
            location.reload();
        }
        else {
            window.alert("nieprawidłowe dane do logowania");
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/remove-medicine/remove-medicine.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/remove-medicine/remove-medicine.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlbW92ZS1tZWRpY2luZS9yZW1vdmUtbWVkaWNpbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/remove-medicine/remove-medicine.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/remove-medicine/remove-medicine.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  remove-medicine works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/remove-medicine/remove-medicine.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/remove-medicine/remove-medicine.component.ts ***!
  \********************************************************************/
/*! exports provided: RemoveMedicineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveMedicineComponent", function() { return RemoveMedicineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemoveMedicineComponent = /** @class */ (function () {
    function RemoveMedicineComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
    }
    RemoveMedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: id
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/medicine/delete", { params: param })
                .subscribe(function (data) {
                _this.router.navigate(["/medicines/list"]);
            });
        });
    };
    RemoveMedicineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-remove-medicine",
            template: __webpack_require__(/*! ./remove-medicine.component.html */ "./src/app/admin/remove-medicine/remove-medicine.component.html"),
            styles: [__webpack_require__(/*! ./remove-medicine.component.css */ "./src/app/admin/remove-medicine/remove-medicine.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RemoveMedicineComponent);
    return RemoveMedicineComponent;
}());



/***/ }),

/***/ "./src/app/admin/remove-place/remove-place.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/remove-place/remove-place.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlbW92ZS1wbGFjZS9yZW1vdmUtcGxhY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/remove-place/remove-place.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/remove-place/remove-place.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  remove-place works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/remove-place/remove-place.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/remove-place/remove-place.component.ts ***!
  \**************************************************************/
/*! exports provided: RemovePlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePlaceComponent", function() { return RemovePlaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemovePlaceComponent = /** @class */ (function () {
    function RemovePlaceComponent(httpClient, route, router) {
        this.httpClient = httpClient;
        this.route = route;
        this.router = router;
    }
    RemovePlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params["id"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    id: id
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "/pharmacy/delete", { params: param })
                .subscribe(function (data) {
                _this.router.navigate(["/add_place"]);
            });
        });
    };
    RemovePlaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-remove-place",
            template: __webpack_require__(/*! ./remove-place.component.html */ "./src/app/admin/remove-place/remove-place.component.html"),
            styles: [__webpack_require__(/*! ./remove-place.component.css */ "./src/app/admin/remove-place/remove-place.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RemovePlaceComponent);
    return RemovePlaceComponent;
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
/* harmony import */ var _medicines_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicines/list/list.component */ "./src/app/medicines/list/list.component.ts");
/* harmony import */ var _medicines_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicines/item/item.component */ "./src/app/medicines/item/item.component.ts");
/* harmony import */ var _pharmacy_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pharmacy/item/item.component */ "./src/app/pharmacy/item/item.component.ts");
/* harmony import */ var _medicines_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicines/search/search.component */ "./src/app/medicines/search/search.component.ts");
/* harmony import */ var _global_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/main/main.component */ "./src/app/global/main/main.component.ts");
/* harmony import */ var _global_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/about/about.component */ "./src/app/global/about/about.component.ts");
/* harmony import */ var _global_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/contact/contact.component */ "./src/app/global/contact/contact.component.ts");
/* harmony import */ var _global_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/map/map.component */ "./src/app/global/map/map.component.ts");
/* harmony import */ var _admin_add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/add-medicine/add-medicine.component */ "./src/app/admin/add-medicine/add-medicine.component.ts");
/* harmony import */ var _admin_add_place_add_place_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/add-place/add-place.component */ "./src/app/admin/add-place/add-place.component.ts");
/* harmony import */ var _admin_remove_place_remove_place_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/remove-place/remove-place.component */ "./src/app/admin/remove-place/remove-place.component.ts");
/* harmony import */ var _admin_remove_medicine_remove_medicine_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/remove-medicine/remove-medicine.component */ "./src/app/admin/remove-medicine/remove-medicine.component.ts");
/* harmony import */ var _admin_edit_place_edit_place_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/edit-place/edit-place.component */ "./src/app/admin/edit-place/edit-place.component.ts");
/* harmony import */ var _admin_edit_medicine_edit_medicine_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/edit-medicine/edit-medicine.component */ "./src/app/admin/edit-medicine/edit-medicine.component.ts");
/* harmony import */ var _admin_avaliable_medicines_avaliable_medicines_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/avaliable-medicines/avaliable-medicines.component */ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.ts");
/* harmony import */ var _admin_add_medicine_to_pharmacy_add_medicine_to_pharmacy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component */ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.ts");
/* harmony import */ var _admin_delete_medicine_from_pharmacy_delete_medicine_from_pharmacy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component */ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_service_login__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.service_login */ "./src/app/auth.service_login.ts");
/* harmony import */ var _admin_add_pharmacy_add_pharmacy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/add-pharmacy/add-pharmacy.component */ "./src/app/admin/add-pharmacy/add-pharmacy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    { path: '', component: _global_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'medicines', component: null,
        children: [
            { path: 'list', component: _medicines_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] },
            { path: 'search', component: _medicines_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
            { path: 'item/:id', component: _medicines_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] },
        ]
    },
    { path: 'pharmacy', component: null,
        children: [
            { path: 'item/:id', component: _pharmacy_item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"] },
        ]
    },
    { path: 'about', component: _global_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'contact', component: _global_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'map', component: _global_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"] },
    { path: 'login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], canActivate: [_auth_service_login__WEBPACK_IMPORTED_MODULE_21__["AuthGuardServiceLogin"]] },
    { path: 'add_medicine', component: _admin_add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_10__["AddMedicineComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'add_place', component: _admin_add_place_add_place_component__WEBPACK_IMPORTED_MODULE_11__["AddPlaceComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'remove_place/:id', component: _admin_remove_place_remove_place_component__WEBPACK_IMPORTED_MODULE_12__["RemovePlaceComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'remove_medicine/:id', component: _admin_remove_medicine_remove_medicine_component__WEBPACK_IMPORTED_MODULE_13__["RemoveMedicineComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'edit_place/:id', component: _admin_edit_place_edit_place_component__WEBPACK_IMPORTED_MODULE_14__["EditPlaceComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'edit_medicine/:id', component: _admin_edit_medicine_edit_medicine_component__WEBPACK_IMPORTED_MODULE_15__["EditMedicineComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'avaliable_medicines/:id', component: _admin_avaliable_medicines_avaliable_medicines_component__WEBPACK_IMPORTED_MODULE_16__["AvaliableMedicinesComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'add_medicine_to_pharmacy/:id/:id2', component: _admin_add_medicine_to_pharmacy_add_medicine_to_pharmacy_component__WEBPACK_IMPORTED_MODULE_17__["AddMedicineToPharmacyComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'delete_medicine_from_pharmacy/:id/:id2', component: _admin_delete_medicine_from_pharmacy_delete_medicine_from_pharmacy_component__WEBPACK_IMPORTED_MODULE_18__["DeleteMedicineFromPharmacyComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: 'add_pharmacy', component: _admin_add_pharmacy_add_pharmacy_component__WEBPACK_IMPORTED_MODULE_22__["AddPharmacyComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]] },
    { path: '**', redirectTo: '' }
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

module.exports = "<div class=\"container\">\r\n  <div class=\"header clearfix\">\r\n    <nav>\r\n      <ul class=\"nav nav-pills float-right\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" [routerLink]=\"['/']\"\r\n            >Home <span class=\"sr-only\">(current)</span></a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/add_place']\">Zarządzaj aptekami</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/medicines/list']\">Zarządzaj lekami</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/map']\">Map</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Zarządzaj</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\r\n          <a class=\"nav-link\" [routerLink]=\"\" (click)=\"myEvent()\">Wyloguj</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <h3 class=\"text-muted\">Apteczka</h3>\r\n  </div>\r\n  <div><router-outlet></router-outlet></div>\r\n\r\n  <footer class=\"footer\"><p>&copy; Apteczkowo 2018</p></footer>\r\n</div>\r\n<!-- /container -->\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = "Apteczka-Front";
        this.isLogged = JSON.parse(localStorage.getItem("loggedIn"));
    }
    AppComponent.prototype.myEvent = function () {
        console.log("wylogowane");
        localStorage.setItem("loggedIn", "false");
        this.router.navigate(["/main"]);
        location.reload();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _medicines_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicines/list/list.component */ "./src/app/medicines/list/list.component.ts");
/* harmony import */ var _medicines_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./medicines/search/search.component */ "./src/app/medicines/search/search.component.ts");
/* harmony import */ var _medicines_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./medicines/item/item.component */ "./src/app/medicines/item/item.component.ts");
/* harmony import */ var _pharmacy_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pharmacy/item/item.component */ "./src/app/pharmacy/item/item.component.ts");
/* harmony import */ var _global_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/main/main.component */ "./src/app/global/main/main.component.ts");
/* harmony import */ var _global_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/about/about.component */ "./src/app/global/about/about.component.ts");
/* harmony import */ var _global_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global/contact/contact.component */ "./src/app/global/contact/contact.component.ts");
/* harmony import */ var _global_map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/map/map.component */ "./src/app/global/map/map.component.ts");
/* harmony import */ var _admin_add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/add-medicine/add-medicine.component */ "./src/app/admin/add-medicine/add-medicine.component.ts");
/* harmony import */ var _admin_add_place_add_place_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/add-place/add-place.component */ "./src/app/admin/add-place/add-place.component.ts");
/* harmony import */ var _admin_remove_place_remove_place_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/remove-place/remove-place.component */ "./src/app/admin/remove-place/remove-place.component.ts");
/* harmony import */ var _admin_remove_medicine_remove_medicine_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/remove-medicine/remove-medicine.component */ "./src/app/admin/remove-medicine/remove-medicine.component.ts");
/* harmony import */ var _admin_edit_place_edit_place_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/edit-place/edit-place.component */ "./src/app/admin/edit-place/edit-place.component.ts");
/* harmony import */ var _admin_edit_medicine_edit_medicine_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/edit-medicine/edit-medicine.component */ "./src/app/admin/edit-medicine/edit-medicine.component.ts");
/* harmony import */ var _admin_avaliable_medicines_avaliable_medicines_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/avaliable-medicines/avaliable-medicines.component */ "./src/app/admin/avaliable-medicines/avaliable-medicines.component.ts");
/* harmony import */ var _admin_add_medicine_to_pharmacy_add_medicine_to_pharmacy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component */ "./src/app/admin/add-medicine-to-pharmacy/add-medicine-to-pharmacy.component.ts");
/* harmony import */ var _admin_delete_medicine_from_pharmacy_delete_medicine_from_pharmacy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component */ "./src/app/admin/delete-medicine-from-pharmacy/delete-medicine-from-pharmacy.component.ts");
/* harmony import */ var _admin_add_pharmacy_add_pharmacy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/add-pharmacy/add-pharmacy.component */ "./src/app/admin/add-pharmacy/add-pharmacy.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_service_login__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.service_login */ "./src/app/auth.service_login.ts");
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
                _medicines_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _medicines_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _global_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _global_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _global_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _global_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                _admin_add_medicine_add_medicine_component__WEBPACK_IMPORTED_MODULE_14__["AddMedicineComponent"],
                _admin_add_place_add_place_component__WEBPACK_IMPORTED_MODULE_15__["AddPlaceComponent"],
                _admin_remove_place_remove_place_component__WEBPACK_IMPORTED_MODULE_16__["RemovePlaceComponent"],
                _admin_remove_medicine_remove_medicine_component__WEBPACK_IMPORTED_MODULE_17__["RemoveMedicineComponent"],
                _admin_edit_place_edit_place_component__WEBPACK_IMPORTED_MODULE_18__["EditPlaceComponent"],
                _admin_edit_medicine_edit_medicine_component__WEBPACK_IMPORTED_MODULE_19__["EditMedicineComponent"],
                _admin_avaliable_medicines_avaliable_medicines_component__WEBPACK_IMPORTED_MODULE_20__["AvaliableMedicinesComponent"],
                _admin_add_medicine_to_pharmacy_add_medicine_to_pharmacy_component__WEBPACK_IMPORTED_MODULE_21__["AddMedicineToPharmacyComponent"],
                _admin_delete_medicine_from_pharmacy_delete_medicine_from_pharmacy_component__WEBPACK_IMPORTED_MODULE_22__["DeleteMedicineFromPharmacyComponent"],
                _admin_add_pharmacy_add_pharmacy_component__WEBPACK_IMPORTED_MODULE_23__["AddPharmacyComponent"],
                _admin_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
                _medicines_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
                _pharmacy_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"], _auth_service_login__WEBPACK_IMPORTED_MODULE_26__["AuthGuardServiceLogin"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
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

var AuthGuardService = /** @class */ (function () {
    function AuthGuardService() {
    }
    AuthGuardService.prototype.canActivate = function () {
        return JSON.parse(localStorage.getItem("loggedIn"));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service_login.ts":
/*!***************************************!*\
  !*** ./src/app/auth.service_login.ts ***!
  \***************************************/
/*! exports provided: AuthGuardServiceLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardServiceLogin", function() { return AuthGuardServiceLogin; });
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


var AuthGuardServiceLogin = /** @class */ (function () {
    function AuthGuardServiceLogin(route, router) {
        this.route = route;
        this.router = router;
    }
    AuthGuardServiceLogin.prototype.canActivate = function () {
        if (JSON.parse(localStorage.getItem("loggedIn"))) {
            this.router.navigate(["/add_place"]);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardServiceLogin = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardServiceLogin);
    return AuthGuardServiceLogin;
}());



/***/ }),

/***/ "./src/app/global/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/global/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/global/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/global/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Projekt Apteczka służy do zarządzania siecią aptek. Pozwala na kontrolę leków\r\n  w aptece i kontrolę placówek w sieci.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/global/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/global/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/global/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/global/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/global/contact/contact.component.css":
/*!******************************************************!*\
  !*** ./src/app/global/contact/contact.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/global/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/app/global/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    Administrator strony Łukasz Lipny:\r\n    <a [routerLink]=\"\">l.lipny@apteczka.pl</a>\r\n  </div>\r\n  <div>Biuro obsługi klienta: <a [routerLink]=\"\">biuro@apteczka.pl</a></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/global/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/global/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/global/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/global/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/global/main/main.component.css":
/*!************************************************!*\
  !*** ./src/app/global/main/main.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/global/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/global/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"jumbotron\">\r\n    <h1 class=\"display-3\">Potęga leczenia</h1>\r\n    <p class=\"lead\">\r\n      Często nie zdajemy sobie sprawy, jak ciekawy i niezwykły jest świat\r\n      dookoła. Spójrzmy, na zwykłe lekarstwa, pozwalają one poprawiać stan\r\n      zdrowia, likwidować infekcje i wiele innych. W Naszej sieci aptek\r\n      znajdziesz pigułki dobrane do swoich potrzeb.\r\n    </p>\r\n    <p>\r\n      <a\r\n        class=\"btn btn-lg btn-success\"\r\n        [routerLink]=\"['/medicines/list']\"\r\n        role=\"button\"\r\n        >Sprawdź ofertę</a\r\n      >\r\n    </p>\r\n    <p>\r\n      <a\r\n        class=\"btn btn-lg btn-success\"\r\n        [routerLink]=\"['/medicines/search']\"\r\n        role=\"button\"\r\n        >Wyszukaj</a\r\n      >\r\n    </p>\r\n  </div>"

/***/ }),

/***/ "./src/app/global/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/global/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/global/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/global/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/global/map/map.component.css":
/*!**********************************************!*\
  !*** ./src/app/global/map/map.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9tYXAvbWFwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/global/map/map.component.html":
/*!***********************************************!*\
  !*** ./src/app/global/map/map.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" class=\"map\">\r\n</div>\r\n<div *ngIf=\"selectedObject != null\">\r\n    Name: {{selectedObject.name}}<br/>\r\n    <a [routerLink]=\"['/pharmacy/item/' + selectedObject.id]\">Go to pharmacy</a>\r\n</div>"

/***/ }),

/***/ "./src/app/global/map/map.component.ts":
/*!*********************************************!*\
  !*** ./src/app/global/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/XYZ */ "./node_modules/ol/source/XYZ.js");
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import TileLayer from 'ol/layer/Tile';







var MapComponent = /** @class */ (function () {
    function MapComponent(httpClient) {
        this.httpClient = httpClient;
        this.selectedObject = null;
        this.objects = [];
    }
    MapComponent.prototype.createMarkers = function () {
        var iconStyle = new ol_style__WEBPACK_IMPORTED_MODULE_8__["Style"]({
            image: new ol_style__WEBPACK_IMPORTED_MODULE_8__["Icon"](/** @type {module:ol/style/Icon~Options} */ ({
                anchor: [12, 12],
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                src: '/assets/plus-5-24.png'
            }))
        });
        var features = [];
        for (var i = 0; i < this.objects.length; i++) {
            var obj = this.objects[i];
            var iconFeature = new ol__WEBPACK_IMPORTED_MODULE_5__["Feature"]({
                geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_6__["Point"](Object(ol_proj__WEBPACK_IMPORTED_MODULE_9__["fromLonLat"])([obj.lon, obj.lat])),
                object: obj,
            });
            iconFeature.setStyle(iconStyle);
            features.push(iconFeature);
        }
        var vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_7__["default"]({
            features: features
        });
        var vectorLayer = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["Vector"]({
            source: vectorSource
        });
        this.map.addLayer(vectorLayer);
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_4__["default"]({
            url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            //url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        });
        this.layer = new ol_layer__WEBPACK_IMPORTED_MODULE_3__["Tile"]({
            source: this.source
        });
        this.view = new ol__WEBPACK_IMPORTED_MODULE_5__["View"]({
            center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_9__["fromLonLat"])([21.017532, 52.237049]),
            zoom: 5
        });
        this.map = new ol__WEBPACK_IMPORTED_MODULE_5__["Map"]({
            target: 'map',
            layers: [this.layer],
            view: this.view
        });
        var $this = this;
        this.map.on('click', function (evt) {
            var feature = this.forEachFeatureAtPixel(evt.pixel, function (f) { return f; });
            if (feature) {
                $this.selectedObject = feature.get('object');
            }
            else {
                $this.selectedObject = null;
            }
        });
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + '/pharmacy/all').subscribe(function (data) {
            _this.objects = data;
            _this.createMarkers();
        });
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/global/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/global/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/medicines/item/item.component.css":
/*!***************************************************!*\
  !*** ./src/app/medicines/item/item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lcy9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/medicines/item/item.component.html":
/*!****************************************************!*\
  !*** ./src/app/medicines/item/item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <img src=\"/assets/medicine-128.png\" />\r\n      <div class=\"media\">\r\n        <div class=\"media-body\">\r\n          <span class=\"media-meta pull-right\">{{medicine.company}}</span>\r\n          <h4 class=\"title\">{{medicine.name}}</h4>\r\n          <p class=\"summary\">{{medicine.description}}</p>\r\n          <p class=\"summary\">Skład: {{medicine.composition}}</p>\r\n          Dostępne w:\r\n          <span *ngFor=\"let item of medicine.pharmacies\">\r\n            <a [routerLink]=\"['/pharmacy/item/'+item.id]\">{{ item.name }}</a>&nbsp;\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/medicines/item/item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/medicines/item/item.component.ts ***!
  \**************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = /** @class */ (function () {
    function ItemComponent(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.medicine = {};
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    id: id,
                }
            });
            _this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + '/medicine/get', { params: param }).subscribe(function (data) {
                _this.medicine = data;
            });
        });
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/medicines/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/medicines/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/medicines/list/list.component.css":
/*!***************************************************!*\
  !*** ./src/app/medicines/list/list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lcy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/medicines/list/list.component.html":
/*!****************************************************!*\
  !*** ./src/app/medicines/list/list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n   <h1>Medicine list</h1>\r\n   <div class=\"col-md-8 col-md-offset-2\">\r\n      <a class=\"nav-link\" *ngIf=\"isLogged\" [routerLink]=\"['/add_medicine']\">Dodaj lek</a>\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-body\">\r\n            <div class=\"table-container\">\r\n               <table class=\"table table-filter\">\r\n                  <tbody>\r\n                     <tr *ngFor=\"let item of items\">\r\n                        <td width=\"150\">\r\n                           <a [routerLink]=\"['/medicines/item/'+item.id]\" class=\"pull-left\">\r\n                              <img src=\"/assets/medicine-128.png\" />\r\n                           </a>\r\n                        </td>\r\n                        <td>\r\n                           <div class=\"media\">\r\n                              <div class=\"media-body\">\r\n                                 <span class=\"media-meta pull-right\">{{item.company}}</span>\r\n                                 <a [routerLink]=\"['/medicines/item/'+item.id]\">\r\n                                    <h4 class=\"title\">{{item.name}}</h4>\r\n                                 </a>\r\n                                 <p class=\"summary\">{{item.shortDescription}}</p>\r\n                              </div>\r\n                           </div>\r\n                        </td>\r\n                        <td>\r\n                           <button\r\n                             *ngIf=\"isLogged\"\r\n                             item-width=\"50\"\r\n                             item-height=\"50\"\r\n                             [routerLink]=\"['/edit_medicine/' + item.id]\"\r\n                           >\r\n                             Edytuj\r\n                           </button>\r\n                         </td>\r\n                         <td>\r\n                           <button\r\n                             *ngIf=\"isLogged\"\r\n                             item-width=\"50\"\r\n                             item-height=\"50\"\r\n                             [routerLink]=\"['/remove_medicine/' + item.id]\"\r\n                           >\r\n                             X\r\n                           </button>\r\n                         </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>"

/***/ }),

/***/ "./src/app/medicines/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/medicines/list/list.component.ts ***!
  \**************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(httpClient) {
        this.httpClient = httpClient;
        this.items = [];
        this.isLogged = JSON.parse(localStorage.getItem("loggedIn"));
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + '/medicine/all').subscribe(function (data) {
            _this.items = data;
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/medicines/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/medicines/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/medicines/search/search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/medicines/search/search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/medicines/search/search.component.html":
/*!********************************************************!*\
  !*** ./src/app/medicines/search/search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n   <h1>Medicine search</h1>\r\n   <div class=\"col-md-8 col-md-offset-2\">\r\n   <div class=\"input-group\">\r\n\t\t<input type=\"text\" class=\"form-control\"  placeholder=\"Search\" [(ngModel)]=\"searchText\" (keyup)=\"search()\"/>\r\n        <button class=\"btn\" (click)=\"search()\">Search</button>\r\n      </div>\r\n      <div class=\"panel panel-default\">\r\n         <div class=\"panel-body\">\r\n            <div class=\"table-container\">\r\n               <table class=\"table table-filter\">\r\n                  <tbody>\r\n                     <tr *ngFor=\"let item of items\">\r\n                        <td width=\"150\">\r\n                           <a [routerLink]=\"['/medicines/item/'+item.id]\" class=\"pull-left\">\r\n                           <img src=\"/assets/medicine-128.png\"/>\r\n                           </a>\r\n                        </td>\r\n                        <td>\r\n                           <div class=\"media\">\r\n                              <div class=\"media-body\">\r\n                                 <span class=\"media-meta pull-right\">{{item.company}}</span>\r\n                                 <a [routerLink]=\"['/medicines/item/'+item.id]\"><h4 class=\"title\">{{item.name}}</h4></a>\r\n                                 <p class=\"summary\">{{item.shortDescription}}</p>\r\n                              </div>\r\n                           </div>\r\n                        </td>\r\n                     </tr>\r\n                  </tbody>\r\n               </table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/medicines/search/search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/medicines/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpClient) {
        this.httpClient = httpClient;
        this.searchText = '';
        this.items = [];
    }
    SearchComponent.prototype.search = function () {
        var _this = this;
        var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                text: this.searchText,
            }
        });
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + '/medicine/search', { params: param }).subscribe(function (data) {
            _this.items = data;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/medicines/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/medicines/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pharmacy/item/item.component.css":
/*!**************************************************!*\
  !*** ./src/app/pharmacy/item/item.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoYXJtYWN5L2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pharmacy/item/item.component.html":
/*!***************************************************!*\
  !*** ./src/app/pharmacy/item/item.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <h1>Details</h1>\r\n  Apteka: {{ pharmacy.name }}<br />\r\n  <h2>Lista leków dostępnych w aptece</h2>\r\n  <div class=\"col-md-8 col-md-offset-2\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/avaliable_medicines/' + pharmacy.id]\" *ngIf=\"isLogged\">Dodaj lek</a>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-container\">\r\n          <table class=\"table table-filter\">\r\n            <tbody>\r\n              <tr *ngFor=\"let item of pharmacy.medicines\">\r\n                <td width=\"150\">\r\n                  <a\r\n                    [routerLink]=\"['/medicines/item/' + item.id]\"\r\n                    class=\"pull-left\"\r\n                  >\r\n                    <img src=\"/assets/medicine-128.png\" />\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <div class=\"media\">\r\n                    <div class=\"media-body\">\r\n                      <span class=\"media-meta pull-right\">{{\r\n                        item.company\r\n                      }}</span>\r\n                      <a [routerLink]=\"['/medicines/item/' + item.id]\">\r\n                        <h4 class=\"title\">{{ item.name }}</h4>\r\n                      </a>\r\n                      <p class=\"summary\">{{ item.shortDescription }}</p>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <button item-width=\"50\" item-height=\"50\" *ngIf=\"isLogged\" [routerLink]=\"['/delete_medicine_from_pharmacy/'+ pharmacy.id +'/'+ item.id]\">\r\n                    X\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pharmacy/item/item.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pharmacy/item/item.component.ts ***!
  \*************************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemComponent = /** @class */ (function () {
    function ItemComponent(httpClient, route) {
        this.httpClient = httpClient;
        this.route = route;
        this.isLogged = JSON.parse(localStorage.getItem("loggedIn"));
        this.pharmacId = "";
        this.pharmacy = {};
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pharmacId = params["id"];
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    id: _this.pharmacId
                }
            });
            _this.httpClient
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint + "/pharmacy/get", { params: param })
                .subscribe(function (data) {
                _this.pharmacy = data;
            });
        });
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-item",
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/pharmacy/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/pharmacy/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
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
    apiEndpoint: 'http://localhost:8080/api'
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

module.exports = __webpack_require__(/*! C:\Users\kacper.staniszewski\Desktop\ApteczkaSpring\Apteczka\Apteczka-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map