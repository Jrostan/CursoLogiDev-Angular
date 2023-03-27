import { Injectable } from '@angular/core';

@Injectable({ // esta etiquetea indica que es un servis
  providedIn: 'root' // esto indica que el service fue inyectado en el componente root
  //tambien se puede importar en cualquier modulo en en el apartado providers, pero si tiene la etiqueta "providedIn: 'root'" es redundante y estaria mal
  //lo s servicios son de una unica instancia de scoop global, por lo cual solo se hace una unica instancia y todos tienen acceso a esta

})
export class DemoService {

  constructor() {
    console.log('hola');
  }
}

/*en caso de hacer una instancia por cada componente declareandolo en un pomponente particlar asi:
@Component({
  selector: 'app-card-tv',
  templateUrl: './card-tv.component.html',
  styleUrls: ['./card-tv.component.css'],
  providers: [ Service en cuestion] <== por mas de que ya exista la instacia gloval si es declarado aca se genera una nueva instacia de dicho service
})

y en este modulo se llama a otro componente el segundo componente tiene acceso a la instancia del service realizada en el componente inicial
*/
