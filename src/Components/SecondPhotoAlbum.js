import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Photo from './Photo';
import './style.css'

const SecondPhotoAlbum = () => {
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
            <h1>Second page!</h1>
            <div className="top-panel">
                <button className="button">Add</button>
                <button className="button">Remove</button>
                </div>
            {photos.map((photo) => {
                return <Photo photo={photo} key={photo.id} /> 
            })}
        </ul> 
    );
}

export default SecondPhotoAlbum