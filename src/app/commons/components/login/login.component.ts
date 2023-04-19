import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IRQLogin } from '../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../css/auth.component.css']
})
export class LoginComponent{

  constructor(
    private router:Router,
    private loginService:AuthService
  ) { }

  username = 'javi';
  password = '123456'

  clickLogin():void{
    const user:IRQLogin = {username:this.username, password:this.password};

    this.loginService.logIn(user).subscribe(
      (data) => console.log(data)
      //de la siguiente manera se capta el error directamente desde
      // el modulo de ejecucion
      /*, (error) =>{
        console.log('este es el error', error);
        alert("UPS algo a salido mal")
      }*/ )
    console.log('***login***');
    //this.router.navigateByUrl('/dashboard');
  }

  clickOnRegister():void {
    console.log('***En registracion***');
    this.router.navigateByUrl('/register');
    //en caso de no querer redireccionar con codigo utilizar dentro de la etiqueta de HTLM routerLink="/register"
  }
}
