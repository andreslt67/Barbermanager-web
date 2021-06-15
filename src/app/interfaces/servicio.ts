/**
 * Interfaz para parsear json Servicio
 */
export interface Servicio {
    idservicio: number,
    duracion: number,
    nombre: string,
    precio: Number
}

/**
 * Interfaz para parsear json ListaServicios
 */
export interface ListaServicios {
    servicios: Array<Servicio>
}
