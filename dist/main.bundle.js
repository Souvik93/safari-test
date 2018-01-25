webpackJsonp([2,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNewServiceService = (function () {
    function MyNewServiceService(http) {
        this.http = http;
        this.weatherId = "d3acf8751fb6329eb7d1d0723229741a";
        //For Getting location
        this.appId = "Z5aTxxMXaovOUstW9Z51";
        this.appCode = "0Nie8-SkPE0yaVHmEDG0xA";
    }
    MyNewServiceService.prototype.getWeatherDetails = function (lat, lon) {
        return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + this.weatherId)
            .map(function (res) { return res.json(); });
        // return this.http.get('http://api.apixu.com/v1/current.json?key=23319fb777b04d468cc173118173112&q='+lat+','+lon)
        //   .map(res => res.json());
    };
    MyNewServiceService.prototype.getLocationDeatils = function (lat, lon) {
        return this.http.get('https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?app_id=' + this.appId + '&app_code=' + this.appCode + '&locationattributes=address,streetDetails,linkInfo&mode=retrieveAddresses&prox=' + lat + ',' + lon + ',50&maxresults=3')
            .map(function (res) { return res.json(); });
    };
    MyNewServiceService.prototype.getStateDetails = function () {
        return this.http.get('./assets/json/stateIdMap.json')
            .map(function (res) { return res.json(); });
    };
    MyNewServiceService.prototype.getPrediction = function (bodyjson) {
        return this.http.post('https://cgsafari.herokuapp.com/predict/safari_api', bodyjson)
            .map(function (res) { return res.json(); });
    };
    return MyNewServiceService;
}());
MyNewServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MyNewServiceService);

var _a;
//# sourceMappingURL=my-new-service.service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 154;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(175);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(345),
        styles: [__webpack_require__(330)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_component_header_component_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_component_footer_component_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__body_component_body_component_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_new_service_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_gauge__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_component_header_component_component__["a" /* HeaderComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__footer_component_footer_component_component__["a" /* FooterComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__body_component_body_component_component__["a" /* BodyComponentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_gauge__["a" /* GaugeModule */],
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDZ5rIF_as0p3eJW08nKkQE2c0EFdmpG1w'
            })
            //  AgmCoreModule.forRoot({
            //   apiKey: 'AIzaSyCaAUvKje41x1vN_mQN6dFzO1zB2kiTskI'
            // })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__my_new_service_service__["a" /* MyNewServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_new_service_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponentComponent = (function () {
    function BodyComponentComponent(myNewServiceService) {
        this.myNewServiceService = myNewServiceService;
        this.jsonBody = {};
        this.speedRange = "";
        this.mymodel = 60;
        this.max = 120;
        this.INCPROB = "none";
        this.sectors = [
            {
                from: 0,
                to: 60,
                color: 'green'
            },
            {
                from: 60,
                to: 90,
                color: 'orange'
            }, {
                from: 90,
                to: 120,
                color: 'red'
            }
        ];
        //private speedMap:Map<string,string> = new Map([["SC1","80"],["SC2","65-80"],["SC3","55-64"],["SC4","41-54"],["SC5","31-40"],["SC5","31-40"],["SC6","21-30"],["SC7","6-20"],["SC8","<6"]]);
        this.speedMap = new Map([["SC1", 80], ["SC2", 73], ["SC3", 60], ["SC4", 48], ["SC5", 36], ["SC6", 26], ["SC7", 13], ["SC8", 3]]);
        this.weatherConditionMap = new Map([["Clear", 0], ["Cloudy", 1], ["Fog", 2], ["Rain", 3], ["Snow", 4], ["Freeze", 4], ["Strong Wind", 5], ["Thunderstorm", 5]]);
        this.pred = 0.45;
        this.zoom = 14;
        // initial center position for the map
        this.lat = 41.840794;
        this.lng = -87.952377;
        this.markers = [
            {
                lat: 41.840794,
                lng: -87.952377,
                label: 'A',
                draggable: true
            }
        ];
    }
    BodyComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myNewServiceService.getStateDetails().subscribe(function (result) {
            _this.stateDettails = result;
        });
        this.fetchDetails(this.lat, this.lng);
    };
    BodyComponentComponent.prototype.calculateVAge = function () {
        var diffInMs = Date.now() - Date.parse(this.vechage);
        this.vage = Math.floor((diffInMs / (1000 * 3600 * 24)) / 365);
    };
    BodyComponentComponent.prototype.getGeoLocation = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            // in your case
            _this.fetchDetails(position.coords.latitude, position.coords.longitude);
        });
    };
    BodyComponentComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    BodyComponentComponent.prototype.showPosition = function (position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        console.log(position.coords.latitude);
        //this.lat= position.coords.latitude;
        //this.lng=position.coords.longitude;
        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
            + latlon + "&zoom=14&size=400x300&key=AIzaSyAPFYjW4q5sc5wNtyuEB6cV5fLLgtkxve0";
        this.fetchDetails(position.coords.latitude, position.coords.longitude);
        document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
    };
    BodyComponentComponent.prototype.showError = function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };
    BodyComponentComponent.prototype.fetchDetails = function (a, b) {
        var _this = this;
        this.myNewServiceService.getWeatherDetails(a, b).subscribe(function (data) {
            _this.wDetails = data;
            console.log(_this.wDetails);
        });
        this.myNewServiceService.getLocationDeatils(a, b).subscribe(function (data) {
            console.log(data.Response.View[0].Result[0]);
            _this.loacationDeatails = data.Response.View[0].Result[0];
            _this.speedRange = _this.speedMap.get(_this.loacationDeatails.Location.LinkInfo.SpeedCategory);
        });
    };
    BodyComponentComponent.prototype.getPrediction = function () {
        var _this = this;
        this.jsonBody.GENDER = this.sex;
        this.jsonBody.AGE = this.age;
        this.jsonBody.PASSTYPE = 1; //Predefined
        if (this.wDetails != undefined) {
            console.log(this.wDetails.weather[0].main);
            this.jsonBody.WEATHER = this.weatherConditionMap.get(this.wDetails.weather[0].main);
            if (this.jsonBody.WEATHER == undefined)
                this.jsonBody.WEATHER = 1;
        }
        else
            this.jsonBody.WEATHER = 1;
        this.jsonBody.VEHAGE = this.vechage;
        this.jsonBody.VEHTYPE = Number(this.vehicleType);
        this.jsonBody.VEHSPEED = this.mymodel;
        this.jsonBody.ROUTE = this.loacationDeatails.Location.LinkInfo.FunctionalClass;
        this.jsonBody.ROADFEAT = 1; //Predefined
        this.jsonBody.REQUID = 102541; // Any Random Number
        this.jsonBody.SPEEDLIM = this.speedRange;
        this.stateDettails.forEach(function (element) {
            if (_this.loacationDeatails.Location.Address.State == element.STATE)
                _this.jsonBody.STATE = element.ID;
        });
        console.log(this.jsonBody);
        //this.predictionResult=this.myNewServiceService.getPrediction(this.jsonBody);
        //console.log(this.myNewServiceService.getPrediction(this.jsonBody));
        this.myNewServiceService.getPrediction(this.jsonBody).subscribe(function (result) {
            _this.predictionResult = result;
            console.log(_this.predictionResult);
            if (_this.predictionResult.STATUS == 100) {
                if (Math.round(_this.predictionResult.INCPROB * 100) > 0 && Math.round(_this.predictionResult.INCPROB * 100) < 30) {
                    _this.INCPROB = "green";
                }
                if (Math.round(_this.predictionResult.INCPROB * 100) >= 31 && Math.round(_this.predictionResult.INCPROB * 100) <= 66) {
                    _this.INCPROB = "yellow";
                }
                if (Math.round(_this.predictionResult.INCPROB * 100) > 67) {
                    _this.INCPROB = "red";
                }
            }
            else {
                alert("Some Error Occured .... Try Again Later...");
                _this.predictionResult.INCPROB = "Failed To Predict";
            }
        });
    };
    BodyComponentComponent.prototype.clickedMarker = function (label, index, $event) {
        //console.log(`clicked the marker: ${label || index}`)
        this.fetchDetails(this.lat, this.lng);
    };
    BodyComponentComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    BodyComponentComponent.prototype.markerDragEnd = function (m, $event) {
        // console.log("Drag End Called");
        // console.log($event.coords.lat);
        // console.log($event.coords.lng);
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        this.fetchDetails($event.coords.lat, $event.coords.lng);
    };
    return BodyComponentComponent;
}());
BodyComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-body-component',
        template: __webpack_require__(346),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__my_new_service_service__["a" /* MyNewServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__my_new_service_service__["a" /* MyNewServiceService */]) === "function" && _a || Object])
], BodyComponentComponent);

var _a;
//# sourceMappingURL=body-component.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponentComponent = (function () {
    function FooterComponentComponent() {
    }
    FooterComponentComponent.prototype.ngOnInit = function () {
    };
    return FooterComponentComponent;
}());
FooterComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-footer-component',
        template: __webpack_require__(347),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponentComponent);

//# sourceMappingURL=footer-component.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponentComponent = (function () {
    function HeaderComponentComponent() {
    }
    HeaderComponentComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponentComponent;
}());
HeaderComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-header-component',
        template: __webpack_require__(348),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponentComponent);

//# sourceMappingURL=header-component.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".no-padding-left {\r\n     padding-left: 0px;\r\n}\r\n .btn , .active , .focus {\r\n     outline: none;\r\n}\r\n .form-control-custom {\r\n     border: 0;\r\n     height:25px;\r\n     background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\r\n     background-size: 0 2px, 100% 2px;\r\n     background-repeat: no-repeat;\r\n     background-position: center bottom, center calc(100% - 1px);\r\n     background-color: rgba(0, 0, 0, 0);\r\n     transition: background 0s ease-out;\r\n     box-shadow: none;\r\n     border-radius: 0;\r\n     padding-left:0px;\r\n}\r\n .form-control-custom:focus {\r\n     background-image: linear-gradient(#0D83DD, #0D83DD), linear-gradient( #0D83DD, #0D83DD);\r\n     outline: none;\r\n     background-size: 0 2px, 100% 2px;\r\n     box-shadow: none;\r\n     transition-duration: 0.3s;\r\n}\r\n .img-bg {\r\n     width: 100%;\r\n     height: 180px;\r\n     max-width: 100%;\r\n}\r\n/* Angular Gauge CSS */\r\n .angular-gauge {\r\n     width:160px !important;\r\n}\r\n/* Angular Gauge CSS Ends Here */\r\n .div-border {\r\n     border-left: 5px solid #0D83DD;\r\n     background-color: lightgrey;\r\n     margin-bottom: 5px;\r\n     margin-top: 5px;\r\n}\r\n agm-map {\r\n     height: 300px;\r\n}\r\n/* Range Input CSS */\r\n input[type=range] {\r\n     -webkit-appearance: none;\r\n     width: 100%;\r\n     margin: 13.8px 0;\r\n}\r\n input[type=range]:focus {\r\n     outline: none;\r\n}\r\n input[type=range]::-webkit-slider-runnable-track {\r\n     width: 100%;\r\n     height: 8.4px;\r\n     cursor: pointer;\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px black;\r\n     background: #0D83DD;\r\n     border-radius: 1.3px;\r\n     border: 0.2px solid #010101;\r\n}\r\n input[type=range]::-webkit-slider-thumb {\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px black;\r\n     border: 1px none #f00000;\r\n     height: 36px;\r\n     width: 16px;\r\n     border-radius: 3px;\r\n     background: white;\r\n     cursor: pointer;\r\n     -webkit-appearance: none;\r\n     margin-top: -14px;\r\n}\r\n input[type=range]:focus::-webkit-slider-runnable-track {\r\n     background: #367ebd;\r\n}\r\n input[type=range]::-moz-range-track {\r\n     width: 100%;\r\n     height: 8.4px;\r\n     cursor: pointer;\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n     background: #3071a9;\r\n     border-radius: 1.3px;\r\n     border: 0.2px solid #010101;\r\n}\r\n input[type=range]::-moz-range-thumb {\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n     border: 1px solid #f00000;\r\n     height: 36px;\r\n     width: 16px;\r\n     border-radius: 3px;\r\n     background: #01ffff;\r\n     cursor: pointer;\r\n}\r\n input[type=range]::-ms-track {\r\n     width: 100%;\r\n     height: 8.4px;\r\n     cursor: pointer;\r\n     background: transparent;\r\n     border-color: transparent;\r\n     color: transparent;\r\n}\r\n input[type=range]::-ms-fill-lower {\r\n     background: #2a6495;\r\n     border: 0.2px solid #010101;\r\n     border-radius: 2.6px;\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\n input[type=range]::-ms-fill-upper {\r\n     background: #3071a9;\r\n     border: 0.2px solid #010101;\r\n     border-radius: 2.6px;\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\n input[type=range]::-ms-thumb {\r\n     box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n     border: 1px solid #f00000;\r\n     height: 36px;\r\n     width: 16px;\r\n     border-radius: 3px;\r\n     background: #01ffff;\r\n     cursor: pointer;\r\n     height: 8.4px;\r\n}\r\n input[type=range]:focus::-ms-fill-lower {\r\n     background: #3071a9;\r\n}\r\n input[type=range]:focus::-ms-fill-upper {\r\n     background: #367ebd;\r\n}\r\n/* Range Input CSS Ends Here */\r\n .extra-margin{\r\n     margin-top:10px;\r\n}\r\n .subheading {\r\n     color: #218DE0;\r\n}\r\n .extra-margin-bottom {\r\n     margin-bottom: 15px;\r\n}\r\n .extra-padding{\r\n     padding-left: 15px;\r\n}\r\n/* Traffic Light CSS Starts Here */\r\n #traffic-light {\r\n    /* position: relative;\r\n     */\r\n    /* display: flex;\r\n     */\r\n     left: 18%;\r\n    /* top: 50%;\r\n     */\r\n    /* margin-left: -60px;\r\n     */\r\n    /* margin-top: -160px;\r\n     */\r\n     background-color: #333333;\r\n     width: 200px;\r\n     height: 90px;\r\n     border-radius: 30px;\r\n     margin-top: 5px;\r\n     margin-bottom: 10px;\r\n}\r\n .tl {\r\n     -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n             appearance: none;\r\n     position: relative;\r\n     left: 30%;\r\n     width: 50px;\r\n     height: 50px;\r\n     margin-top: 20px;\r\n     margin-left: -40px;\r\n     background-color: grey;\r\n     vertical-align: middle;\r\n     border-radius: 100%;\r\n     margin-right: 40px;\r\n}\r\n input#color1 {\r\n     background-color: #d18d8d;\r\n}\r\n /* input#color1:hover {\r\n     animation: blink1 1.1s step-end infinite;\r\n} */\r\n input#color1:checked {\r\n     background-color: #ff0000;\r\n     box-shadow: 0 0 6em #ff3333;\r\n     -webkit-animation: blink1 1s step-end 2;\r\n             animation: blink1 1s step-end 2;\r\n}\r\n input#color2 {\r\n     background-color: #f1f6b6;\r\n}\r\n /* input#color2:hover {\r\n     animation: blink2 1s step-end infinite;\r\n} */\r\n input#color2:checked {\r\n     background-color: #ffff00;\r\n     box-shadow: 0 0 6em #ffff33;\r\n        -webkit-animation: blink2 1s step-end 2;\r\n                animation: blink2 1s step-end 2;\r\n}\r\n input#color3 {\r\n     background-color: #c0f4c0;\r\n}\r\n /* input#color3:hover {\r\n     animation: blink3 1s step-end infinite;\r\n} */\r\n input#color3:checked {\r\n     background-color: #00ff00;\r\n     box-shadow: 0 0 6em #33ff33;\r\n     -webkit-animation: blink3 1s step-end 2;\r\n             animation: blink3 1s step-end 2;\r\n}\r\n @-webkit-keyframes blink1 {\r\n     0% {\r\n         background-color: #ff0000;\r\n         box-shadow: 0 0 6em #ff3333;\r\n    }\r\n     50% {\r\n         background-color: #b30000;\r\n         box-shadow: 0 0 0em transparent;\r\n    }\r\n}\r\n @keyframes blink1 {\r\n     0% {\r\n         background-color: #ff0000;\r\n         box-shadow: 0 0 6em #ff3333;\r\n    }\r\n     50% {\r\n         background-color: #b30000;\r\n         box-shadow: 0 0 0em transparent;\r\n    }\r\n}\r\n @-webkit-keyframes blink2 {\r\n     0% {\r\n         background-color: #ffff00;\r\n         box-shadow: 0 0 6em #ffff33;\r\n    }\r\n     50% {\r\n         background-color: #b2b300;\r\n         box-shadow: 0 0 0em transparent;\r\n    }\r\n}\r\n @keyframes blink2 {\r\n     0% {\r\n         background-color: #ffff00;\r\n         box-shadow: 0 0 6em #ffff33;\r\n    }\r\n     50% {\r\n         background-color: #b2b300;\r\n         box-shadow: 0 0 0em transparent;\r\n    }\r\n}\r\n @-webkit-keyframes blink3 {\r\n     0% {\r\n         background-color: #00ff00;\r\n         box-shadow: 0 0 6em #33ff33;\r\n    }\r\n     50% {\r\n         background-color: #00b300;\r\n         box-shadow: 0 0 0em transparent;\r\n    }\r\n}\r\n @keyframes blink3 {\r\n     0% {\r\n         background-color: #00ff00;\r\n         box-shadow: 0 0 6em #33ff33;\r\n    }\r\n     50% {\r\n         background-color: #00b300;\r\n         box-shadow: 0 0 0em transparent;\r\n    }\r\n}\r\n/* Traffic Light CSS Ends Here */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".footer{\r\n    width:100%;\r\n    min-width:100%;\r\n    max-width:100%;\r\n    height:60px;   /* Height of the footer */\r\n    background:#00264A;\r\n    position:relative;\r\n\tbottom:0;\r\n\tleft:0;\r\n}\r\n.footer-padding{\r\n    padding-left:0;\r\n    padding-right: 0;\r\n}\r\n.footerLogo{\r\n    padding-right: 5px;\r\n    margin-top: 20px;\r\n}\r\n.col30percent {\r\n    border-left: 1px solid #C9C2D8;\r\n    border-right: 1px solid #C9C2D8;\r\n    margin-top: 10px;\r\n    height: 41px;\r\n    font-size: 14px;\r\n    font-family:\"helveticaNeueRegular\";\r\n    color:#C9C2D8;\r\n    width:auto !important;\r\n    padding-right: 0px ;\r\n}\r\n.colFollowpercent {\r\n    margin-top: 10px;\r\n    height: 41px;\r\n    font-size: 14px;\r\n    font-family:\"helveticaNeueRegular\";\r\n    color:#C9C2D8;\r\n    width: auto !important;\r\n}\r\n.colFollowpercent div{\r\n    padding-left:5px;\r\n    padding-top:10px;\r\n}\r\n.colFollowpercent-span-one{\r\n    padding-right:20px;\r\n}\r\n.colFollowpercent-image{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.footerLogo-main{\r\n    padding-right:20px !important;\r\n    width:auto !important;\r\n}\r\n.cgLogo{\r\n    height: 28px;\r\n    width: 122px;\r\n    display: block;\r\n}\r\n.col30percent div{\r\n    padding-left:5px;\r\n    padding-top:10px;\r\n}\r\n.col30percent-span-one{\r\n    padding-right:20px;\r\n    color:#C9C2D8;\r\n}\r\n.col30percent-span-two{\r\n    padding-right:170px;\r\n    color:#C9C2D8;\r\n}\r\n.colRights{\r\n    height:41px;\r\n    margin-left: 0px;\r\n    margin-top: 10px;\r\n    float:right;\r\n    padding-left: 76px;\r\n}\r\n.colRights-div-one{\r\n    color: #C9C2D8;\r\n    border-left: 1px solid white;\r\n    height: 41px;\r\n    font-family:\"helveticaNeueRegular\";\r\n    padding-left: 15px;\r\n    margin-right:15px;\r\n}\r\n.colRights-div-one div{\r\n    padding-top: 10px;\r\n}\r\n.footer-anchor-tag , .footer-anchor-tag:hover {\r\n    cursor:pointer;\r\n    text-decoration: none;\r\n    color:#C9C2D8;\r\n}\r\n\r\n.footer-xs-padding\r\n{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid #61759B;\r\n\r\n}\r\n\r\n.img-footer-xs-sm\r\n{\r\n      margin: 0 auto;\r\n      padding-top: 10px;\r\n}\r\n\r\n.footer-xs-sm\r\n{\r\n  background: #00264A;\r\n  color: #C9C2D8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)(false);
// imports


// module
exports.push([module.i, ".navbar-default>.main-cont{\r\n     padding-left:0px;\r\n}\r\n.main-header{\r\n    min-height: 60px;\r\n    background-color: #00264A;\r\n    color:white;\r\n    padding-left:30px;\r\n    border-radius: 0px;\r\n    border: none;\r\n\r\n}\r\n.navbar-nospacing {\r\n    margin-bottom: 0;\r\n}\r\n.navbar-default .navbar-brand {\r\n    color: white;\r\n}\r\n.navbar-header{\r\n    margin-top:-7px;\r\n}\r\n.navbar-brand{\r\n    height:auto;\r\n}\r\n.cg-logo{\r\n    margin-left:-20px;\r\n}\r\n.cglogoleaf-image{\r\n  padding-left: 0px;\r\n    height: 50px;\r\n    width: 60px;\r\n}\r\n.main-heading{\r\n    padding-left: 14px;\r\n    padding-right:25px;\r\n    display:inline;\r\n    font-size:26px;\r\n    color:white;\r\n    font-family: helveticaNeueBold;\r\n    font-weight: bold;\r\n}\r\n.main-heading:hover {\r\n    color:white;\r\n}\r\n.headerAnchor-right{\r\n    color:white;\r\n    font-size:16px;\r\n    font-family:helveticaNeueRegular;\r\n    padding-top: 17px;\r\n}\r\n.header-login {\r\n    margin-left: 8px;\r\n    padding-left:0px;\r\n    margin-right: 0px;\r\n}\r\n.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover{\r\n    color: #FFFFFF;\r\n    background-color: #00264A;\r\n}\r\n.navbar-default .navbar-nav>li>a {\r\n    color: #FFFFFF;\r\n}\r\nspan.hidden-sm{\r\n    color: #FFFFFF;\r\n}\r\n.landingSubheader{\r\n     padding-left:0px;\r\n     margin-left: -30px;\r\n     margin-right: -15px;\r\n}\r\n.landingSubheader>.navbar-header{\r\n    border-top:none;\r\n}\r\n\r\n.navbar-default.navbar-header{\r\n    margin-top:2px;\r\n}\r\n.smartQASubheader{\r\n    border-top: 1px #61759B solid;\r\n    height:31px;\r\n    background-color:#2E4165 !important;\r\n}\r\n.navigation-panel-heading-brand{\r\n    margin-top:12px;\r\n    color:#FFCA37;\r\n    font-family:\"helveticaNeueBold\";\r\n    font-size:14px;\r\n    padding-right: 78px;\r\n    padding-left: 30px;\r\n}\r\n.dropdownone {\r\n    background-color: #2E4165;\r\n    color: #ACDFFF;\r\n    width:140px;\r\n    height:30px;\r\n    font-size: 14px;\r\n    border: 1px #FFFFFF solid;\r\n    cursor: pointer;\r\n    font-family: \"helveticaNeueBold\";\r\n    display: inline-block;\r\n    padding-left:10px;\r\n    padding-top:3px;\r\n    border-left: 1px #61759B solid;\r\n    border-right: 1px #61759B solid;\r\n    border-top:none;\r\n}\r\n.drop-name{\r\n    border-left: 1px #61759B solid;\r\n    border-right: 1px #61759B solid;\r\n    border-top:none;\r\n    border-bottom: none;\r\n}\r\n.drop-name>span.caret{\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    width:140px;\r\n    height:28px !important;\r\n    z-index: 1;\r\n    margin-left: -11px;\r\n    margin-top: 7px;\r\n}\r\n.dropdown-content a {\r\n    background-color: rgb(0,172,212);\r\n    color: white;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    display: block;\r\n    height:28px;\r\n    width:140px;\r\n    padding-top:5px;\r\n    padding-left: 10px;\r\n}\r\n.dropdown-content a:hover {\r\n    background-color: #FFCA37;\r\n    color: #000000;\r\n    font-family: \"helveticaNeueBold\";\r\n}\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n.dropdown:hover {\r\n    color: #FFCA37;\r\n}\r\n.nav .navbar-nav{\r\n    position: fixed;\r\n}\r\n.drop-design{\r\n    border-left:none;\r\n    border-right: 1px #61759B solid;\r\n    border-top:none;\r\n    border-bottom: none;\r\n}\r\n\r\n/* CSS For XS View */\r\n\r\n\r\nimg.cglogoleaf-image-xs{\r\n  padding-left: 0px;\r\n      height: 40px;\r\n      width: 45px;\r\n      margin-top: 10px;\r\n      margin-left: 10px;\r\n}\r\n\r\n\r\n.mainheader-xs\r\n{\r\n      background-color: #00264A;\r\n\r\n}\r\n\r\n.header-title-xs\r\n{\r\n  color:white;\r\n  font-family:\"helveticaNeueBold\";\r\n  margin-top: 10px;\r\n}\r\n\r\n.navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover\r\n{\r\n  background-color: #00264A;\r\n}\r\n\r\n.toggle-xs\r\n{\r\n  margin-top: 25px;\r\n\r\n}\r\n\r\n.smartqasubheader-xs, .smartqasubheader-xs a{\r\n\r\n    background-color:#2E4165 !important;\r\n    color: #ACDFFF !important;\r\n    font-family: \"helveticaNeueBold\";\r\n\r\n}\r\n.smartqasubheader-xs a:hover, .smartqasubheader-xs a:focus\r\n{\r\n    color: #FFCA37 !important;\r\n}\r\n/* CSS For XS View Ends Here */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<app-header-component></app-header-component>\n\n\n<app-body-component></app-body-component>\n\n\n<app-footer-component></app-footer-component>\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n   <div class=\"row\">\n      <div class=\"col-md-12\">\n         <h4>A prescriptive machine learning model to calculate the driving risk level at real-time based on demographic, geographic and driving conditions. The model is trained on NHTSA Data base of accidents. </h4>\n         <img src=\"/assets/images/img.png\" class=\"img-bg\" >\n      </div>\n      <div class=\"col-md-12 \">\n         <div class=\"col-md-12 div-border\">\n            <h4> Driver Details </h4>\n         </div>\n         <form>\n            <div class=\"row\">\n               <div class=\"col-md-12\">\n                  <div class=\"col-md-3\">\n                     <div class=\"form-group\">\n                        <label for=\"sex\" class=\"subheading\">Choose Your Gender:</label>\n                        <br>\n                        <input type=\"radio\" [value]=\"1\" name=\"gender\" [(ngModel)]=\"sex\" > Male\n                        <input type=\"radio\" [value]=\"0\" name=\"gender\" [(ngModel)]=\"sex\" > Female\n                     </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                     <div class=\"form-group\">\n                        <label for=\"dob\" class=\"subheading\">Enter Your Age:</label>\n                        <input type=\"number\" class=\"form-control form-control-custom\" id=\"dob\" [(ngModel)]=\"age\" name=\"dobName\">\n                     </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                  </div>\n                  <div class=\"col-md-3\">\n                  </div>\n               </div>\n            </div>\n            <div class=\"row\">\n               <div class=\"col-md-12 \">\n                  <div class=\"col-md-12 div-border\">\n                     <h4> Vehicle Details </h4>\n                  </div>\n               </div>\n               <div class=\"col-md-12\">\n                  <div class=\"col-md-3\">\n                     <label for=\"vtype\" class=\"subheading\">Choose Your Vehicle Type:</label>\n                     <br>\n                     <select [(ngModel)]=\"vehicleType\" name=\"vehicle\">\n                     <option [value]=\"0\">2D Sedan</option>\n                     <option [value]=\"1\">4D Sedan</option>\n                     <option [value]=\"2\">Comp pickup</option>\n                     <option [value]=\"3\">Comp SUV</option>\n                     <option [value]=\"4\">Large Pickup</option>\n                     <option [value]=\"5\">Motorcycle</option>\n                     <option [value]=\"6\">Minivan</option>\n                     </select>\n                  </div>\n                  <div class=\"col-md-3\">\n                     <label for=\"vechage\" class=\"subheading\">Provide Your Vehicle Age:</label>\n                     <!-- <input type=\"date\" class=\"form-control form-control-custom\" id=\"vechage\" [(ngModel)]=\"vechage\" name=\"dobName\" (ngModelChange)=\"calculateVAge($event)\"> -->\n                     <input type=\"number\" [(ngModel)]=\"vechage\" name=\"vage\" id=\"vechage\" class=\"extra-margin-bottom form-control form-control-custom \">\n                  </div>\n                  <div class=\"col-md-6\">\n                  </div>\n               </div>\n            </div>\n         </form>\n      </div>\n      <div class=\"col-md-12\">\n         <div class=\"col-md-12 div-border\">\n            <h4> Driving Conditions </h4>\n         </div>\n         <div class=\"col-md-3\">\n            <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n               <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n               </agm-map> -->\n            <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n               <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n               </agm-map> -->\n            <!-- <button class=\"btn btn-info\" (click)=\"getGeoLocation()\">Get Your Location</button> -->\n         </div>\n         <div class=\"col-md-9\">\n         </div>\n      </div>\n      <div class=\"col-md-12\">\n        <!-- Angular Map Directive HTML Starts Here -->\n         <div class=\"col-md-3\">\n            <label class=\"subheading\">\n            Choose Your Location: <i class=\"fa fa-map-marker\" aria-hidden=\"true\" title=\"Detect Your Current Location\" (click)=\"getGeoLocation()\"></i>\n            </label>\n            <agm-map\n            [latitude]=\"lat\"\n            [longitude]=\"lng\"\n            [zoom]=\"zoom\"\n            [disableDefaultUI]=\"false\"\n            [zoomControl]=\"true\"\n            (mapClick)=\"mapClicked($event)\">\n            <agm-marker\n            *ngFor=\"let m of markers; let i = index\"\n            (markerClick)=\"clickedMarker(m.label, i)\"\n            [latitude]=\"m.lat\"\n            [longitude]=\"m.lng\"\n            [label]=\"m.label\"\n            [markerDraggable]=\"m.draggable\"\n            (dragEnd)=\"markerDragEnd(m, $event)\">\n            <agm-info-window>\n               <strong>InfoWindow content</strong>\n            </agm-info-window>\n            </agm-marker>\n            <agm-circle [latitude]=\"lat\" [longitude]=\"lng\"\n            [radius]=\"50\"\n            [fillColor]=\"'red'\"\n            [circleDraggable]=\"true\"\n            [editable]=\"true\">\n            </agm-circle>\n            </agm-map>\n\n            <!-- Angular Map Directive HTML Ends Here -->\n\n         </div>\n         <div class=\"col-md-3\"  *ngIf=\"loacationDeatails!=undefined\">\n            <label class=\"subheading\">Location:</label>\n            <br>\n            <label *ngIf=\"loacationDeatails!=undefined\"> {{loacationDeatails.Location.Address.Label}} </label>\n            <br>\n            <label class=\"subheading\">Weather Status:</label>\n            <br>\n            <span *ngIf=\"wDetails!=undefined\">\n               <!-- <span>City Name- {{wDetails.name}}</span> -->\n               <span>Condition - {{wDetails.weather[0].main}}</span>\n               <!-- <span>({{wDetails.weather[0].description}})</span> -->\n               <br>\n               <span>Humidity - {{wDetails.main.humidity}} %</span>\n               <br>\n               <span>Temperature - {{wDetails.main.temp}} Kelvin</span>\n            </span>\n         </div>\n         <div class=\"col-md-3\" *ngIf=\"loacationDeatails!=undefined\" >\n            <label class=\"subheading\">\n            Speed Limit:\n            </label>\n            <br>\n            <label *ngIf=\"loacationDeatails!=undefined\"> {{speedRange}} MPH </label>\n            <br>\n            <br>\n            <div class=\"col-md-12 no-padding-left\">\n               <label class=\"subheading\"> Vehicle Speed (mph):</label>\n            </div>\n            <div class=\"col-md-1 extra-margin hidden-xs \">\n               <label>0</label>\n            </div>\n            <div class=\"col-md-8 extra-margin col-xs-12\">\n               <input name=\"ram\" type=\"range\" min=\"0\" [max]=\"max\" [(ngModel)]=\"mymodel\" value=\"0\">\n            </div>\n            <div class=\"col-md-2 extra-margin hidden-xs\">\n               <label>{{max}}</label>\n            </div>\n            <!-- </span> <img src=\"/assets/images/clear.png\" width=\"20\" height=\"20\"> -->\n         </div>\n         <div class=\"col-md-3\"  *ngIf=\"loacationDeatails!=undefined\">\n            <div class=\"col-md-2 col-xs-3\">\n            </div>\n\n            <!-- Ng Gauge Directive HTML Starts Here -->\n            <div class=\"col-md-8 col-xs-6\">\n               <ng-gauge [max]=\"max\" [input]=\"mymodel\" [unit]=\"'mph'\" [showDigital]=\"true\" [light]=\"90\" [sectors]=\"sectors\">\n               </ng-gauge>\n            </div>\n            <!-- Ng Gauge Directive HTML Ends Here -->\n\n            <div class=\"col-md-2 col-xs-3\">\n            </div>\n         </div>\n      </div>\n      <div class=\"col-md-12 col-xs-12\">\n         <button class=\"btn btn-info pull-right hidden-xs\" (click)=\"getPrediction()\">Get Risk Level</button>\n         <button class=\"btn btn-info btn-block extra-margin extra-margin-bottom visible-xs\" (click)=\"getPrediction()\">Get Risk Level</button>\n      </div>\n      <div class=\"col-md-12 \">\n         <div class=\"col-md-12 hidden-xs div-border\">\n            <h4> Risk Outcome </h4>\n         </div>\n         <div class=\"col-xs-12 no-padding-left visible-xs\">\n            <h4 class=\"div-border extra-padding\"> Risk Outcome </h4>\n         </div>\n         <div class=\"col-md-12\">\n            <div class=\"col-md-3 col-xs-4\">\n               <!-- <label> Safe </label> -->\n               <label *ngIf=\"predictionResult!=undefined\" style=\"font-size:18px; padding-top:10px;\">  {{predictionResult.INCPROB}} </label>\n            </div>\n            <!-- <div class=\"col-md-3\">\n               <input *ngIf=\"INCPROB=='red'\" class=\"tl\" type=\"radio\" name=\"traffic-light-color\" id=\"color1\" [(ngModel)]=\"INCPROB\" value=\"red\" [checked]=\"INCPROB <0.33\" />\n\n               </div>\n\n               <div class=\"col-md-3\">\n\n               <input *ngIf=\"INCPROB=='yellow'\" class=\"tl\" type=\"radio\" name=\"traffic-light-color\" id=\"color2\" [(ngModel)]=\"INCPROB\" value=\"yellow\" [checked]=\"INCPROB >=0.33 && predictionResult1.INCPROB <0.66\"/>\n\n               </div>\n\n               <div class=\"col-md-3\">\n\n               <input *ngIf=\"INCPROB=='green'\" class=\"tl\" type=\"radio\" name=\"traffic-light-color\" id=\"color3\" [(ngModel)]=\"INCPROB\" value=\"green\" [checked]=\"INCPROB >=0.66\" />\n\n               </div> -->\n            <div class=\"col-md-9 col-xs-8\">\n               <div id=\"traffic-light\">\n                  <input class=\"tl  disabled\" type=\"radio\" name=\"traffic-light-color\" id=\"color1\" [(ngModel)]=\"INCPROB\" value=\"red\" [checked]=\"INCPROB =='red'\" />\n                  <input  class=\"tl  disabled\" type=\"radio\" name=\"traffic-light-color\" id=\"color2\" [(ngModel)]=\"INCPROB\" value=\"yellow\" [checked]=\"INCPROB =='yellow'\"/>\n                  <input  class=\"tl  disabled\" type=\"radio\" name=\"traffic-light-color\" id=\"color3\" [(ngModel)]=\"INCPROB\" value=\"green\" [checked]=\"INCPROB =='green'\" />\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer hidden-xs hidden-sm\">\n<div class=\"nopadding\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12 footer-padding\">\n        <div class=\"col-md-2 col-sm-2 col-xs-2 col-lg-2 footerLogo-main\" style=\"\">\n            <div class=\"footerLogo img-responsive\">\n                <a href=\"#\" class=\"footer-anchor-tag\">\n                    <img class=\"cgLogo\" src=\"/assets/images/Capgemini.svg\"  alt=\"Not Found\">\n                </a>\n            </div>\n        </div>\n        <div class=\"col-md-4 col30percent\">\n            <div>\n                <a href=\"#\" class=\"footer-anchor-tag\">\n                    <span class=\"text-left text-bold col30percent-span-one\">Connect with Our Team</span>\n                </a>\n                <a href=\"#\" class=\"footer-anchor-tag\">\n                    <span class=\"text-left text-bold col30percent-span-two\">Leadership Team</span>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-md-3 col-sm-3 col-xs-3 col-lg-4 colFollowpercent\">\n            <div>\n                <span class=\"text-left text-bold colFollowpercent-span-one\">Follow us on</span>\n                <span class=\"text-left text-bold \">\n                    <a href=\"https://www.linkedin.com/company-beta/157240/\" target=\"_blank\" class=\"footer-anchor-tag\">\n                        <img class=\"colFollowpercent-image\" src=\"/assets/images/linkedin.png\">\n                    </a>\n                </span>\n                <span class=\"text-left text-bold colFollowpercent-image\">\n                    <a href=\"https://twitter.com/Capgemini\"  target=\"_blank\" class=\"footer-anchor-tag\">\n                        <img class=\"colFollowpercent-image\" src=\"/assets/images/twitter.png\">\n                    </a>\n                </span>\n                <span class=\"text-left text-bold colFollowpercent-image\">\n                    <a href=\"https://www.facebook.com/Capgemini/\" target=\"_blank\" class=\"footer-anchor-tag\">\n                        <img class=\"colFollowpercent-image\" src=\"/assets/images/facebook.png\">\n                    </a>\n                </span>\n            </div>\n        </div>\n        <div class=\"colRights\">\n            <div class=\"text-right colRights-div-one\">\n                <div>Capgemini 2017. All rights reserved</div>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n\n<footer class=\"visible-xs visible-sm footer-xs-sm\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"col-xs-12 col-sm-12 footer-xs-padding\">\n    <div class=\"col-xs-3 col-sm-3\">\n\n    </div>\n\n    <div class=\"col-xs-2 col-sm-2\">\n          <a href=\"https://www.linkedin.com/company-beta/157240/\" target=\"_blank\"  class=\"footer-anchor-tag\">  <img class=\"linkedIn-padding-xs img-footer-xs-sm\" src=\"assets/images/linkedin.png\"></a>\n    </div>\n\n    <div class=\"col-xs-2 col-sm-2\">\n      <a href=\"https://twitter.com/Capgemini\"  target=\"_blank\"  class=\"footer-anchor-tag\"> <img class=\" img-footer-xs-sm\" src=\"assets/images/twitter.png\" ></a>\n    </div>\n\n    <div class=\"col-xs-2 col-sm-2\">\n\n      <a href=\"https://www.facebook.com/Capgemini/\" target=\"_blank\"   class=\"footer-anchor-tag\">  <img class=\" img-footer-xs-sm\" src=\"/assets/images/facebook.png\" ></a>\n\n    </div>\n\n    <div class=\"col-xs-3 col-sm-3\">\n\n    </div>\n\n  </div>\n    <div class=\"col-xs-12 col-sm-12\">\n      <a href=\"https://www.capgemini.com/\" target=\"_blank\" class=\"footer-anchor-tag\">\n        <img class=\"img-responsive img-footer-xs-sm\" src=\"/assets/images/Capgemini.svg\"  alt=\"Not Found\">\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 text-center\">\n        <span>Capgemini 2017. All rights reserved</span>\n    </div>\n\n  </div>\n\n</footer>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default container-fluid navbar-nospacing main-header hidden-xs\">\n    <div class=\"container-fluid main-cont\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand cg-logo\" href=\"#\">\n                <img alt=\"logo\" class=\"cglogoleaf-image\" src=\"/assets/images/smartlogo.png\" />\n            </a>\n            <a href=\"#\" class=\"navbar-brand\" style=\"margin-top: 10px;\" >\n                <h1 class=\"main-heading\">SAFARI – Smart Advisor For Accident RIsk</h1>\n            </a>\n        </div>\n    </div>\n</nav>\n<nav class=\"navbar navbar-inverse visible-xs\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header mainheader-xs\">\n      <div class=\"col-xs-2\">\n        <a class=\"navbar-brand cg-logo\" href=\"https://www.capgemini.com/\"><img  alt=\"logo\" class=\"cglogoleaf-image-xs\" src=\"/assets/images/smartlogo.png\" /></a>\n      </div>\n      <div class=\"col-xs-10\">\n\n        <a href=\"#\" class=\"header-title-xs navbar-brand\" >\n\n          <h4 class=\"sub-heading\">SAFARI – Smart Advisor For Accident RIsk</h4>\n        </a>\n      </div>\n\n    </div>\n\n</div>\n\n</nav>\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ })

},[383]);
//# sourceMappingURL=main.bundle.js.map