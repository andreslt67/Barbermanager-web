import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

/**
 * Componente principal del proyecto
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
 * Titulo de la barra de navegacion.
 */
  title = 'BarberManager';
  /**
 * Modo para la barra de navegacion.
 */
  mode = "over";
  /**
 * Navegador lateral obtenido del html
 */
  @ViewChild('drawer') drawer: MatSidenav

  /**
 * Contructor del componente
 *
 * @param {Router} route  Objeto de la clasew Router para navegar entre componentes
 */
  constructor(private route: Router) {}

  /**
 * Metodo que navega hasta el componente principal.component
 */
  toPrincipal() {
    this.route.navigate(['/principal']);
    this.drawer.toggle();
  }

  /**
 * Metodo que navega hasta el componente buscador-peluquero.component
 */
  toBuscadorPeluqueros() {
    this.route.navigate(['/buscadorPeluqueros']);
    this.drawer.toggle();
  }

  /**
 * Metodo que navega hasta el componente buscador-establecimiento.component
 */
  toBuscadorPeluquerias() {
    this.route.navigate(['/buscadorPeluquerias']);
    this.drawer.toggle();
  }
}
