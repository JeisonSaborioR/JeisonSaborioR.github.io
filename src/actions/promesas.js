import axios from 'axios';
import {URL_PRINCIPAL} from './constantes'

//Promesas pagos externos
export function obtenerFacturasGrupoRecaudo(valorConsultar){
    return axios.get(URL_PRINCIPAL+"factura/gruporecaudo/"+valorConsultar);
}

export function obtenerFacturasContrato(valorConsultar){
    return axios.get(URL_PRINCIPAL+"factura/numerocontrato/"+valorConsultar);
}

export function inicioSesion(usuario,contrasenna){
    const usuarioLogin = {
        "usuario": usuario,
        "contrasenna": contrasenna
        }
    return(axios.post(URL_PRINCIPAL +"usuario", usuarioLogin))
}