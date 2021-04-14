import React from 'react'
import { connect } from 'react-redux';
import Page, {mapStateToProps} from './Page';

const SecondPage = ({syncPosts}) => {
    return <Page posts={syncPosts} title={"Second Page"} key={syncPosts.date}/>
}

export default connect(mapStateToProps, null)(SecondPage)