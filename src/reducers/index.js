import { combineReducers } from 'redux';
import date from './reducer_date_state';
import isAuthenticated from './reducer_authentication';
import { reducer as formReducer} from 'redux-form'; 
import showNotification from './reducer_showNotifications';
import facturas from './reductor_pagosExterno';
import iniciarSesion from './reductor_iniciarSesion';
export default {
    form:formReducer,
    isAuthenticated,
    date,
    showNotification,
    facturas,
    iniciarSesion
};