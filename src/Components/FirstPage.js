import React from 'react'
import { connect } from 'react-redux';
import Page, {mapStateToProps} from './Page'

const FirstPage = ({syncPosts}) => {
    return <Page posts={syncPosts} title={"First Page"} />
}

export default connect(mapStateToProps, null)(FirstPage)