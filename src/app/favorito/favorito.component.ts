import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Favorito } from '../interfaces/favorito';
import { Peluquero } from '../interfaces/peluquero';
import { ServicioPeluquerosService } from '../servicios/servicio-peluqueros.service';

/**
 * Componente para mostrar los datos de un favorito
 */
@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  /**
 * favorito pasado del componente padre.
 */
  @Input('favorito') favorito: Favorito;
  
  /**
 * peluquero favorito.
 */
  peluquero: Peluquero;

  
  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioPeluquerosService} servicioPelu  Servicio inyectado de peluqueros.
 * @param {Router} route Servicio inyectado para la navegacion.
 */
  constructor(private route: Router, private servicioPelu: ServicioPeluquerosService) {
   }

  /**
 * Metodo OnInit que se encarga de cargar el peluquero al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.servicioPelu.getPeluquero(this.favorito.idpeluquero).subscribe(data => {
      this.peluquero = data;
    })
  }

  /**
 * Metodo que navega hacia el componente peluquero.component y le pasa el peluquero por parametro.
 */
  toPeluquero() {
    this.route.navigate(['/peluquero/peluquero', this.peluquero]);
  }

}
