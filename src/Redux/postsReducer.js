import { CREATE_POST, FETCH_POSTS, REMOVE_POST } from "./types";
import {
  createPostReducer,
  fetchPostsReducer,
  removeAllPostsReducer,
} from "./reducers";
import { handleActions } from "redux-actions";

export const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = handleActions(
  {
    [CREATE_POST]: (state = initialState, action) =>
      createPostReducer(state, action.payload),

    [REMOVE_POST]: () => removeAllPostsReducer(),

    [FETCH_POSTS]: (state = initialState, action) =>
      fetchPostsReducer(state, action.payload),
  },
  {}
);
