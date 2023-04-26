import { Dispatch } from 'redux';
import { UserActionType, UserActions, } from './user.type';
import { Mode } from '@/types/mode.type';
import { UserService, } from '@/services/user.service';

export default class UserAction {
  static findUserById =
    ({ id }: { id: string }) =>
      async (dispatch: Dispatch<UserActions>) => {
        try {
          dispatch({
            type: UserActionType.FIND_USER_BY_ID,
            mode: Mode.loading,
          });
          const response = await UserService.findUserById({ id });
          dispatch({
            type: UserActionType.FIND_USER_BY_ID,
            payload: response,
            mode: Mode.loaded,
          });
        } catch (error) {
          dispatch({
            type: UserActionType.FIND_USER_BY_ID,
            mode: Mode.error,
            errorMessage: error as string,
          });
        }
      };
}
