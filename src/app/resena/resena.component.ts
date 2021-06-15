import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Resena } from '../interfaces/resena';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioResenasService } from '../servicios/servicio-resenas.service';

/**
 * Componente que muestra los datos de las reseñas.
 */
@Component({
  selector: 'app-resena',
  templateUrl: './resena.component.html',
  styleUrls: ['./resena.component.css']
})
export class ResenaComponent implements OnInit {

/**
 * reseña obtenida del componente padre
 */
  @Input('resena') resena: Resena;
  /**
 * evento al eliminar una reseña emitido al componente padre.
 */
  @Output() resenaEliminada = new EventEmitter<number>();

  /**
 * Metodo constructor de la clase
 */
  constructor() { }

  ngOnInit(): void {
  }

  /**
 * Metodo que envia una reseña al componente padre para que este la elimine.
 */
  eliminarResena() {
    this.resenaEliminada.emit(this.resena.idresena);
  }

}
