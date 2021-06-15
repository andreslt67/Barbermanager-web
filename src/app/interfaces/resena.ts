/**
 * Interfaz para parsear json Resena
 */
export interface Resena {
    idresena: number,
    fecha: Date,
    peluquero: string,
    contenido: string,
    valoracion: number
}

/**
 * Interfaz para parsear json ResenaPelu
 */
export interface ResenaPelu {
    idresena: number,
    fecha: Date,
    cliente: string,
    contenido: string,
    valoracion: number
}
