import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../models/user.model";
import {Role} from "../models/role.model";

const ROLE_API = 'http://localhost:8080/api/role/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }


  getAllRolesByUserId(id:number): Observable<any> {
    return this.http.post(ROLE_API + 'findAllRolesByUserId',{id:id}, httpOptions);
  }

}
