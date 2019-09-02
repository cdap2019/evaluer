webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n<!-- <hr> -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_land_price_land_price_component__ = __webpack_require__("../../../../../src/app/components/land-price/land-price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_futureprediction_futureprediction_component__ = __webpack_require__("../../../../../src/app/components/futureprediction/futureprediction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_addLand_service__ = __webpack_require__("../../../../../src/app/services/addLand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_prediction_prediction_component__ = __webpack_require__("../../../../../src/app/components/prediction/prediction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_starrating__ = __webpack_require__("../../../../ng-starrating/fesm5/ng-starrating.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'prediction', component: __WEBPACK_IMPORTED_MODULE_22__components_prediction_prediction_component__["a" /* PredictionComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'landprice', component: __WEBPACK_IMPORTED_MODULE_12__components_land_price_land_price_component__["a" /* LandPriceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'futureprediction', component: __WEBPACK_IMPORTED_MODULE_14__components_futureprediction_futureprediction_component__["a" /* FuturePrediction */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_land_price_land_price_component__["a" /* LandPriceComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_prediction_prediction_component__["a" /* PredictionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_futureprediction_futureprediction_component__["a" /* FuturePrediction */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_24_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_23_ng_starrating__["a" /* RatingModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDhoZamzj5fd26T7qbetCYKfSBBfQq0YEs',
                    libraries: ['places']
                    /* apiKey is required, unless you are a
                    premium customer, in which case you can
                    use clientId
                    */
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__services_addLand_service__["a" /* AddLandService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding:70px \r\n}\r\nagm-map { height: 300px; /* height is required */ }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 class=\"text-center\">Enter your land information</h3>\r\n    <form [formGroup]=\"angForm\" novalidate >\r\n        <div class=\"row\"> \r\n            <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"price\">Price:</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"Price\" formControlName=\"price\" #price >\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['price'].errors.required\">\r\n                      Price is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"distance\">Distance to nearest bus route:</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"Distance\" formControlName=\"distance\" #distance>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['distance'].invalid && (angForm.controls['distance'].dirty || angForm.controls['distance'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['distance'].errors.required\">\r\n                      Distance is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"route\">Nearest bus route:</label>\r\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"Route\" formControlName=\"route\" #route>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['route'].invalid && (angForm.controls['route'].dirty || angForm.controls['route'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['route'].errors.required\">\r\n                      Route is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"aindex\">Accessbility index:</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"Index\" formControlName=\"aindex\" #aindex>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['aindex'].invalid && (angForm.controls['aindex'].dirty || angForm.controls['aindex'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['aindex'].errors.required\">\r\n                      Index is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                        <label for=\"province\">Province:</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Province\" formControlName=\"province\" #province>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['province'].invalid && (angForm.controls['province'].dirty || angForm.controls['province'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['province'].errors.required\">\r\n                      Province is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"district\">District:</label>\r\n                    <input type=\"text\"  class=\"form-control\" placeholder=\"District\" formControlName=\"district\" #district>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['district'].invalid && (angForm.controls['district'].dirty || angForm.controls['district'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['district'].errors.required\">\r\n                        District is required.\r\n                    </div>\r\n                </div>\r\n                <button (click)=\"addLandInfo(price.value, distance.value, route.value, aindex.value, province.value, district.value, address.value, lat.value, lon.value)\"  class=\"btn btn-success btn-block\" [disabled]=\"angForm.pristine || angForm.invalid\"  >Submit</button>\r\n            </div>\r\n            <div class=\"col\"> \r\n                <div class=\"form-group\">\r\n                    <label for=\"address\">Address</label>\r\n                    <input type=\"text\"  class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" \r\n                    placeholder=\"Search Nearest Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" formControlName=\"address\" #address>\r\n                </div>\r\n                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\r\n                    (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n                </agm-map>\r\n                <div class=\"form-group\">\r\n                    <label for=\"lat\">Latitude:</label>\r\n                    <input type=\"number\" class=\"form-control\" [value]=\"latitude\" placeholder=\"\" formControlName=\"lat\" #lat>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['lat'].invalid && (angForm.controls['lat'].dirty || angForm.controls['lat'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['lat'].errors.required\">\r\n                        Latitude is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label  for=\"lon\">Longitude:</label>\r\n                    <input type=\"number\" class=\"form-control\"  [value]=\"longitude\"  placeholder=\"\" formControlName=\"lon\" #lon>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['lon'].invalid && (angForm.controls['lon'].dirty || angForm.controls['lon'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['lon'].errors.required\">\r\n                        Longitude is required.\r\n                    </div>\r\n                </div>\r\n             \r\n            </div>\r\n        </div>    \r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_addLand_service__ = __webpack_require__("../../../../../src/app/services/addLand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(mapsAPILoader, ngZone, fb, addLandService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.fb = fb;
        this.addLandService = addLandService;
        this.router = router;
        this.title = 'AGM project';
        this.user = localStorage.getItem('user');
        this.userId = JSON.parse(this.user);
        this.createForm();
        // var test = JSON.parse(this.user);
        // console.log(test.id);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"], componentRestrictions: { country: 'lk' }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    // Get Current Location Coordinates
    DashboardComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
                _this.getAddress(_this.latitude, _this.longitude);
            });
        }
    };
    DashboardComponent.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    DashboardComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    DashboardComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            distance: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            route: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            aindex: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            province: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            district: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            lat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            lon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    DashboardComponent.prototype.addLandInfo = function (price, distance, route, aindex, province, district, address, lat, lon) {
        var id = this.userId.id;
        console.log(id);
        this.addLandService.addLand(id, price, distance, route, aindex, province, district, address, lat, lon);
        this.router.navigate(['/profile']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DashboardComponent.prototype, "searchElementRef", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_addLand_service__["a" /* AddLandService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-footer\r\n{\r\n  background-color:#26272b;\r\n  padding:45px 0 20px;\r\n  font-size:15px;\r\n  line-height:24px;\r\n  color:#737373;\r\n}\r\n.site-footer hr\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\r\n}\r\n.site-footer hr.small\r\n{\r\n  margin:20px 0\r\n}\r\n.site-footer h6\r\n{\r\n  color:#fff;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\r\n}\r\n.site-footer a\r\n{\r\n  color:#737373;\r\n}\r\n.site-footer a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links\r\n{\r\n  padding-left:0;\r\n  list-style:none\r\n}\r\n.footer-links li\r\n{\r\n  display:block\r\n}\r\n.footer-links a\r\n{\r\n  color:#737373\r\n}\r\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links.inline li\r\n{\r\n  display:inline-block\r\n}\r\n.site-footer .social-icons\r\n{\r\n  text-align:right\r\n}\r\n.site-footer .social-icons a\r\n{\r\n  width:40px;\r\n  height:40px;\r\n  line-height:40px;\r\n  margin-left:6px;\r\n  margin-right:0;\r\n  border-radius:100%;\r\n  background-color:#33353d\r\n}\r\n.copyright-text\r\n{\r\n  margin:0\r\n}\r\n@media (max-width:991px)\r\n{\r\n  .site-footer [class^=col-]\r\n  {\r\n    margin-bottom:30px\r\n  }\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .site-footer\r\n  {\r\n    padding-bottom:0\r\n  }\r\n  .site-footer .copyright-text,.site-footer .social-icons\r\n  {\r\n    text-align:center\r\n  }\r\n}\r\n.social-icons\r\n{\r\n  padding-left:0;\r\n  margin-bottom:0;\r\n  list-style:none\r\n}\r\n.social-icons li\r\n{\r\n  display:inline-block;\r\n  margin-bottom:4px\r\n}\r\n.social-icons li.title\r\n{\r\n  margin-right:15px;\r\n  text-transform:uppercase;\r\n  color:#96a2b2;\r\n  font-weight:700;\r\n  font-size:13px\r\n}\r\n.social-icons a{\r\n  background-color:#eceeef;\r\n  color:#818a91;\r\n  font-size:16px;\r\n  display:inline-block;\r\n  line-height:44px;\r\n  width:44px;\r\n  height:44px;\r\n  text-align:center;\r\n  margin-right:8px;\r\n  border-radius:100%;\r\n  transition:all .2s linear\r\n}\r\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\r\n{\r\n  color:#fff;\r\n  background-color:#29aafe\r\n}\r\n.social-icons.size-sm a\r\n{\r\n  line-height:34px;\r\n  height:34px;\r\n  width:34px;\r\n  font-size:14px\r\n}\r\n.social-icons a.facebook:hover\r\n{\r\n  background-color:#3b5998\r\n}\r\n.social-icons a.twitter:hover\r\n{\r\n  background-color:#00aced\r\n}\r\n.social-icons a.linkedin:hover\r\n{\r\n  background-color:#007bb6\r\n}\r\n.social-icons a.dribbble:hover\r\n{\r\n  background-color:#ea4c89\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .social-icons li.title\r\n  {\r\n    display:block;\r\n    margin-right:0;\r\n    font-weight:600\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <footer class=\"site-footer\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-6\">\r\n          <h6>About</h6>\r\n          <p class=\"text-justify\">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>\r\n        </div>\r\n\r\n        <div class=\"col-xs-6 col-md-3\">\r\n          <h6>Categories</h6>\r\n          <ul class=\"footer-links\">\r\n            <li><a href=\"\">Future Predictions</a></li>\r\n            <li><a href=\"\">Infastructure</a></li>\r\n            <li><a href=\"\">Sample</a></li>\r\n            <li><a href=\"\">Sample</a></li>\r\n            <li><a href=\"\">Sample</a></li>\r\n            <li><a href=\"\">Sample</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-xs-6 col-md-3\">\r\n          <h6>Quick Links</h6>\r\n          <ul class=\"footer-links\">\r\n            <li><a href=\"\">About Us</a></li>\r\n            <li><a href=\"\">Contact Us</a></li>\r\n            <li><a href=\"\">Contribute</a></li>\r\n            <li><a href=\"\">Privacy Policy</a></li>\r\n            <li><a href=\"\">Sitemap</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-sm-6 col-xs-12\">\r\n          <p class=\"copyright-text\">Copyright &copy; 2019 All Rights Reserved by \r\n       <a href=\"#\">Evaluer</a>.\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <ul class=\"social-icons\">\r\n            <li><a class=\"facebook\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a class=\"twitter\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a class=\"dribbble\" href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\r\n            <li><a class=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>   \r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/futureprediction/futureprediction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding:70px \r\n}\r\nagm-map { height: 300px; /* height is required */ }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/futureprediction/futureprediction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 class=\"text-center\">Enter your Requirement</h3>\r\n    <form [formGroup]=\"angForm\" novalidate >\r\n        <div class=\"row\"> \r\n            <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"HospitalDistance\">HospitalDistance</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"HospitalDistance\" formControlName=\"HospitalDistance\" #HospitalDistance >\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['HospitalDistance'].invalid && (angForm.controls['HospitalDistance'].dirty || angForm.controls['HospitalDistance'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['price'].errors.required\">\r\n                            HospitalDistance is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"SchoolDistance\">SchoolDistance:</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"SchoolDistance\" formControlName=\"SchoolDistance\" #SchoolDistance>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['SchoolDistance'].invalid && (angForm.controls['SchoolDistance'].dirty || angForm.controls['SchoolDistance'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['SchoolDistance'].errors.required\">\r\n                      Distance is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"DistToTown\">DistToTown</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"DistToTown\" formControlName=\"DistToTown\" #DistToTown>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['DistToTown'].invalid && (angForm.controls['DistToTown'].dirty || angForm.controls['DistToTown'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['DistToTown'].errors.required\">\r\n                        DistToTown is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"Populationindex\">Population index</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"Index\" formControlName=\"Populationindex\" #Populationindex>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['Populationindex'].invalid && (angForm.controls['Populationindex'].dirty || angForm.controls['Populationindex'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['Populationindex'].errors.required\">\r\n                        Populationindex is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                        <label for=\"Bank\">Bank</label>\r\n                        <input type=\"number\" class=\"form-control\" placeholder=\"Bank\" formControlName=\"Bank\" #Bank>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['Bank'].invalid && (angForm.controls['Bank'].dirty || angForm.controls['Bank'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['Bank'].errors.required\">\r\n                            Bank is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"ZipCode\">ZipCode:</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"ZipCode\" formControlName=\"ZipCode\" #ZipCode>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['ZipCode'].invalid && (angForm.controls['ZipCode'].dirty || angForm.controls['ZipCode'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['ZipCode'].errors.required\">\r\n                            ZipCode is required.\r\n                    </div>\r\n               </div>\r\n               <div class=\"form-group\">\r\n                    <label for=\"IsFloodedArea\">IsFloodedArea</label>\r\n                    <input type=\"number\"  class=\"form-control\" placeholder=\"IsFloodedArea\" formControlName=\"IsFloodedArea\" #IsFloodedArea>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['IsFloodedArea'].invalid && (angForm.controls['IsFloodedArea'].dirty || angForm.controls['IsFloodedArea'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['IsFloodedAreaIsFloodedArea'].errors.required\">\r\n                        IsFloodedAreais required.\r\n                    </div>\r\n                </div>\r\n            \r\n                <button  id=\"myButton\" class=\"float-left submit-button\" >Prediction</button>\r\n              \r\n                             <!-- <button  (click)=\"addLandInfo(HospitalDistance.value, SchoolDistance.value, Populationindex.value, Bank.value, ZipCode.value, DistToTown.value, address.value, IsFloodedArea.value,lat.value, lon.value)\" class=\"btn btn-success btn-block\" [disabled]=\"angForm.pristine || angForm.invalid\"  >predict</button>-->\r\n            </div>\r\n             \r\n            \r\n            <div class=\"col\"> \r\n                <div class=\"form-group\">\r\n                    <label for=\"search Location\">search Location</label>\r\n                    <input type=\"text\"  class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" \r\n                    placeholder=\"search Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" formControlName=\"address\" #address>\r\n                </div>\r\n                <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\">\r\n                    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\r\n                    (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\r\n                </agm-map>\r\n                <div class=\"form-group\">\r\n                    <label for=\"lat\">Latitude:</label>\r\n                    <input type=\"number\" class=\"form-control\" [value]=\"latitude\" placeholder=\"\" formControlName=\"lat\" #lat>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['lat'].invalid && (angForm.controls['lat'].dirty || angForm.controls['lat'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['lat'].errors.required\">\r\n                        Latitude is required.\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label  for=\"lon\">Longitude:</label>\r\n                    <input type=\"number\" class=\"form-control\"  [value]=\"longitude\"  placeholder=\"\" formControlName=\"lon\" #lon>\r\n                </div>\r\n                <div *ngIf=\"angForm.controls['lon'].invalid && (angForm.controls['lon'].dirty || angForm.controls['lon'].touched)\" class=\"alert alert-danger\">\r\n                    <div *ngIf=\"angForm.controls['lon'].errors.required\">\r\n                        Longitude is required.\r\n                    </div>\r\n                </div>\r\n             \r\n            </div>\r\n        </div>    \r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/futureprediction/futureprediction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturePrediction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_addLand_service__ = __webpack_require__("../../../../../src/app/services/addLand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuturePrediction = (function () {
    function FuturePrediction(mapsAPILoader, ngZone, fb, addLandService, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.fb = fb;
        this.addLandService = addLandService;
        this.router = router;
        this.title = 'AGM project';
        this.user = localStorage.getItem('user');
        this.userId = JSON.parse(this.user);
        this.createForm();
        // var test = JSON.parse(this.user);
        // console.log(test.id);
    }
    FuturePrediction.prototype.ngOnInit = function () {
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"], componentRestrictions: { country: 'lk' }
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    // Get Current Location Coordinates
    FuturePrediction.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 8;
                _this.getAddress(_this.latitude, _this.longitude);
            });
        }
    };
    FuturePrediction.prototype.markerDragEnd = function ($event) {
        console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    };
    FuturePrediction.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    FuturePrediction.prototype.createForm = function () {
        this.angForm = this.fb.group({
            HospitalDistance: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            SchoolDistance: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            DistToTown: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            Populationindex: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            Bank: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            ZipCode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            IsFloodedArea: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            lat: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            lon: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('address'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FuturePrediction.prototype, "searchElementRef", void 0);
    FuturePrediction = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-futureprediction',
            template: __webpack_require__("../../../../../src/app/components/futureprediction/futureprediction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/futureprediction/futureprediction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_app_services_addLand_service__["a" /* AddLandService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], FuturePrediction);
    return FuturePrediction;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\r\n    background: url(\"/assets/landing.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n.input-group{\r\n    width: 60% ;\r\n    padding: 22px;\r\n}\r\nimg{\r\n    width:700px;\r\n    float:right;\r\n    margin-bottom:-81px;\r\n}\r\nh1{\r\n    font-size: 3.1875rem ;\r\n    padding: 20px ;\r\n    color:#424036;\r\n}\r\n.loading{\r\n    color: white;\r\n    padding-top: 50px;\r\n  }\r\n@media(max-width: 768px){\r\n    img{\r\n        width: 220px;\r\n        /* margin-bottom: -26px; */\r\n     \r\n     }\r\n\r\n     .input-group{\r\n         width: 100%;\r\n     }\r\n     h1{\r\n        font-size:  2.1875rem ;\r\n    }\r\n    \r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  <div class=\"jumbotron text-center\">\r\n  <h1>MEAN Authentication App1234</h1>\r\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch </p>\r\n  <div>\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\" [routerLink]=\"['/login']\">Login</a>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"jumbotron\"> -->\r\n    <!-- <img src=\"/assets/landing.jpg\" width=\"100%\" /> -->\r\n<!-- </div>  -->\r\n\r\n<div class=\"home\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n    </div>\r\n    <div class=\"col\">\r\n        <ngx-spinner  type=\"ball-clip-rotate-multiple\" size=\"medium\">\r\n          <p class=\"loading\">Loading...</p>\r\n        </ngx-spinner>\r\n        <h1>Lightning Fast Valuation<br>Provider</h1>\r\n        <div class=\"input-group search-box\">\r\n            <input type=\"text\" placeholder=\"Search for Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control\" #search>\r\n            <div class=\"input-group-append\">\r\n              <button (click)=\"predictPrice()\" class=\"btn btn-dark\"><i class=\"fa fa-search\"></i></button>\r\n            </div>\r\n          </div>\r\n      <img src=\"../../../assets/house.png\" alt=\"\">\r\n    \r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_addLand_service__ = __webpack_require__("../../../../../src/app/services/addLand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    // tslint:disable-next-line:max-line-length
    function HomeComponent(spinner, router, addLandService, mapsAPILoader, ngZone) {
        this.spinner = spinner;
        this.router = router;
        this.addLandService = addLandService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            // tslint:disable-next-line: max-line-length
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["address"], componentRestrictions: { country: 'lk' } });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.address = autocomplete.getPlace().address_components[0].long_name;
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    console.log(_this.latitude);
                    console.log(_this.longitude);
                });
            });
        });
    };
    HomeComponent.prototype.predictPrice = function () {
        var _this = this;
        this.spinner.show();
        // this.addLandService.getCurrentPrice(this.latitude, this.longitude);
        this.addLandService.getCurrentPrice(this.latitude, this.longitude).subscribe(function (data) {
            console.log(data[0]); // Data which is returned by call
            setTimeout(function () {
                _this.spinner.hide();
                _this.router.navigate(['./', 'prediction'], { queryParams: { page: data[0], page1: _this.address }, skipLocationChange: true });
            }, 5000);
        }, function (error) {
            console.log(error); // Error if any
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "searchElement", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_services_addLand_service__["a" /* AddLandService */], __WEBPACK_IMPORTED_MODULE_0__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/land-price/land-price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n  height: 400px;\r\n  width: 100%;\r\n}\r\n#about {\r\n  margin-top: 5%;\r\n}\r\n.home{\r\n  background: url(\"/assets/landing.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/land-price/land-price.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n<div id=\"about\"></div>\r\n<div class=\"container\" >\r\n  <div class=\"row\" >\r\n    <div class=\"col-md-9\">\r\n      <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Location\"\r\n             style=\"width: 80%;margin-bottom: 1%; margin-right: 2%;\" >\r\n      <input type=\"button\" value=\"Locate\">\r\n      <div id=\"map\" #mapRed></div>\r\n    </div >\r\n\r\n    <div class=\"col-md-3\" >\r\n      <br><br>\r\n      <input type=\"button\" class=\"btn btn-primary\" value=\" Price(RS)\" style=\"width: 150px;\" (click)=\"send_current_position()\"><br>\r\n      <div class=\"martop10\"></div>\r\n      <input type=\"text\" [(ngModel)]=\"prices.current_price\" ><br>\r\n\r\n      <div class=\"martop10\"></div>\r\n      <input type=\"button\" class=\"btn btn-primary\" value=\"Future Price(RS)\" (click)=\"send_data()\" style=\"width: 150px;\"><br>\r\n      <div class=\"martop10\"></div>\r\n      <input type=\"text\" [(ngModel)]=\"prices.future_price\" >\r\n    \r\n      <div class=\"martop10 row\">\r\n        <div class=\"col-sm-5\"><label for=\"\">School(%)</label></div>\r\n        <div class=\"col-sm-7\"><input type=\"text\" [(ngModel)]=\"prices.school_percent\" ></div>\r\n      </div>\r\n      <div class=\"martop10 row\">\r\n        <div class=\"col-sm-5\"><label for=\"\">Hospital(%)</label></div>\r\n        <div class=\"col-sm-7\"><input type=\"text\" [(ngModel)]=\"prices.hospital_percent\" ></div>\r\n      </div>\r\n      <div class=\"martop10 row\">\r\n        <div class=\"col-sm-5\"><label for=\"\">Supermarket(%)</label></div>\r\n        <div class=\"col-sm-7\"><input type=\"text\" [(ngModel)]=\"prices.supermarket_percent\" ></div>\r\n      </div>\r\n      <div class=\"martop10 row\">\r\n        <div class=\"col-sm-5\"><label for=\"\">Road(%)</label></div>\r\n        <div class=\"col-sm-7\"><input type=\"text\" [(ngModel)]=\"prices.road_percent\" ></div>\r\n      </div>\r\n      <div class=\"martop10 row\">\r\n        <div class=\"col-sm-5\"><label for=\"\">Apartment(%)</label></div>\r\n        <div class=\"col-sm-7\"><input type=\"text\" [(ngModel)]=\"prices.apartment_percent\" ></div>\r\n      </div>\r\n    </div>\r\n   </div>\r\n</div>\r\n</div>\r\n \r\n\r\n\r\n\r\n<!--<input type=\"button\" value=\"Locate\">-->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/land-price/land-price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandPriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVhMmYzNTU2M2UyMjBhOTQ5YjBmOTIiLCJlbWFpbCI6ImoxYW4uaG9uZ0B5YW5kZXguY29tIiwibmFtZSI6ImJyYXMiLCJleHAiOjE1NjY4MzI4OTIsImlhdCI6MTU2NjIyODA5Mn0.DfPAVVsaNCV3urx35HQdWIeXTV4ybe3lVQl4E_aA37M'
    })
};
function test(pl) {
    LandPriceComponent.credentials.lat = pl.geometry.location.lat();
    LandPriceComponent.credentials.lng = pl.geometry.location.lng();
}
function future(av, nu) {
    LandPriceComponent.credentials.av_list.push(av);
    LandPriceComponent.credentials.nu_list.push(nu);
    console.log(LandPriceComponent.credentials.av_list);
    console.log(LandPriceComponent.credentials.nu_list);
}
var LandPriceComponent = (function () {
    function LandPriceComponent(http) {
        this.http = http;
        this.prices = {
            current_price: '',
            future_price: 'Predict...',
            school_percent: 'Percent of School',
            hospital_percent: 'Percent of Hospital',
            supermarket_percent: 'Percent of Supermarket',
            road_percent: 'Percent of Road',
            apartment_percent: 'Percent of Apartment',
        };
    }
    LandPriceComponent_1 = LandPriceComponent;
    LandPriceComponent.prototype.handleError = function (error) {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    };
    LandPriceComponent.prototype.ngOnInit = function () {
        this.initAutocomplete();
    };
    LandPriceComponent.prototype.initAutocomplete = function () {
        var map = new google.maps.Map(this.mapRed.nativeElement, {
            center: { lat: 6.9271, lng: 79.8621 },
            zoom: 14,
            mapTypeId: 'roadmap'
        });
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });
        var markers = [];
        searchBox.addListener('places_changed', function () {
            LandPriceComponent_1.credentials.av_list = [];
            LandPriceComponent_1.credentials.nu_list = [];
            var places = searchBox.getPlaces();
            markers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < places.length; i++) {
                var place = places[i];
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));
                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.union(place.geometry.location);
                }
                var service = new google.maps.places.PlacesService(map);
                var building = ['school', 'hospital', 'supermarket', 'road', 'apartment'];
                test(place);
                for (var i = 0; i < building.length; i++) {
                    service.nearbySearch({ location: place.geometry.location, radius: 1000, type: building[i] }, function (results, status) {
                        // alert(results.length)
                        if (results.length == 0) {
                            future(0, 0);
                        }
                        else {
                            if (status !== 'OK')
                                return;
                            // alert(results[0].geometry.location.lat());
                            var rad = function (x) {
                                return x * Math.PI / 180;
                            };
                            // let number: number = 0;
                            var total_distance = 0;
                            var average_distance = 0;
                            var build_number = 0;
                            // let passed: array = [];
                            var passed = [];
                            var filterDistance = function (p) {
                                var R = 6378137; // Earth’s mean radius in meter
                                var dLat = rad(p.geometry.location.lat() - place.geometry.location.lat());
                                var dLong = rad(p.geometry.location.lng() - place.geometry.location.lng());
                                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                    Math.cos(rad(place.geometry.location.lat())) * Math.cos(rad(p.geometry.location.lat())) *
                                        Math.sin(dLong / 2) * Math.sin(dLong / 2);
                                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                                var d = R * c;
                                return d; // returns the distance in meter
                            };
                            // alert(results.length);
                            for (var j = 0; j < results.length; j++) {
                                if (filterDistance(results[j]) < 1000) {
                                    total_distance += filterDistance(results[j]);
                                    build_number += 1;
                                    passed.push(results[j]);
                                }
                            }
                            if (build_number !== 0) {
                                average_distance = total_distance / build_number;
                                // alert(average_distance);alert(build_number);
                                future(average_distance, build_number);
                            }
                            else {
                                average_distance = 0;
                                future(average_distance, build_number);
                            }
                            for (var i = 0; i < passed.length; i++) {
                                var image = {
                                    url: passed[i].icon,
                                    size: new google.maps.Size(71, 71),
                                    origin: new google.maps.Point(0, 0),
                                    anchor: new google.maps.Point(17, 34),
                                    scaledSize: new google.maps.Size(25, 25)
                                };
                                var marker = new google.maps.Marker({
                                    map: map,
                                    icon: image,
                                    title: passed[i].name,
                                    position: passed[i].geometry.location
                                });
                                bounds.extend(passed[i].geometry.location);
                            }
                            map.fitBounds(bounds);
                            map.setZoom(15);
                        }
                    });
                }
            }
        });
        // alert(json);
    };
    LandPriceComponent.prototype.send_current_position = function (json) {
        var _this = this;
        // alert(LandPriceComponent.credentials.lat);
        var data = {
            lat: '',
            lng: ''
        };
        data.lat = LandPriceComponent_1.credentials.lat;
        // alert(data.lat);
        data.lng = LandPriceComponent_1.credentials.lng;
        // alert(data.lng);
        return this.http.post('users/send_current', data, httpOptions).subscribe(function (current_price) { console.log(current_price), _this.prices.current_price = parseInt(current_price[0]).toString(); });
    };
    LandPriceComponent.prototype.send_data = function () {
        var _this = this;
        // alert('OK');
        var data = {
            av: [],
            nu: [],
            current: ''
        };
        data.av = LandPriceComponent_1.credentials.av_list;
        // alert(data.av[4]);
        data.nu = LandPriceComponent_1.credentials.nu_list;
        data.current = this.prices.current_price;
        return this.http.post('users/send_future', data, httpOptions).subscribe(function (future_price) {
            console.log(future_price), _this.prices.future_price = parseInt(future_price[5]).toString(), _this.prices.school_percent = (future_price[0] * 100).toString().slice(0, 5),
                _this.prices.hospital_percent = (future_price[1] * 100).toString().slice(0, 5), _this.prices.supermarket_percent = (future_price[2] * 100).toString().slice(0, 5), _this.prices.road_percent = (future_price[3] * 100).toString().slice(0, 5),
                _this.prices.apartment_percent = (future_price[4] * 100).toString().slice(0, 5);
        });
    };
    LandPriceComponent.credentials = {
        lat: '',
        lng: '',
        av_list: new Array(),
        nu_list: new Array()
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mapRed"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LandPriceComponent.prototype, "mapRed", void 0);
    LandPriceComponent = LandPriceComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-land-price',
            template: __webpack_require__("../../../../../src/app/components/land-price/land-price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/land-price/land-price.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LandPriceComponent);
    return LandPriceComponent;
    var LandPriceComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding:70px \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h2 class=\"page-header\" >Login</h2>\r\n    <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"Username\">Username</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n            <label for=\"Password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n            </div>\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n              </label>\r\n            </div>\r\n            <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\r\n    </form>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n      <a class=\"navbar-brand\" href=\"#\">Evaluer</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home <span></span></a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/landprice']\">Land-Price </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\r\n          </li>\r\n          <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n          </li>\r\n            <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/futureprediction']\">Futureprediction</a>\r\n            </li>\r\n          \r\n          <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/prediction/prediction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding:70px \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/prediction/prediction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h5>Price Prediction Per Perch</h5>\r\n                <b>{{address}}</b>\r\n                <p>{{price | currency:\"LKR\": 'symbol' : '6.2-2'}}</p>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h5>Contribution</h5>\r\n              <ul *ngFor=\"let valuer of valuers\">\r\n                <li>{{valuer.name}}</li>\r\n                <star-rating value=\"5\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"30px\" readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\r\n              </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/prediction/prediction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PredictionComponent = (function () {
    function PredictionComponent(route, router) {
        this.route = route;
        this.router = router;
        this.optimzed = 6000000;
        // tslint:disable-next-line:member-ordering
        this.valuers = [
            {
                id: 1,
                name: 'Valuer 1'
            },
            {
                id: 2,
                name: 'Valuer 2'
            },
            {
                id: 3,
                name: 'Valuer 3'
            },
        ];
    }
    PredictionComponent.prototype.ngOnInit = function () {
        this.price = this.route.snapshot.queryParamMap.get('page');
        this.address = this.route.snapshot.queryParamMap.get('page1');
        this.price = this.price - this.optimzed;
    };
    PredictionComponent.prototype.onRate = function ($event) {
        alert("Old Value:" + $event.oldValue + ", \n      New Value: " + $event.newValue + ", \n      Checked Color: " + $event.starRating.checkedcolor + ", \n      Unchecked Color: " + $event.starRating.uncheckedcolor);
    };
    PredictionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__("../../../../../src/app/components/prediction/prediction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/prediction/prediction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding:70px \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\r\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\r\n  </ul>\r\n</div> -->\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n      <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n              <td>Address</td>\r\n              <td>Price</td>\r\n              <td>Distance</td>\r\n              <td>Route</td>\r\n              <td>Province</td>\r\n              <td>District</td>\r\n              <td colspan=\"2\">Actions</td>\r\n          </tr>\r\n          </thead>\r\n        \r\n          <tbody>\r\n              <tr *ngFor=\"let land of lands\">\r\n                  <td>{{ land.address }}</td>\r\n                  <td>{{ land.price }}</td>\r\n                  <td>{{ land.distance }}</td>\r\n                  <td>{{ land.route }}</td>\r\n                  <td>{{ land.province }}</td>\r\n                  <td>{{ land.district }}</td>\r\n                  <td><a [routerLink]=\"\" class=\"btn btn-primary\">Edit</a></td>\r\n                  <td><a routerLink=\"\" class=\"btn btn-danger\">Delete</a></td>\r\n              </tr>\r\n          </tbody>\r\n        </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_addLand_service__ = __webpack_require__("../../../../../src/app/services/addLand.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, addLandService) {
        this.authService = authService;
        this.router = router;
        this.addLandService = addLandService;
        this.lands = [];
        this.userInfo = localStorage.getItem('user');
        this.userId = JSON.parse(this.userInfo);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.getLands();
    };
    ProfileComponent.prototype.getLands = function () {
        var _this = this;
        this.addLandService.getLands().subscribe(function (res) {
            _this.temp = res,
                _this.temp.forEach(function (land) {
                    if (_this.userId.id == land.user) {
                        _this.lands.push(land);
                    }
                    else if (_this.userId.id == '5d635ff9d73ff1632402ce23') {
                        _this.lands = res;
                    }
                });
            // if(this.userId.id === res.user)
            // {
            //   this.lands = res;
            //   console.log(res);
            // }
            // else{
            //   console.log('No records')
            // }
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_app_services_addLand_service__["a" /* AddLandService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    padding:70px \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\" >\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\r\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/addLand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddLandService = (function () {
    function AddLandService(http) {
        this.http = http;
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]();
    }
    AddLandService.prototype.addLand = function (id, price, distance, route, aindex, province, district, address, lat, lon) {
        console.log(id);
        var uri = 'http://localhost:8080/lands/add';
        var obj = {
            user: id,
            price: price,
            distance: distance,
            route: route,
            index: aindex,
            // tslint:disable-next-line:whitespace
            province: province,
            district: district,
            address: address,
            lat: lat,
            lon: lon,
        };
        this.http.post(uri, obj)
            .subscribe(function (res) { return console.log(res); });
    };
    AddLandService.prototype.getLands = function () {
        var uri = 'http://localhost:8080/lands';
        return this.http.get(uri).map(function (res) { return res; });
    };
    AddLandService.prototype.getCurrentPrice = function (lat, lng) {
        var data = {
            lat: lat,
            lng: lng,
        };
        // return this.http.post('users/send_current', data).subscribe((current_price)=>
        // alert(current_price));
        return this.http.post('users/send_current', data);
        // .map((response: Response) => response.json());
    };
    AddLandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AddLandService);
    return AddLandService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // this.isDev = false;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map