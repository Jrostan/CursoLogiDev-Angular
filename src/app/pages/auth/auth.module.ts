import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthComponentsModule } from 'src/app/commons/shared/auth-components.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    AuthComponentsModule
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent,
  ]
})
export class AuthModule { }
