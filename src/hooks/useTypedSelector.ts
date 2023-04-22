import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../redux/index.reducer';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
