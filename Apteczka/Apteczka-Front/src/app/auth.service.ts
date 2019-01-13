import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private route: ActivatedRoute, private router: Router) {}

  canActivate(): boolean {
    if(JSON.parse(localStorage.getItem("loggedIn")))
    {
      return true;
    }
    else
    {
      this.router.navigate([""]);
      return false;
    }
  }
}
