import React, { useEffect } from 'react'

function Photo(props) {

    useEffect(() => {
        console.log(props.photo);
    }, []) 

    return (        
        <div>
        {JSON.stringify(props.photo)}    
        </div>
    );
}

export default Photo