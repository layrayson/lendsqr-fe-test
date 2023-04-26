import { Dispatch } from 'redux';
import { UsersActionType, UsersActions } from './users.type';
import { Mode } from '@/types/mode.type';
import { UserService } from '@/services/user.service';
import { PageMeta } from '@/types/pagination.type';

export default class UsersAction {
  static findAllUsers =
    ({ pagination }: { pagination: PageMeta }) =>
      async (dispatch: Dispatch<UsersActions>) => {
        try {
          dispatch({
            type: UsersActionType.FIND_ALL_USERS,
            mode: Mode.loading,
          });
          const response = await UserService.findAllUsers({ pagination });
          dispatch({
            type: UsersActionType.FIND_ALL_USERS,
            payload: {
              data: response,
              pagination: { ...pagination, page: pagination.page },
            },
            mode: Mode.loaded,
          });
        } catch (error) {
          dispatch({
            type: UsersActionType.FIND_ALL_USERS,
            mode: Mode.error,
            errorMessage: error as string,
          });
        }
      };
}
