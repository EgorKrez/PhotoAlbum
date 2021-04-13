import React from 'react'
import { connect } from 'react-redux';
import Page, {mapStateToProps} from './Page'

const FirstPage = ({posts}) => {
    return <Page posts={posts} title={"First Page"}/>
}

export default connect(mapStateToProps, null)(FirstPage)