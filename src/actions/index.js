import { FETCH_STATEDATE, FETCH_AUTHENTICATION,SHOW_NOTIFICATION,OBTENER_FACTURASPAGOSEXTERNOS,INICIAR_SESION} from './constantes';
import { obtenerFacturasContrato,obtenerFacturasGrupoRecaudo,inicioSesion} from './promesas'

export function fetchStateDatePicker(date){
  
    return {
        type:FETCH_STATEDATE,
        payload: date
    }
}

export function fetchAuthentication(isAuthenticated){
    return {
        type:FETCH_AUTHENTICATION,
        payload: isAuthenticated
    }
}
export function fetchShowNotifications(showNotification){
    return {
        type:SHOW_NOTIFICATION,
        payload: showNotification
    }
}

//Pagos Externos
export function obtenerFacturasPagosExternos(tipoConsulta, valorConsultar){
    var request = "";
    if(tipoConsulta === "Grupo Recaudo")
        request = obtenerFacturasGrupoRecaudo(valorConsultar);
    else
        request = obtenerFacturasContrato(valorConsultar); 
    return {
        type:OBTENER_FACTURASPAGOSEXTERNOS,
        payload: request
    }
}
export function iniciarSesion(usuario,contrasenna){
    console.log("usuario" + usuario)
    var request = inicioSesion(usuario,contrasenna);
    return{
        type: INICIAR_SESION,
        payload:request
    }
}