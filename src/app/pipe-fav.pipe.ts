import { Pipe, PipeTransform } from '@angular/core';

/**
 * Tuberia que modifica la visualizacion del boton de favoritos.
 */
@Pipe({
  name: 'pipeFav'
})
export class PipeFavPipe implements PipeTransform {

  /**
 * Modifica el texto del boton de favoritos de peluquero.
 *
 * @param {number} value Int que marca si es favorito o no.ç
 * @returns String con el nuevo texto del boton.
 */
  transform(value: number): string {
    if (value == 0) {
      return "Favorito";
    } else {
      return "Es Favorito";
    }
  }

}
