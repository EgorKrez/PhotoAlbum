import React from 'react'
import './styles.css'
import { createPost, removePost , fetchPosts} from '../Redux/Actions'
import { connect } from 'react-redux';
import axios from 'axios';


class TopPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            counter: 1,
        }
      }

    addPost = event => {
        event.preventDefault()

        const input = document.querySelector('#input')

        const title = input.value

        if(title) {
            const newPost = {
                title, id: Date.now().toString()
            }
            this.props.createPost(newPost)  

            input.value = ''
        } else {
            alert("Post cannot be empty!!!")
        }
    }

    removePost = event => {
        event.preventDefault()
            this.props.removePost()  
    }

    fetchPosts = event => {
        event.preventDefault()

        axios 
            .get(`https://jsonplaceholder.typicode.com/posts/?id=${this.state.counter++}`)
            .then((result) => {
                let post = result.data.map((item) => {
                    return {title: item.title, id: Date.now().toString()}
                });
                this.props.fetchPosts(post)
            })
    }

    render() {
        return (
            <div className="top-panel">
                <div className="form-panel">
                    <form onSubmit={this.addPost}>
                    <input 
                    type="text"
                    id="input"
                    />
                    </form>
                </div>
                <div className="button-panel">
                <button className="button" onClick={this.addPost}>Add</button>
                <button className="button" onClick={this.fetchPosts}>Fetch</button>
                <button className="button" onClick={this.removePost}>Remove All</button>
                </div>       
            </div>
        );
    }
}

const mapDispatchToProps = {
    createPost,
    removePost,
    fetchPosts,
}

export default connect(null, mapDispatchToProps) (TopPanel)

