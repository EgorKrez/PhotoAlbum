import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Photo from './Photo';

function PhotoAlbum() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then(function (result) {
            setPhotos(result.data);
        })
    }, [])

    return (
        <table>
            <tr>
            {photos.map((photo) => {
                return <Photo photo={photo} key={photo.id} /> 
            })}
            </tr>
        </table> 
    );
}

export default PhotoAlbum