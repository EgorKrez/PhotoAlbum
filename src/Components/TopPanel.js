import React, { useState } from 'react'
import './styles.css'
import { createPost, removePost , fetchPosts} from '../Redux/Actions'
import { connect } from 'react-redux';
import axios from 'axios';


const TopPanel = (props) => {
    const [counter, setCounter] = useState(1)

    const addPost = () => {
        const input = document.querySelector('#input')
        
        if(input.value) {
            const newPost = {
                title: input.value, id: Date.now().toString()
            }
            props.createPost(newPost)  

            input.value = ''
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
                setCounter(counter + 1)
                props.fetchPosts(post)
            })
    }

        return (
            <div className="top-panel">
                <div className="form-panel">
                    <form onSubmit={addPost}>
                    <input 
                    type="text"
                    id="input"
                    autoFocus="true"
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