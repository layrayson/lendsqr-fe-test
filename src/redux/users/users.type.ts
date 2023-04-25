import { Mode } from '@/types/mode.type';
import { PageMeta } from '@/types/pagination.type';
import { UserModel } from '@/types/user.type';

export enum UsersActionType {
  FIND_ALL_USERS = 'FIND_ALL_USERS',
  SET_PAGE_LIMIT = 'SET_PAGE_LIMIT'
}

export interface FindAllUsers {
  type: UsersActionType.FIND_ALL_USERS;
  payload?: { data: UserModel[], pagination: PageMeta };
  mode?: Mode;
  errorMessage?: string;
}
export interface SetPageLimit {
  type: UsersActionType.SET_PAGE_LIMIT;
  payload: number;
}

export type UsersActions = FindAllUsers | SetPageLimit;
