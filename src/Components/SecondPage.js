import React from 'react'
import { connect } from 'react-redux';
import Page, {mapStateToProps} from './Page';

const SecondPage = ({syncPosts}) => {
    return <Page posts={syncPosts} title={"Second Page"}/>
}

export default connect(mapStateToProps, null)(SecondPage)