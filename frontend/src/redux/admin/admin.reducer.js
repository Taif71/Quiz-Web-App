
import { AdminActionTypes } from './admin.types';

const INITIAL_STATE = {
    qNum: 5,
    currentAdmin: null,
    adminName: null,
    password: null
};

const adminReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AdminActionTypes.SET_CURRENT_QNUM:
            return {
                ...state,
                qNum: action.payload
            };
        case AdminActionTypes.SET_CURRENT_ADMIN:
            return {
                ...state,
                admin: action.payload
            }
        case AdminActionTypes.SET_CURRENT_ADMIN_NAME:
            return {
                ...state,
                adminName: action.payload
            }
        case AdminActionTypes.SET_CURRENT_PASSWORD:
            return {
                ...state,
                password: action.payload
            }    
        default: 
            return state;
    }
};

export default adminReducer;