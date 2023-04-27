import { Dispatch } from 'redux';
import { AuthActionType, AuthActions } from './auth.type';
import { AuthUserModel } from '@/types/auth.type';
import { AuthService } from '@/services/auth.service';

export default class AuthAction {
  static login =
    (authUser: AuthUserModel) => (dispatch: Dispatch<AuthActions>) => {
      AuthService.login(authUser);
      dispatch({
        type: AuthActionType.LOGIN,
        payload: authUser
      })
    };
}
