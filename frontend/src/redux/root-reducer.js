import { combineRedurs } from 'redux';

import adminReducer from './admin/admin-reducer';


const adminData = combineRedurs({
    admin: adminReducer
});

export default adminData;