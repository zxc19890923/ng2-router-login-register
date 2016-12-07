"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    // 构造函数初始化数据, 但是不要写复杂的逻辑, 应该写在 ngOnInit函数中
    function HomeComponent() {
        this.username = sessionStorage.getItem("username");
    }
    // 执行完构造函数立马执行的函数
    HomeComponent.prototype.ngOnInit = function () {
        if (this.username == "" || this.username == undefined) {
            window.location.href = "/login";
        }
    };
    // 退出
    HomeComponent.prototype.goOut = function () {
        sessionStorage.clear();
        window.location.href = "/login";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-home",
            templateUrl: "../templates/home.html"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map