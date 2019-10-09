import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from './PhotoCard';

function PhotoGrid () {
    const [photoData, setPhotoData] = useState("");

    useEffect (() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=FzeBihjEAcdFmimNkzFBoW40IJRPE9n0FkqXEImS')
            .then(response => {
                console.log(response);
                setPhotoData(response.data);
            })
    }, [])

    return (
        <div className="photoContainer">
            {Array.from(photoData).map((photo, index) => {
                return <PhotoCard key={index} title={photo.title} imgUrl={photo.url} date={photo.date} />
            })}
        </div>
    )
}

export default PhotoGrid