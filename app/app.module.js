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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// 引入路由模块
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var list_component_1 = require("./list.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
// 配置路由
var appRouter = [
    {
        path: "home",
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'about',
                pathMatch: 'full'
            },
            { path: "about", component: about_component_1.AboutComponent },
            { path: "list", component: list_component_1.ListComponent }
        ]
    },
    {
        path: "",
        component: login_component_1.LoginComponent
    },
    {
        path: "login",
        component: login_component_1.LoginComponent
    },
    {
        path: "register",
        component: register_component_1.RegisterComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRouter),
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                list_component_1.ListComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map