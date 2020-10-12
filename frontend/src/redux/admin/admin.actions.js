import { AdminActionTypes } from './admin-types';

export const addQuestion = question => ({
    type: AdminActionTypes.SET_CURRENT_QNUM,
    payload: question
});