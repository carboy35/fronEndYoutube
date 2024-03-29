
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './../model/user.model';
import { RestResponse } from '../model/restResponse.model';
@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }
/**
 * 
 * 
 */


  public validate(user: UserModel): boolean{
    let isValid=true;

    if(!user.firstName){
      isValid=false;
    }

    if(!user.address){
      isValid=false;
    }

    if(!user.firstSurname){
      isValid=false;
    }
    return isValid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", user);
  }
}
