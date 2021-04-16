import React from 'react'

const Page = ({posts, title}) => {
        return (
            <div className="page-wrapper">
                <div>{title}</div>
                {posts ? 
                 <div><ul>{posts.map(post => <div key={post.id}>{post.title}</div>) }</ul></div> :
                 <div>You have no posts</div>
                }
            </div>
        );
}

export const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
} 

export default Page