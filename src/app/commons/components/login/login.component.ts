import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../css/auth.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  clickLogin():void{
    console.log('***login***');
    this.router.navigateByUrl('/dashboard');
  }

  clickOnRegister():void {
    console.log('***En registracion***');
    this.router.navigateByUrl('/register');
    //en caso de no querer redireccionar con codigo utilizar dentro de la etiqueta de HTLM routerLink="/register"
  }
}
