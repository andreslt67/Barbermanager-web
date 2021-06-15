import { Time } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Servicio } from '../interfaces/servicio';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioCitasService } from '../servicios/servicio-citas.service';
import { ServicioServicioService } from '../servicios/servicio-servicio.service';

/**
 * interfaz que contiene los datos enviados al componente dialog.
 */
export interface DialogDataCita {
  hora: Time,
  fecha: Date,
  idpelu: number
}

/**
 * Componente dialog para añadir citas
 */
@Component({
  selector: 'app-dialog-cita',
  templateUrl: './dialog-cita.component.html',
  styleUrls: ['./dialog-cita.component.css']
})
export class DialogCitaComponent implements OnInit {

  /**
 * Lista de servicios obtenidos del servicio.
 */
  servicios: Array<Servicio>;
  /**
 * Servicio elegido del select
 */
  servicioElegido: Servicio;
  /**
 * Formulario para obtener datos de la cita
 */
  formCita: FormGroup;

    /**
 * Metodo constructor de la clase
 *
 * @param {ServicioCitasService} servicioCita  Servicio inyectado de citas.
 * @param {MatDialogRef} dialogRef Servicio que hace referencia a la ventana dialog.
 * @param {ServicioServicioService} servicioServicios Servicio inyectado de servicios.
 * @param {DialogDataCita} data Contiene datos de la cita.
 */
  constructor(public dialogRef: MatDialogRef<DialogCitaComponent>, private servicioCita: ServicioCitasService, private servicioServicios: ServicioServicioService, @Inject(MAT_DIALOG_DATA) public data: DialogDataCita, 
  private servicioAlerta: AlertasService) { 
    this.servicios = new Array<Servicio>();
    this.formCita = new FormGroup({
      selected: new FormControl('',Validators.required)
    });
  }

  
/**
 * Metodo OnInit que se encarga de cargar los servicios al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.servicioServicios.getServicios().subscribe(data => {
      data.servicios.forEach(servicio => this.servicios.push(servicio));
    });
  }
  
/**
 * Metodo que cierra la ventana dialog.
 */
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  
/**
 * Obtiene una cita con los datos de esta pasados por parámetro.
 */
  obtenerCita() {
    this.servicioCita.obtenerCita(this.data.hora, this.data.fecha, this.formCita.controls.selected.value.idservicio, this.data.idpelu).subscribe(datos => {
      this.dialogRef.close(true);
      this.servicioAlerta.openSnackBar("Cita obtenida correctamente");
    })
  }
}
