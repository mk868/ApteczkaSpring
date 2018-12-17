import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login = "";
  password = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
  
  onSubmit() {
    console.log("logownaie");
    if (this.login == "admin" && this.password == "admin") {
      localStorage.setItem("loggedIn", "true");
      this.router.navigate(["/add_medicine"]);
      location.reload();
    } else {
      window.alert("nieprawidłowe dane do logowania");
    }
  }
}
