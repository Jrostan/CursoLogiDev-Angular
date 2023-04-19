import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { PathRest } from '../static/path-rest';

@Injectable()
export class AnimeInterceptor implements HttpInterceptor {

  constructor (
    private messageService: MessageService
  ) {};

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //asignacion de token a header
      const token = localStorage.getItem('accTok')!;
      let requestClone = req
        if(!this.isLogin(req.url)){
        requestClone = req.clone(
        {
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        }
      );} // se copia la reques para trabajarla dede aca

    return next.handle(requestClone).pipe(
      // manejo de errores
      catchError((error)=>this.herrorHandler(error))
    )
  }

  private isLogin(url:string): boolean { //este filtro permite saber si en la url a la que se golpea esta el /LOGIN
    return url.search(PathRest.GET_LOGIN) != -1;
  }

  private herrorHandler(error:HttpErrorResponse){
    if(error instanceof HttpErrorResponse) {
      if(error instanceof ErrorEvent) {
        this.messageService.showError('ERROR DEL CLIENTE','top right')
      } else {
        if (error.status === 401) {
          this.messageService.showError('USTED NO CUENTA CON PERMISOS PARA INGRAZAR','top right')
        } else {
          this.messageService.showError('ERROR DEL SERVIDOR','top right')
        }
      }
    } else {
      this.messageService.showError('OTRO TIPO DE ERROR','top right')
    }
    return throwError(error)
  }
}
