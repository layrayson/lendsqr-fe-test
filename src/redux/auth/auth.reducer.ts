import { AuthUserModel } from "@/types/auth.type";
import { Mode } from "@/types/mode.type";
import { AuthActionType, AuthActions } from "./auth.type";

interface State {
    mode: Mode;
    errorMessage: string;
    user?: AuthUserModel;
    isLoggedIn: boolean;
}
const initialState: State = {
    mode: Mode.init,
    errorMessage: '',
    isLoggedIn: false,

};



export const authReducer = (
    state: State = initialState,
    action: AuthActions,
): State => {
    switch (action.type) {
        case AuthActionType.LOGIN:
            return {
                ...state,
                isLoggedIn: (action.payload ? true : false) ?? state.isLoggedIn,
                user: action.payload ?? state.user
            };

        default:
            return state;
    }
};