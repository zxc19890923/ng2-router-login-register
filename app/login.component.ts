import {Component} from "@angular/core";
@Component({
    selector: "my-login",
    templateUrl: "../templates/login.html"
})

export class LoginComponent {
    username: string;
    password: string;
    message: string;
    constructor() {
        this.username = "";
        this.password = "";
        this.message = "";
    }
    handleSubmit() {
        if(this.username == "zhangxuchao" && this.password=="heping") {
            sessionStorage.setItem("username", "zhangxuchao");
            window.location.href="/home";
        }
        else{
            this.message="用户名和密码不匹配";
        }
    }
}