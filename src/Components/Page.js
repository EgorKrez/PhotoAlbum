import React from 'react'

const Page = ({posts, title}) => {
    if (posts) {
        return (
            <div className="page-wrapper">
                <div>{title}</div>
            </div>
        );
    }
    return (
            <div className="page-wrapper">
                <div >{title}</div>
                <div>You have no posts</div>
            </div>
    );
}

export const mapStateToProps = state => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    }
} 

export default Page