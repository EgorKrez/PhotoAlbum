export const createPostReducer = (state, payload) => {
    return { ...state, posts: state.posts.concat([payload])}
}

export const removeAllPosts = () => {
    return { posts: [] } 
}

export const fetchPosts = (state, payload) => {
    return { ...state, posts: state.posts.concat(...payload)}
}