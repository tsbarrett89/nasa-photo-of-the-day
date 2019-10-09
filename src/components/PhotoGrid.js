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
            <PhotoCard title={photoData.title} imgUrl={photoData.hdurl} date={photoData.date} explanation={photoData.explanation} />
        </div>
    );
}

export default PhotoGrid