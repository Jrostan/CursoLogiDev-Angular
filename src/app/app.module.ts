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
import { ModalAnimeComponent } from './commons/components/modal-anime/modal-anime.component';
import { DashboardComponentsModule } from "./commons/shared/dashboard-components.module";
import { AnimeGuarsLoadGuard } from './commons/guards/anime-guars-Load.guard';

@NgModule({
    declarations: [
        AppComponent,
        ModalAnimeComponent,
    ],
    providers: [
        //de esta manera se declaran los interceptores para que trabajen
        //tener en cuenta que los interceptores se ejecutan en oreeden en el que se declaran aca abajo
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AnimeInterceptor,
            multi: true //esto indica si existen varios tipos de interceptores
        },
        AnimeGuarsLoadGuard
    ],
    bootstrap: [AppComponent],
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
        MatSnackBarModule,
        DashboardComponentsModule
    ]
})
export class AppModule { }
