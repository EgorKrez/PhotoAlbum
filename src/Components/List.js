import React from 'react'
import { connect } from 'react-redux';
import Item from './Item'

const List = ({ items }) => {
    return (
        <div className="list-container">
            {items.map((item) => {
                return <Item item={item} key={item.id} />
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, null )(List)