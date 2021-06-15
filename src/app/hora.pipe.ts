import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Tuberia para modificar la vista de las horas.
 */
@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

/**
 * Modifica la vista de las horas pasadas por parametro.
 *
 * @param {Time} value Hora del objeto.
 * @returns String con la hora modificada.
 */
  transform(value: Time): string {
    return value.toString().slice(0, value.toString().length -3)
  }

}
