import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaHoras } from '../interfaces/cita';
import { ListaCitas } from '../interfaces/lista-citas';

/**
 * Servicio para administrar las citas
 */
@Injectable({
  providedIn: 'root'
})
export class ServicioCitasService {

  /**
 * Metodo constructor del servicio
 *
 * @param {HttpClient} http  Servicio inyectado para controlar las peticiones http.
 */
  constructor(private http: HttpClient) { }

/**
 * Obtiene una lista de citas del servidor
 * 
 * @returns La lista de citas del cliente.
 */
  getCitas(): Observable<ListaCitas> {
    return this.http.get<ListaCitas>('/cliente/citas')
  }

/**
 * Retorna una lista de citas de una fecha concreta.
 *
 * @param {number} idpelu  Id del peluquero.
 * @param {Date} fecha Fecha de las citas
 */
  getCitasPeluFecha(idpelu: number, fecha: Date): Observable<ListaHoras> {
    var jsonObject = {
      fecha: fecha,
      idpeluquero: idpelu
    }
    return this.http.post<ListaHoras>('/peluquero/citas', jsonObject);
  }

/**
 * Crea una cita en la bbdd con los datos enviados al servidor.
 *
 * @param {Time} hora Hora de la cita.
 * @param {Date} fecha Fecha de la cita.
 * @param {number} idservicio Id del servicio elegido.
 * @param {number} idpelu Id del peluquero de la cita
 */
  obtenerCita(hora: Time, fecha: Date, idservicio: number, idpelu: number): Observable<Object> {
    var jsonObject = {
      hora: hora,
      fecha: fecha,
      idservicio: idservicio,
      idpeluquero: idpelu
    }

    return this.http.post<object>('/cita/obtener', jsonObject);
  }

/**
 * Elimina una cita de la bbdd
 *
 * @param {number} id  Id de la cita.
 */
  renunciarCita(id: number): Observable<Object> {
    return this.http.get<Object>('/cita/renunciar/' + id);
  }
}
