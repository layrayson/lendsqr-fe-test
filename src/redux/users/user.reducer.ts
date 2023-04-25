import { UserModel } from '@/types/user.type';
import { UsersActionType, UsersActions } from './users.type';
import { Mode } from '@/types/mode.type';

interface State {
    mode: Mode;
    errorMessage: string;
    users: UserModel[];
    nextPage: number;
    total: number;
}
const initialState: State = {
    mode: Mode.init,
    users: [],
    errorMessage: '',
    nextPage: 1,
    total: 0,
};

export const usersReducer = (
    state: State = initialState,
    action: UsersActions,
): State => {
    switch (action.type) {
        case UsersActionType.FIND_ALL_USERS:

            return {
                ...state,
                users: [...state.users, ...(action.payload ?? [])],
                mode: action.mode ?? state.mode,
                nextPage: state.nextPage,
                total: state.total,
                errorMessage: action.errorMessage ?? state.errorMessage,
            };

        default:
            return state;
    }
};
