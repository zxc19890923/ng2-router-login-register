import {Component, OnInit} from "@angular/core";

@Component({
    selector: "my-home",
    templateUrl: "../templates/home.html"
})
export class HomeComponent implements OnInit {
    // 获取session判断用户是否登录
    username:string;

    // 构造函数初始化数据, 但是不要写复杂的逻辑, 应该写在 ngOnInit函数中
    constructor() {
        this.username = sessionStorage.getItem("username");
    }

    // 执行完构造函数立马执行的函数
    ngOnInit() {
        if (this.username == "" || this.username == undefined) {
            window.location.href = "/login";
        }
    }

    // 退出
    goOut() {
        sessionStorage.clear();
        window.location.href = "/login";
    }
}
