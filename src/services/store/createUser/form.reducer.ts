import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {initialState} from "./form.entity";

export const createFormState = createSlice({
    name: 'FormState',
    initialState,
    reducers: {
        setForm(state, {payload}: PayloadAction<object>) {
            Object.assign(state, payload);
        }
    }
});

export const createFormActions = createFormState.actions;
