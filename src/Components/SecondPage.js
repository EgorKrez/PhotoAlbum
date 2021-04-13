import React from 'react'
import { connect } from 'react-redux';
import Page, {mapStateToProps} from './Page';

const SecondPage = ({posts}) => {
    return <Page posts={posts} title={"Second Page"}/>
}

export default connect(mapStateToProps, null)(SecondPage)