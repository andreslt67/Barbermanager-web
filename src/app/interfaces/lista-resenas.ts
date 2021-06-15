import { Resena, ResenaPelu } from "./resena";

/**
 * Interfaz para parsear json ListaResenas
 */
export interface ListaResenas {
    resenas: Array<Resena>;
}

/**
 * Interfaz para parsear json ListaResenasPelu
 */
export interface ListaResenaPelu {
    resenas: Array<ResenaPelu>;
}
