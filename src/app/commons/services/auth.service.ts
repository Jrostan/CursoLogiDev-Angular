import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRLogin, IRQLogin } from '../components/models/auth';
import { Observable, catchError, throwError } from 'rxjs'
import { PathRest } from '../static/path-rest';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    // private messageService: MessageService //ver bien como es la implementacion de las snackBar
  ) { }

  logIn(log:IRQLogin): Observable<IRLogin> {
    return this.http.post<IRLogin>( PathRest.GET_LOGIN, log);//.pipe(
    //   catchError((error) => {
    //     return this.errorHandler(error)})
    // ); //con el pipe y el resto de la estructutra es como se capta el error desde el service
  }
  //manejador de herrores: esta comentado porque se maneja desde el iterceptor

  // errorHandler(error:HttpErrorResponse){
  //   if(error instanceof HttpErrorResponse) {
  //     if(error instanceof ErrorEvent) {
  //       console.log('ERROR DEL CLIENTE');
  //       this.messageService.showError('ERROR DEL CLIENTE','top right')
  //     } else {
  //       console.log('ERROR DEL SERVIDOR');
  //       console.log(error.status);
  //       console.log(error.statusText);
  //       console.log(error.message);
  //       if (error.status === 401) {
  //         this.messageService.showError('USTED NO CUENTA CON PERMISOS PARA INGRAZAR','top right')
  //       } else {
  //         this.messageService.showError('ERROR DEL SERVIDOR','top right')
  //       }
  //     }
  //   } else {
  //     console.log('OTRO TIPO DE ERROR');
  //     this.messageService.showError('OTRO TIPO DE ERROR','top right')
  //   }

  //   return throwError(error)
  // }

}
/*
Notas:
  ya que este es un servicio de comunicacion, necesitamos imprtar
  en el app.module el modulo HttpClientModule dese import { HttpClientModule } from '@angular/common/http';
  tambien es necesario importar en el constructor el HttpClient desde import { HttpClient } from '@angular/common/http';

*/
