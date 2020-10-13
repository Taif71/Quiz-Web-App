import { AdminActionTypes } from './admin.types';

export const addQuestion = question => ({
    type: AdminActionTypes.SET_CURRENT_QNUM,
    payload: question
});

export const setCurrentAdmin = admin => ({
    type: AdminActionTypes.SET_CURRENT_ADMIN,
    payload: admin
});

export const setAdminName = adminName => ({
    type: AdminActionTypes.SET_CURRENT_ADMIN_NAME,
    payload: adminName
});

export const setPassword = password => ({
    type: AdminActionTypes.SET_CURRENT_PASSWORD,
    payload: password
});