import { createAction } from "redux-actions";
import { CREATE_POST, REMOVE_POST } from "./Types";

export const createPost = createAction(CREATE_POST)
export const removePost = createAction(REMOVE_POST)