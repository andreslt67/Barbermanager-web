import { Component, OnInit } from '@angular/core';
import { Resena } from '../interfaces/resena';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioResenasService } from '../servicios/servicio-resenas.service';

/**
 * Componente que contiene una lista de componetes resena.
 */
@Component({
  selector: 'app-lista-resena',
  templateUrl: './lista-resena.component.html',
  styleUrls: ['./lista-resena.component.css']
})
export class ListaResenaComponent implements OnInit {

/**
 * Lista de resenas obtenidas del servicio.
 */
  resenas: Array<Resena>;

  /**
 * Metodo constructor de la clase
 *
 * @param {ServicioResenasService} servicioResenas  Servicio inyectado de resenas
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioResenas: ServicioResenasService, private servicioAlertas: AlertasService) {
    this.resenas = new Array<Resena>();
   }

  
/**
 * Metodo OnInit que se encarga de cargar las reseñas al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.cargarResenas();
  }

  
/**
 * Metodo que carga reseñas en la lista de reseñas.
 */
  cargarResenas() {
    this.resenas.splice(0, this.resenas.length);
    this.servicioResenas.getResenas().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de reseñas");
      }
      else {
        data.resenas.forEach(resena => this.resenas.push(resena));
      }
    });
  }

  /**
 * Metodo que elimina una reseña pasada por parametro.
 *
 * @param {number} id  Id de la reseña a eliminar.
 */
  eliminarResena(id: number) {
    this.servicioResenas.eliminarResena(id).subscribe(data => {
        this.servicioAlertas.openSnackBar("Reseña eliminada correctamente");
        this.cargarResenas();
    })
  }

}
