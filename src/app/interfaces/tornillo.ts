/**
 * Interfaz para los datos de un tornillo
 */
export interface Tornillo {
    id: string;
    nombre: string;
    precio: string;
    formato: string;
    marca: string;
}

/**
 * Función para inicializar una variable de tipo 'Tornillo'
 */
export function TORNILLO_BLANK(): Tornillo {
    const aux = {
        id: '',
        nombre: '',
        precio: '',
        formato: '',
        marca: ''
    };
    return Object.assign(aux);
}