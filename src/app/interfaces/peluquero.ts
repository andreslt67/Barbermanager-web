/**
 * Interfaz para parsear json Peluquero
 */
export interface Peluquero {
    idpeluquero: number,
    establecimiento: string,
    usuario: string,
    email: string,
    nombre: string,
    idestablecimiento: number
}

/**
 * Interfaz para parsear json PeluqueroBuscador
 */
export interface PeluqueroBuscador {
    idpeluquero: number,
    usuario: string,
    nombre: string,
    establecimiento: string
}

/**
 * Interfaz para parsear json ListaPeluqueroBuscador
 */
export interface ListaPeluqueroBuscador {
    resultados: Array<PeluqueroBuscador>
}
