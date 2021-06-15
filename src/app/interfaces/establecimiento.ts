/**
 * Interfaz para parsear json Establecimiento
 */
export interface Establecimiento {
    idestablecimiento: number,
    direccion: string,
    telefono: string,
    horaInicio: Date,
    horaFin: Date
}

/**
 * Interfaz para parsear json EstablecimientoBuscador
 */
export interface EstablecimientoBuscador {
    idestablecimiento: number,
    direccion: string
}

/**
 * Interfaz para parsear json ListaEstablecimientosBuscador
 */
export interface ListaEstablecimientosBuscador {
    resultados: Array<EstablecimientoBuscador>
}
