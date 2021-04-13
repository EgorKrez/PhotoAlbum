import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Photo from './Photo';
import './style.css'

const PhotoAlbum = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((result) => {
            setPhotos(result.data);
        })
    }, [])

    return (
        <ul className="ul">
            {photos.map((photo) => {
                return <Photo photo={photo} key={photo.id} /> 
            })}
        </ul> 
    );
}

export default PhotoAlbum