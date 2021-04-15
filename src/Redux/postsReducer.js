import { CREATE_POST, REMOVE_POST } from "./Types"
import {createPostReducer, removeAllPosts} from './Reducers'

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: 
        return createPostReducer(state, action.payload)
        case REMOVE_POST:
        return removeAllPosts()
        default: return state
    }
}