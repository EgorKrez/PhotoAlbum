import { CREATE_POST, FETCH_POSTS, REMOVE_POST } from "./Types"
import {createPostReducer, fetchPosts, removeAllPosts} from './Reducers'

export const initialState = {
    posts: [],
    fetchedPosts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: 
        return createPostReducer(state, action.payload)
        case REMOVE_POST:
        return removeAllPosts()
        case FETCH_POSTS:
        return fetchPosts(state, action.payload)
        default: return state
    }
}