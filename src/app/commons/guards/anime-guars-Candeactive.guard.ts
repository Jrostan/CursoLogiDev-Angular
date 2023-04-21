import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivecomponent } from '../components/models/animes';

@Injectable({
  providedIn: 'root',
})

/* Este guard se encarga de impedirle al usuario salir de determinada ruta
      a este hay que enviarle un componente (el cual no queremos dejar) */
export class AnimeGuarsCandeactiveGuard implements CanDeactivate<IDeactivecomponent> {
  canDeactivate(
    component: IDeactivecomponent, //al implementar una interfas puedo hacerlo generico
    //esto es para evitar hacer uno por cada companente
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      console.log('**CanDeactivate**');
    return component.canExist(); //aca estamos llamando a un metodo del componente el cual nos pregunta si queremos salir
  }
}
