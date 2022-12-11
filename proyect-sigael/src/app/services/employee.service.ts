import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Order } from '../modules/orders/types/orders';
import { APP_URL } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private loading:boolean=false;
  constructor(private http:HttpClient) { }

}
