import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorEstablecimientoComponent } from './buscador-establecimiento/buscador-establecimiento.component';
import { BuscadorPeluqueroComponent } from './buscador-peluquero/buscador-peluquero.component';
import { DialogRegistrarComponent } from './dialog-registrar/dialog-registrar.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { EstablecimientoComponent } from './establecimiento/establecimiento.component';
import { InicioComponent } from './inicio/inicio.component';
import { PeluqueroComponent } from './peluquero/peluquero.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'perfil', component: DialogUpdateComponent},
  {path: 'buscadorPeluqueros', component: BuscadorPeluqueroComponent},
  {path: 'buscadorPeluquerias', component: BuscadorEstablecimientoComponent},
  {path: 'establecimiento/:peluqueria', component: EstablecimientoComponent},
  {path: 'peluquero/:peluquero', component: PeluqueroComponent},
  {path: 'registrar', component: DialogRegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
