import React from 'react'
import { connect } from 'react-redux';
import { createItem, removeItem } from '../Redux/Actions'

const TopPanel = (props) => {
    const addItem = () => {
        props.createItem()
    }

    const removeItem = () => {
        props.removeItem()
    }

    return (
        <div className="top-panel-container">
            <div className="top-panel-item" onClick={addItem}>Добавить</div>
            <div className="top-panel-item" onClick={removeItem}>Удалить</div>
        </div>
    );
}

const mapDispatchToProps = {
    createItem,
    removeItem
}

export default connect(null, mapDispatchToProps) (TopPanel)