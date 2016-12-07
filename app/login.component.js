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
var LoginComponent = (function () {
    function LoginComponent() {
        this.username = "";
        this.password = "";
        this.message = "";
    }
    LoginComponent.prototype.handleSubmit = function () {
        if (this.username == "zhangxuchao" && this.password == "heping") {
            sessionStorage.setItem("username", "zhangxuchao");
            window.location.href = "/home";
        }
        else {
            this.message = "用户名和密码不匹配";
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-login",
            templateUrl: "../templates/login.html"
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map