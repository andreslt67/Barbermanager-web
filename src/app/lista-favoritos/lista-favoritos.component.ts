import { Component, OnInit } from '@angular/core';
import { Favorito } from '../interfaces/favorito';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioFavoritosService } from '../servicios/servicio-favoritos.service';

/**
 * Componete que contiene una lista de componentes favoritos.
 */
@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css']
})
export class ListaFavoritosComponent implements OnInit {

  /**
 * Lista de favoritos obtenidos del servidor.
 */
  favoritos: Array<Favorito>;

  
/**
 * Metodo constructor de la clase
 *
 * @param {ServicioFavoritosService} servicioFavoritos  Servicio inyectado de favoritos.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioFavoritos: ServicioFavoritosService, private servicioAlertas: AlertasService) {
    this.favoritos = new Array<Favorito>();
   }
  
  /**
 * Metodo OnInit que se encarga de cargar los favoritos al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.cargarFavoritos();
  }

  /**
 * Metodo carga los datos del servicio de favoritos en la lista.
 */
  cargarFavoritos() {
    this.servicioFavoritos.getFavoritos().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de peluqueros favoritos");
      }
      else {
        data.favoritos.forEach(favorito => this.favoritos.push(favorito));
      }
    });
  }

}
