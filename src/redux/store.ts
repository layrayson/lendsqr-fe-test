import { createStore, applyMiddleware } from 'redux';
import rootReducer from '@/redux/index.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
// const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        // client: createGQLClient(),
      }),
    ),
  ),
);
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState,
// comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(() => store);
