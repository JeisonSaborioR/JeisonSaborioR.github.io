import { SHOW_NOTIFICATION } from "../actions/constantes";

export default function(state = false, action){
    switch(action.type){
        case SHOW_NOTIFICATION:
            return action.payload;
        default:
            return state; 
    }
}