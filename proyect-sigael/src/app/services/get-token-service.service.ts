import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import {APP_URL} from 'src/app/services/base-url'
import { Session } from '../types/session';

@Injectable({
  providedIn: 'root'
})
export class GetTokenServiceService {
  loading:boolean=false;
  edit:boolean=false;
  roleUsername:string=""
  role:string=""

  constructor(private http:HttpClient) { }

  getRoleUsername(token:string|string[]){
    this.loading=true;
    //console.log(token)
    this.http.get<any>(`${APP_URL}api/token/getRoleToken`,{
      headers: {"Authorization": token}
    }).subscribe((response)=>{
      localStorage.setItem("role",response.role)
    })
  }
}
