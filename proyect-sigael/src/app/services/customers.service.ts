import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URL } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private loading:boolean=false;
  getCustomers(){
    return this.http.get<any>(`${APP_URL}api/clientes`)
  }
  get isLoading(){
    return this.loading;
  }
  constructor(private http:HttpClient) { }
}
