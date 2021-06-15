import { Time } from "@angular/common";

/**
 * Interfaz para parsear json Cita
 */
export interface Cita {
    idcita: number;
    estado: boolean;
    fecha: Date;
    peluquero: string;
    servicio: string;
    precio: Number;
    establecimiento: string;
}

/**
 * Interfaz para parsear json CitaPelu
 */
export interface CitaPelu {
    idcita: number;
    estado: boolean;
    fecha: Date;
    establecimiento: string;
}

/**
 * Interfaz para parsear json Hora
 */
export interface Hora {
    hora: Time;
    estado: boolean;
}

/**
 * Interfaz para parsear json ListaHoras
 */
export interface ListaHoras {
    resultados: Array<Hora>;
}
