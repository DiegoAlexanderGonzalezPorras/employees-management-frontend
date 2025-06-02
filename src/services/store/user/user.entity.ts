import { RolEnum } from "../../../enums/rolEnum";

export interface IUser {
    username: string;
    rol: RolEnum;
}

export const initialState: IUser = {
    username: '',
    rol: RolEnum.UnSignIn
};
