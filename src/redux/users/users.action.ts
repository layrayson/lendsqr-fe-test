
import { Dispatch } from 'redux';
import { UsersActionType, UsersActions } from './users.type';
import { Mode } from '@/types/mode.type';

export default class UsersAction {
    static findAllUsers =
        () =>
            async (dispatch: Dispatch<UsersActions>) => {
                try {
                    dispatch({
                        type: UsersActionType.FIND_ALL_USERS,
                        mode: Mode.loading,
                    });
                    const response = await CatalogueService.findAllUsers({

                    });
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
