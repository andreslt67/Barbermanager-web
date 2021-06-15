import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cita } from '../interfaces/cita';
import { AlertasService } from '../servicios/alertas.service';
import { ServicioCitasService } from '../servicios/servicio-citas.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  @Input('cita') cita: Cita;
  @Output() citaCancelada = new EventEmitter<number>();

  constructor(private servicioCita: ServicioCitasService, private servicioAlertas: AlertasService) { }

  ngOnInit(): void {
  }

  cancelarCita() {
    this.citaCancelada.emit(this.cita.idcita);
  }

}
