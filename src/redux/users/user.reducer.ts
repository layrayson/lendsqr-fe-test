import { UserModel } from '@/types/user.type';
import { UsersActionType, UsersActions } from './users.type';
import { Mode } from '@/types/mode.type';
import { PageMeta } from '@/types/pagination.type';

interface State {
    mode: Mode;
    errorMessage: string;
    users: UserModel[];
    pagination: PageMeta;
}
const initialState: State = {
    mode: Mode.init,
    users: [],
    errorMessage: '',
    pagination: { page: 1, limit: 10 }
};

export const usersReducer = (
    state: State = initialState,
    action: UsersActions,
): State => {
    switch (action.type) {
        case UsersActionType.FIND_ALL_USERS:

            return {
                ...state,
                users: action.payload?.data ?? state.users,
                mode: action.mode ?? state.mode,
                pagination: action.payload?.pagination ?? state.pagination,
                errorMessage: action.errorMessage ?? state.errorMessage,
            };

        default:
            return state;
    }
};
