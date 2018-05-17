import { FETCH_STATEDATE } from "../actions/constantes";
import moment from 'moment';
export default function(state = null, action){
    switch(action.type){
        case FETCH_STATEDATE:
            return action.payload
        default:
            return null; 
    }
}