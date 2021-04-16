import React, { useRef, useState } from 'react'
import './styles.css'
import { createPost, removePost , fetchPosts} from '../Redux/Actions'
import { connect } from 'react-redux';
import axios from 'axios';


const TopPanel = (props) => {
    const [counter, setCounter] = useState(1)
    const inputRef = useRef(null)

    const addPost = () => {
        const title = inputRef.current.value;

        if(title) {
            const newPost = {
                title: title, id: Date.now().toString()
            }
            props.createPost(newPost)  

            inputRef.current.value = ''
        } else {
            alert("Post cannot be empty!!!")
        }
    }

    const removePost = () => {
            props.removePost()  
    }

    const fetchPosts = () => {
        axios 
            .get(`https://jsonplaceholder.typicode.com/posts/?id=${counter}`)
            .then((result) => {
                let post = result.data.map((item) => {
                    return {title: item.title, id: Date.now().toString()}
                });
                setCounter(prev => prev + 1)
                props.fetchPosts(post)
            })
    }

        return (
            <div className="top-panel">
                <div className="form-panel">
                    <form onSubmit={addPost}>
                    <input 
                    ref={inputRef}
                    type="text"
                    autoFocus={true}
                    />
                    </form>
                </div>
                <div className="button-panel">
                <button className="button" onClick={addPost}>Add</button>
                <button className="button" onClick={fetchPosts}>Fetch</button>
                <button className="button" onClick={removePost}>Remove All</button>
                </div>       
            </div>
        );
    }

const mapDispatchToProps = {
    createPost,
    removePost,
    fetchPosts,
}

export default connect(null, mapDispatchToProps) (TopPanel)