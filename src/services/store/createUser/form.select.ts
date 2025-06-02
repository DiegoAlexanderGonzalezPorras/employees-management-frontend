import type { RootState } from '../index';

export const formState = (state: RootState): object => state.formState;

export const formSelector = (state: RootState): object => formState(state);
