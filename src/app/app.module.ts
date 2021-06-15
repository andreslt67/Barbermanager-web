import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogIniciarComponent } from './dialog-iniciar/dialog-iniciar.component'
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrincipalComponent } from './principal/principal.component'
import { HttpInterceptorService } from './servicios/http-interceptor.service';
import { DialogRegistrarComponent } from './dialog-registrar/dialog-registrar.component';
import { MatMenuModule } from '@angular/material/menu';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { CitaComponent } from './cita/cita.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ResenaComponent } from './resena/resena.component';
import { ListaResenaComponent } from './lista-resena/lista-resena.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BuscadorPeluqueroComponent } from './buscador-peluquero/buscador-peluquero.component';
import { BuscadorEstablecimientoComponent } from './buscador-establecimiento/buscador-establecimiento.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { FormsModule } from '@angular/forms';
import { PeluqueroComponent } from './peluquero/peluquero.component';
import { DialogResenaComponent } from './dialog-resena/dialog-resena.component';
import { PipeFavPipe } from './pipe-fav.pipe';
import { DialogCitaComponent } from './dialog-cita/dialog-cita.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HoraPipe } from './hora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    DialogIniciarComponent,
    PrincipalComponent,
    DialogRegistrarComponent,
    DialogUpdateComponent,
    ListaCitasComponent,
    CitaComponent,
    ResenaComponent,
    ListaResenaComponent,
    FavoritoComponent,
    ListaFavoritosComponent,
    BuscadorPeluqueroComponent,
    BuscadorEstablecimientoComponent,
    EstablecimientoComponent,
    PeluqueroComponent,
    DialogResenaComponent,
    PipeFavPipe,
    DialogCitaComponent,
    HoraPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
