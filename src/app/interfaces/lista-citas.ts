import { Cita, CitaPelu } from "./cita";

/**
 * Interfaz para parsear json ListaCitas
 */
export interface ListaCitas {
    citas: Array<Cita>;
}

/**
 * Interfaz para parsear json ListaCitasPelu
 */
export interface ListaCitasPelu {
    citas: Array<CitaPelu>;
}
