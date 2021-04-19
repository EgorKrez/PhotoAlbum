import React from 'react'

const Item = ({item}) => {
    return (
        <div className="list-item">
            <h1>{item.title}</h1>
        </div>
    );
}

export default Item