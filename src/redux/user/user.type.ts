import { Mode } from '@/types/mode.type';
import { UserModel } from '@/types/user.type';

export enum UserActionType {
  FIND_USER_BY_ID = 'FIND_USER_BY_ID',
}

export interface FindUserById {
  type: UserActionType.FIND_USER_BY_ID;
  payload?: UserModel;
  mode?: Mode;
  errorMessage?: string;
}


export type UserActions = FindUserById;
