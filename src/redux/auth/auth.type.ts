import { AuthUserModel } from '@/types/auth.type';
import { Mode } from '@/types/mode.type';

export enum AuthActionType {
  LOGIN = 'LOGIN',
}

export interface Login {
  type: AuthActionType.LOGIN;
  payload?: AuthUserModel;
  mode?: Mode;
  errorMessage?: string;
}

export type AuthActions = Login;
