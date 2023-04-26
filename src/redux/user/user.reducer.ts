import { UserModel } from '@/types/user.type';
import { UserActionType, UserActions, } from './user.type';
import { Mode } from '@/types/mode.type';
import { PageMeta } from '@/types/pagination.type';

interface State {
  mode: Mode;
  errorMessage: string;
  user?: UserModel;
}
const initialState: State = {
  mode: Mode.init,
  errorMessage: '',
};

export const userReducer = (
  state: State = initialState,
  action: UserActions,
): State => {
  switch (action.type) {
    case UserActionType.FIND_USER_BY_ID:
      return {
        ...state,
        user: action.payload ?? state.user,
        mode: action.mode ?? state.mode,
        errorMessage: action.errorMessage ?? state.errorMessage,
      };

    default:
      return state;
  }
};
