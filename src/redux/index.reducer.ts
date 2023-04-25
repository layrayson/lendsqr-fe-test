import { combineReducers } from 'redux';
import { usersReducer } from './users/user.reducer';

const reducers = combineReducers({ usersReducer });
export default reducers;
export type RootState = ReturnType<typeof reducers>;
