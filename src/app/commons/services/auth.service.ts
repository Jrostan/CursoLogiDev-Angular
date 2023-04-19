import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRQLogin } from '../components/models/auth';
import { Observable, catchError, throwError } from 'rxjs'
import { PathRest } from '../static/path-rest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logIn(log:IRQLogin): Observable<IRQLogin> {
    return this.http.post<IRQLogin>( PathRest.GET_LOGIN, log).pipe(
      catchError((error) => {
        return this.errorHandler(error)})
    ); //con el pipe y el resto de la estructutra es como se capta el error desde el service
  }
  //manejador de herrores:

  errorHandler(error:HttpErrorResponse){
    if(error instanceof HttpErrorResponse) {
      if(error instanceof ErrorEvent) {
        console.log('ERROR DEL CLIENTE');
      } else {
        console.log('ERROR DEL SERVIDOR');
        console.log(error.status);
        console.log(error.statusText);
        console.log(error.message);
      }
    } else {
      console.log('OTRO TIPO DE ERROR');
    }

    return throwError(error)
  }

}
/*
Notas:
  ya que este es un servicio de comunicacion, necesitamos imprtar
  en el app.module el modulo HttpClientModule dese import { HttpClientModule } from '@angular/common/http';
  tambien es necesario importar en el constructor el HttpClient desde import { HttpClient } from '@angular/common/http';

*/
