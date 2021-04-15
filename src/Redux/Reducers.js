import axios from 'axios';
import { FETCH_POSTS } from './Types';

export const createPostReducer = (state, payload) => {
    if (!state.posts) state.posts = []
    return { ...state, posts: state.posts.concat([payload])}
}

export const removeAllPosts = () => {
    return { posts: []} 
}

export const fetchPosts = () => {
    return async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        const json = await response.json()
        console.log('await json');
        //dispatch({type: FETCH_POSTS, payload: json})
    }
    /* if (!state.posts) state.posts = []
        await axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then((result) => {
            const ar = []
            result.data.forEach((item) => {
                ar.push({title: item.title, id: new Date().toString()})
            });
            //return {...state, posts: state.posts.concat([ar])}
            return result
        })   */      
}