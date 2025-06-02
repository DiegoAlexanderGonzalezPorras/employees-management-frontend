import type { RootState } from '../index';
import {type IUser} from "./user.entity";

export const userState = (state: RootState): IUser => state.loaderState;

export const userSelector = (state: RootState): IUser => userState(state);
