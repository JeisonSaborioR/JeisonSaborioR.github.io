import {INICIAR_SESION} from "../actions/constantes";

export default function(state = false, action){
 
    switch(action.type){
        case INICIAR_SESION:
            return action.payload;
        default:
            return state;
    }
}