import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createUserState} from "./user/user.reducer";

const appReducer = combineReducers({
    userState: createUserState.reducer
});

const store = configureStore({
    reducer: (state, action) => appReducer(state, action),
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
