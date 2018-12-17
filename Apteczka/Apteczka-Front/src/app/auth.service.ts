import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    return JSON.parse(localStorage.getItem("loggedIn"));
  }
}
