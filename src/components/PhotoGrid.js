import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from './PhotoCard';
import styled from "styled-components"

const PhotoContainer = styled.div `
    max-width: 90vw;
    background-image: linear-gradient(to right, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    display: flex;
    align-items: center;
    margin: 4% auto;
    color: white;

    h2 {
        margin-top: 3%;
    }
    img {
        width: 90%;
        height: auto;
        margin: 2% auto;
    }

    p {
        margin: 2% 3%;
    }
`

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
        <PhotoContainer>
            <PhotoCard title={photoData.title} imgUrl={photoData.hdurl} date={photoData.date} explanation={photoData.explanation} />
        </PhotoContainer>
    );
}

export default PhotoGrid