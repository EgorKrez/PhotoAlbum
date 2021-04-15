import { CREATE_POST, REMOVE_POST } from "./Types"

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: 
        return { ...state, posts: state.posts.concat([action.payload])}
        case REMOVE_POST:
        return { posts: []} 
        default: return state
    }
}