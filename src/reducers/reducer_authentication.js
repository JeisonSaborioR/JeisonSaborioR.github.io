import { FETCH_AUTHENTICATION } from "../actions/constantes";

export default function(state = false, action){
    switch(action.type){
        case FETCH_AUTHENTICATION:
            return action.payload;
        default:
            return state; 
    }
}