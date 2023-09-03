import { IAuth } from './IAuth';

export interface IRegister extends IAuth {
    username?: string;
    confirmPassword?: string;
}
