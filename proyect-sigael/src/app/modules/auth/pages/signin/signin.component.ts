import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../types/user';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { GetTokenServiceService } from 'src/app/services/get-token-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls:['./styles.css'],
})
export class SigninComponent   {
  user: UserLogin = {
    username: '',
    password: '',
  };


  logoPath: string = '../../../../../assets/img/utez.png';
  get isLoading(){
    return this.AuthService.isLoading;
  }

  constructor(private TokenService:GetTokenServiceService, private AuthService: AuthService, private router: Router, private generalServices:GeneralService) {
    if (!!localStorage.getItem('token')) {
      this.router.navigate(['']);
      if (!this.generalServices.isLogged) this.router.navigateByUrl('/');
    }
  }

  get session() {
    return this.generalServices.token;
  }

  signin() {
    this.AuthService.signin(this.user);
    this.generalServices.isLogged = true;
    this.router.navigate(['/admin']);
  }

}
