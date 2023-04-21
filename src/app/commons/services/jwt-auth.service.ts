import { Injectable } from '@angular/core';
import { LocalStorageJwt } from '../static/\'local-starage-ref';
import jwt_decode from 'jwt-decode';
import { IJwt } from '../components/models/auth';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor(
    private messageService: MessageService
  ) { }

  login(token: string): void {
    const decode = jwt_decode<IJwt>(token)
    localStorage.setItem(LocalStorageJwt.LS_ACCES_TOKEN, token)
    localStorage.setItem(LocalStorageJwt.LS_ROLES, JSON.stringify(decode.role))
  }

  isLoged(): boolean{
    const acountRol = localStorage.getItem(LocalStorageJwt.LS_ROLES)
    if (!acountRol) {
      return false;
    }
    const acountRolArray = JSON.parse(acountRol)
    if (acountRolArray.length == 0) {
      return false;
    }
    if (acountRolArray[0] == 'ADMIN') {
      return true;
    }
    if (acountRolArray[0] == 'DEVELOP') {
      this.messageService.showError('Usted notiene los permisos necesarios','top right')
      return true;
    }
    return false;
  }

  isLogedAdmin(): boolean{
    const acountRol = localStorage.getItem(LocalStorageJwt.LS_ROLES)
    if (!acountRol) {
      return false;
    }
    const acountRolArray = JSON.parse(acountRol)
    if (acountRolArray.length == 0) {
      return false;
    }
    if (acountRolArray[0] == 'ADMIN') {
      this.messageService.showError('Bienvenido','top center')
      return true;
    }
    if (acountRolArray[0] == 'DEVELOP') {
      this.messageService.showError('Usted notiene los permisos necesarios','top right')
      return false;
    }
    return false;
  }
}
