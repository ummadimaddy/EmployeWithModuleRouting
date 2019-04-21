import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Person} from './Person';
import {Response} from './Response';
import {Employe} from './Employe';
@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {
  public Employe = [];
  isLoggedIn = false;

  url = 'http://localhost:3000/api/employes';
  signup = 'http://localhost:3000/api/person';
  signin = 'http://localhost:3000/api/personsignin';

  constructor(private http: HttpClient) { }
  private updateData = new BehaviorSubject(null);
  currentdata = this.updateData.asObservable();

  putData(data) {
    this.updateData.next(data);
  }

  listEmployees(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }

  uploadEmploye(emp: Employe): Observable<Response> {
    return this.http.post<Response>(this.url, emp);
  }

  updateEmploye(id: string, employe: Employe): Observable<Response> {
    const baseurl = `${this.url}/${id}`;
    return this.http.put<Response>(baseurl, employe);
  }

  removeEmploye(id: string): Observable<Response> {
    const baseurl = `${this.url}/${id}`;
    return this.http.delete<Response>(baseurl);
  }

  signingup(person: Person): Observable<Response> {
    return this.http.post<Response>(this.signup, person);
  }

  signingin(person: Person): Observable<Response> {
    return this.http.post<Response>(this.signin, person);
  }

  setLoggedIn(toggle: boolean) {
    this.isLoggedIn = toggle;
  }

}
