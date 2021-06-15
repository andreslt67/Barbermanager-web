import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Servicio para mostrar mensajes de alerta
 */
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  /**
 * Metodo constructor del servicio
 *
 * @param {MatSnackBar} snackBar  Servicio inyectado para mostrar mensajes.
 */
  constructor(private snackBar: MatSnackBar) { }

  /**
 * Muestra un cuadro con un mensaje
 *
 * @param {string} mensaje  Mensaje a mostrar.
 */
  openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'snackBar'
    });
  }
}
