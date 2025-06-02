import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type IUser, initialState} from "./user.entity";

export const createUserState = createSlice({
    name: 'UserState',
    initialState,
    reducers: {
        setUser(state, {payload}: PayloadAction<IUser>) {
            Object.assign(state, payload);
        }
    }
});

export const createUserActions = createUserState.actions;
