import { Component, OnInit } from '@angular/core';
import { Cita } from '../interfaces/cita';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioCitasService } from '../servicios/servicio-citas.service';

  /**
 * Componente que contiene una lista de componentes cita
 */
@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

    /**
 * Lista de citas obtenidas del servicio.
 */
  citas: Array<Cita>;

    /**
 * Metodo constructor de la clase
 *
 * @param {ServicioCitasService} servicioCitas  Servicio inyectado de citas.
 * @param {AlertasService} servicioAlertas Servicio inyectado de alertas.
 */
  constructor(private servicioCitas: ServicioCitasService, private servicioAlertas: AlertasService) {
    this.citas = new Array<Cita>();
   }

  /**
 * Metodo OnInit que se encarga de cargar las citas al estar listo los componentes angular.
 */
  ngOnInit(): void {
    this.cargarCitas();
  }

  /**
 * Metodo que carga los datos de las citas en la lista.
 */
  cargarCitas() {
    this.citas.splice(0, this.citas.length);
    this.servicioCitas.getCitas().subscribe(data => {
      if (data["result"] == "fail") {
        this.servicioAlertas.openSnackBar("Imposible obtener listado de citas");
      }
      else {
        data.citas.forEach(cita => this.citas.push(cita));
      }
    });
  }

  /**
 * Metodo que elimina una cita de la bbdd.
 * 
 * @param {number} id Id de la cita a cancelar.
 */
  cancelarCita(id: number) {
    this.servicioCitas.renunciarCita(id).subscribe(data => {
      this.servicioAlertas.openSnackBar("Cita cancelada correctamente");
      this.cargarCitas();
    });
  }

}
