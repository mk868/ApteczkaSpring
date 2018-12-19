import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardServiceLogin implements CanActivate {
  constructor(private route: ActivatedRoute, private router: Router) {}

  canActivate(): boolean {
    if (JSON.parse(localStorage.getItem("loggedIn"))) {
      this.router.navigate(["/add_place"]);
      return false;
    } else {
      return true;
    }
  }
}
