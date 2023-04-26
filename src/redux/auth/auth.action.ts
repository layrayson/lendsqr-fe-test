import { Dispatch } from 'redux';
import { AuthActions } from './auth.type';
import { AuthUserModel } from '@/types/auth.type';
import { AuthService } from '@/services/auth.service';

export default class AuthAction {
  static login =
    (authUser: AuthUserModel) => (dispatch: Dispatch<AuthActions>) => {
      AuthService.login(authUser);
    };
}
