export const createPostReducer = (state, payload) => {
    return { ...state, posts: state.posts.concat([payload])}
}

export const removeAllPostsReducer = () => {
    return { posts: [] } 
}

export const fetchPostsReducer = (state, payload) => {
    return { ...state, posts: state.posts.concat(...payload)}
}