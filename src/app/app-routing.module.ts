import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { AnimeGuarsLoadGuard } from './commons/guards/anime-guars-Load.guard';

const routes: Routes = [
  {path:'login', component:LoginPageComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'dashboard',
  canLoad:[AnimeGuarsLoadGuard], //este guard solo funciona para la carga LAZYLOAD este no permite que se descargue el modulo cuando no tienes permisos
  loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)}, //de esta manera se importa el modulo que tiene declaado esl submodulo de rutas.
  // ver que loadChildren declara una funcion la cual importa un modulo, una vez encontrado lo ejecuta
  // una vez ejecutado empiezan a regir la nuevas rutas como por ejemplo la sub ruta vacia
  {path:'', redirectTo:'/login', pathMatch:'prefix'},
  //pathMach tiene dos opciones full (el cual hace que coicida el 100% de la ruta) o preFix el cual hace que sono necesita coucidir una parte de la ruta (justa mente el prefijo ej: /hola hace coincidir con /hola/chau pero no con /algo/chau) tambien nos permite redireccionar si cualquier valor aparece
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*Notas:
  importaciones de componentes
      .forRoot(objeto)
        metodo estatico para uso general el cual nos permite cargar las rutas en la (al momento de la compilacion) en el componente principal
      .forChild(Objeto)
        metodo estatico para uso general el cual nos permite cargar las rutas en la (al momento de la compilacion) segun sea demandado, es decir cuando llamemos al modulo en cuestion

  Conceptos:
      Lazy Loading:
        esto se utiliza para descargar los recurzos segun necesidad, es decir si el usuario lo solicita se descarga del servidor, de lo contrario no

*/
