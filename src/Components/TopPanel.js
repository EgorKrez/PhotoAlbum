import React from 'react'
import './styles.css'
import {createPost} from '../Redux/Actions'
import { connect } from 'react-redux';

class TopPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
      }

    addPost = event => {
        event.preventDefault()

        const input = document.querySelector('#egor')

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

        const input = document.querySelector('#egor')

        const title = input.value

        if(title) {
            const remPost = {
                title, id: Date.now().toString()
            }
            
            this.props.removePost(remPost)  

            input.value = ''
        } else {
            alert("Post cannot be empty!!!")
        }
    }

    render() {
        return (
            <div className="top-panel">
                <div className="form-panel">
                    <form onSubmit={this.addPost}>
                    <input 
                    type="text"
                    id="egor"
                    />
                    </form>
                </div>
                <div className="button-panel">
                <button className="button" onClick={this.addPost}>Add</button>
                <button className="button" onClick={this.removePost}>Remove</button>
                </div>
                
                
            </div>
        );
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps) (TopPanel)

