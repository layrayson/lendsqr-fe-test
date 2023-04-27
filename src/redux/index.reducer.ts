import { authReducer } from './auth/auth.reducer';
import { userReducer } from './user/user.reducer';
import { combineReducers } from 'redux';
import { usersReducer } from './users/user.reducer';

const reducers = combineReducers({ authReducer, usersReducer, userReducer });
export default reducers;
export type RootState = ReturnType<typeof reducers>;
