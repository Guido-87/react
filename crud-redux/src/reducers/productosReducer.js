import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: false,
    loading: false,
    productoAEliminar: null,
    productoAEditar: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: action.payload,
            };
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            };
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            };
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoAEliminar: action.payload
            };
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoAEliminar),
                productoAEliminar: null
            };
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoAEditar: action.payload
            };
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productoAEditar: null,
                productos: [state.productos.map(
                    producto => producto.id === action.payload.id ? producto === action.payload :
                        producto)]
            };
        default:
            return state;
    }
}