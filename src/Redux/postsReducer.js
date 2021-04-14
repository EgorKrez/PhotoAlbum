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
        state.posts.forEach((item, i, array) => {
            if (action.payload.title === item.title) {
                array.splice(i, 1)
            }
        })
        return { ...state, posts: state.posts.concat([action.payload])}
        default: return state
    }
}