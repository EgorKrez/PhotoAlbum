import React from 'react'
import { connect } from 'react-redux';

const Page = ({syncPosts, title}) => {
        return (
            <div className="page-wrapper">
                <div>{title}</div>
                {syncPosts.length ? 
                (<div><ul>{syncPosts.map(post => <div key={post.id}>{post.title}</div>) }</ul></div>) : 
                (<div>You have no posts</div>)
                }
            </div>
        );
}

export const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
} 

export default connect(mapStateToProps, null)(Page)
//export default Page
