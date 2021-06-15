/**
 * Interfaz para parsear json Favorito
 */
export interface Favorito {
    idfavorito: number,
    idpeluquero: number,
    peluquero: string,
    establecimiento: string
}

/**
 * Interfaz para parsear json FavoritoMin
 */
export interface FavoritoMin {
    idfav: number
}
