import { combineReducers } from 'redux';

import adminReducer from './admin/admin.reducer';


const rootReducer = combineReducers({
    admin: adminReducer
});

export default rootReducer;