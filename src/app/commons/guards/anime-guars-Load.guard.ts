import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../services/jwt-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AnimeGuarsLoadGuard implements CanLoad {
constructor(
  private jwtAuthService: JwtAuthService,
  private router: Router
) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      console.log('**CanLoad**');
       const isLoggedV = this.jwtAuthService.isLoged()
         if (!isLoggedV) {
           void this.router.navigateByUrl('/login')
         }
      return this.jwtAuthService.isLoged()
      //return true;
  }
}
