import { CREATE_POST, REMOVE_POST } from "./Types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function removePost(post) {
        return {
        type: REMOVE_POST,
        payload: post
    }
}