import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { APP_URL } from 'src/app/services/base-url';
import { GeneralService } from 'src/app/services/general.service';
import { UserLogin } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loading: boolean = false;

  get isLoading(){
    return this.loading;
  }

  constructor (private readonly http: HttpClient, private router: Router, private generalServices:GeneralService){}

  signin(payload: UserLogin):void{
    this.loading = true;
    //Hacer peticiones
    this.http.post<any>(`${APP_URL}api/auth/`, payload,{
      headers: {'Content-Type': 'application/json'},
    })
      .pipe(
        catchError((error)=>{
          this.loading= false;
          return error;
        })
      )
      .subscribe((response) =>{
        this.generalServices.token = response.token;
        localStorage.setItem('token', response.token);
        this.generalServices.isLogged = true;

        console.log(this.generalServices.token);
        this.loading = false;
        this.router.navigate(['/']);
      });
  }
}
