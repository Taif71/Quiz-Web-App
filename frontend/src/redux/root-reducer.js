import { combineReducers } from 'redux';

import adminReducer from './admin/admin.reducer';


const adminData = combineReducers({
    admin: adminReducer
});

export default adminData;