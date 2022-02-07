import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor() {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Use selector here to get the current loggedin state of the user and then generate an observable to return
    // state of the application whether logged in or not
    return true;
  }
}
