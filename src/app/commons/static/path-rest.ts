import { environment } from "src/environments/environment";

export class PathRest{
 static readonly GET_LOGIN=environment.hostBackend + '/login';
 /* aca se genera una variable estatica de solo lectura
 para de esta maner poder centralizar las rutas como variables.
 todo esto desde los envarioments */
 //static readonly GET_LOGIN='/back/login';
 //como estamos usando un proxi solo hace falta llamar a login
}
