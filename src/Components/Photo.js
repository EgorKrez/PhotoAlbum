import React from 'react'
import './style.css'

const Photo = ({ photo }) => {
     return (        
        <div className="item">
            <div className="item-header">
                <div className="item-header-number">{photo.id}</div>
                {photo.title}
                </div>
        <img src={photo.url} alt="text"></img>
        </div>
    );

}

export default Photo