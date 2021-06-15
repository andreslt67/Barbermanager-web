import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioResenasService } from '../servicios/servicio-resenas.service';

  /**
 * interfaz con los datos enviados al dialog.
 */
export interface DialogDataPelu {
  idpelu: number
}

  /**
 * Componente dialog para obtener los datos de la reseña
 */
@Component({
  selector: 'app-dialog-resena',
  templateUrl: './dialog-resena.component.html',
  styleUrls: ['./dialog-resena.component.css']
})
export class DialogResenaComponent implements OnInit {

    /**
 * Formulario para obtener los datos de la reseña.
 */
  formResena: FormGroup;

    /**
 * Metodo constructor de la clase
 *
 * @param {MatDialogRef} dialogRef  Servicio qie hace referencia a la ventana dialog.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 * @param {ServicioResenasService} servicioResena Servicio inyectado para la reseña.
 * @param {DialogDataPelu} data Datos obtenidos de la reseña.
 */
  constructor(public dialogRef: MatDialogRef<DialogResenaComponent>, private servicioResena: ServicioResenasService, @Inject(MAT_DIALOG_DATA) public data: DialogDataPelu, 
  private servicioAlerta: AlertasService) { 
    this.formResena = new FormGroup({
      contenido: new FormControl('', Validators.required),
      valoracion: new FormControl('', [Validators.required, Validators.max(5), Validators.min(1)])
    });
  }

  ngOnInit(): void {
  }

    /**
 * Metodo para cerrar la ventana dialog
 */
  onNoClick(): void {
    this.dialogRef.close(false);
  }

    /**
 * Metodo para crear una reseña con los datos obtenidos.
 */
  crearResena() {
    this.servicioResena.crearResena(this.data.idpelu, this.formResena.controls.contenido.value, this.formResena.controls.valoracion.value).subscribe(datos => {
        this.dialogRef.close(true);
        this.servicioAlerta.openSnackBar("Reseña creada correctamente");
    })
  }

}
