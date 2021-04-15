import { createAction } from "redux-actions";
import { CREATE_POST, REMOVE_POST,FETCH_POSTS } from "./Types";

export const createPost = createAction(CREATE_POST)
export const removePost = createAction(REMOVE_POST)
export const fetchPosts = createAction(FETCH_POSTS)