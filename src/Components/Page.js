import React from 'react'

const Page = ({posts ,title}) => {
        return (
            <div className="page-wrapper">
                <div>{title}</div>
                {
                 (!posts.length) ? 
                 <div>You have no posts</div> : 
                 <ul>{posts.map(post => <div>{JSON.stringify(post)}</div>) }</ul>
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