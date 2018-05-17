import { OBTENER_FACTURASPAGOSEXTERNOS } from "../actions/constantes";

export default function(state = [], action){
 
    switch(action.type){
        case OBTENER_FACTURASPAGOSEXTERNOS:
            return action.payload.data;
        default:
            return state;
    }
}