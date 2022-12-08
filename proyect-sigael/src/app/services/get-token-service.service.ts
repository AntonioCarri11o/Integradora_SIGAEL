import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenServiceService {
  loaging:boolean=false;
  edit:boolean=false;
  roleUsername:string=""
  role:string=""

  constructor(private http:HttpClient) { }

  getRoleUsername(){
    this.loaging=true;
  }
}
