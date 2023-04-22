
import { Dispatch } from 'redux';
import { UsersActionType, UsersActions } from './users.type';
import { Mode } from '@/types/mode.type';
import { UsersService } from '@/services/users.service';


export default class UsersAction {
    static findAllUsers =
        () =>
            async (dispatch: Dispatch<UsersActions>) => {
                try {
                    dispatch({
                        type: UsersActionType.FIND_ALL_USERS,
                        mode: Mode.loading,
                    });
                    const response = await UsersService.findAllUsers();
                    dispatch({
                        type: UsersActionType.FIND_ALL_USERS,
                        payload: response,
                        mode: Mode.loaded,
                    });
                } catch (error) {
                    dispatch({
                        type: UsersActionType.FIND_ALL_USERS,
                        mode: Mode.error,
                        errorMessage: 'error',
                    });
                }
            };
}
