import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
// 引入路由模块
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {ListComponent} from "./list.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";
// 配置路由
const appRouter:Routes = [
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'about',
                pathMatch: 'full'
            },
            {path: "about", component: AboutComponent},
            {path: "list", component: ListComponent}
        ]
    },
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    }
];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRouter),
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ListComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}