import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createUserState} from "./user/user.reducer";
import { createFormState } from './createUser/form.reducer';

const appReducer = combineReducers({
    userState: createUserState.reducer,
    formState: createFormState.reducer
});

const store = configureStore({
    reducer: (state, action) => appReducer(state, action),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
