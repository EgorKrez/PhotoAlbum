import { createAction } from "redux-actions";
import { CREATE_POST, REMOVE_POST, FETCH_POSTS } from "./types";

export const createPostAction = createAction(CREATE_POST);
export const removePostAction = createAction(REMOVE_POST);
export const fetchPostsAction = createAction(FETCH_POSTS);
