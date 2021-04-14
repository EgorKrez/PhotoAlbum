import React from 'react'
import './styles.css'
import {createPost} from '../Redux/Actions'
import { connect } from 'react-redux';

const TopPanel = () => {
    return (
        <div className="top-panel">
            <button className="button" onClick={addPost}>Add</button>
            <button className="button">Remove</button>
        </div>
    );
}

const addPost = (event) => {
    event.preventDefault()

    const title = 'say egor'

    const newPost = {
        title, id: Date.now().toString()
    }

    console.log(createPost(newPost));    
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps) (TopPanel)