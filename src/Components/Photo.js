import React from 'react'

function Photo(props) {
    return (        
        <div>
        {JSON.stringify(props.photo)}    
        </div>
    );
}

export default Photo