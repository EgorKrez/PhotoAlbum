import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Photo from './Photo';

const styles = {
    ul: {
        margin: "0 auto",
        width: "604px",
    }
}

function PhotoAlbum() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((result) => {
            setPhotos(result.data);
        })
    }, [])

    return (
        <ul style={styles.ul}>
            {photos.map((photo) => {
                return <Photo photo={photo} key={photo.id} /> 
            })}
        </ul> 
    );
}

export default PhotoAlbum