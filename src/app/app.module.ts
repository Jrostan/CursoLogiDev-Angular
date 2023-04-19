import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { AuthModule } from './pages/auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AnimeInterceptor } from './commons/interceptors/animes-interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    AuthModule,
    PagesModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    //de esta manera se declaran los interceptores para que trabajen
    //tener en cuenta que los interceptores se ejecutan en oreeden en el que se declaran aca abajo
    {
      provide:HTTP_INTERCEPTORS, //tipo de provedor
      useClass:AnimeInterceptor, //nombre de la clase exportada (nuestro interceptor)
      multi:true //esto indica si existen varios tipos de interceptores
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
