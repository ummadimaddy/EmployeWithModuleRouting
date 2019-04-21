import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {EmployeServiceService} from './employe-service.service';
@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate  {

  constructor(private employeService: EmployeServiceService) {}
 canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.employeService.isLoggedIn;
  }
}
