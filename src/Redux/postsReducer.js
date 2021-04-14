import { CREATE_POST } from "./Types"

const initialState = {
    posts: [/* {title: 'react rocks', date: new Date().toString()}, {title: '1488', date: new Date().toString()}, {title: 'hello egor', date: new Date().toString()} */],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case CREATE_POST: 
        console.log({ ...state, posts: state.posts.concat([action.payload])});
        return { ...state, posts: state.posts.concat([action.payload])}
        default: return state
    }
}