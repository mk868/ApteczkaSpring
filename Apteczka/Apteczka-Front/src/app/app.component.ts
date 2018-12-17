import { Component } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Apteczka-Front";
  isLogged: boolean = JSON.parse(localStorage.getItem("loggedIn"));

  constructor(private route: ActivatedRoute, private router: Router) {}

  myEvent() {
    console.log("wylogowane");
    localStorage.setItem("loggedIn", "false");
    this.router.navigate(["/main"]);
    location.reload();
  }
}
