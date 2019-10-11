import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from './PhotoCard';
import styled from "styled-components";

const PhotoContainer = styled.div `
    max-width: 90vw;
    background-image: linear-gradient(to right, #174281, #0069a4, #008c99, #00a864, #86ba13);
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
        margin: 2% 5%;
    }
`

function PhotoGrid () {
    const [photoData, setPhotoData] = useState("");
    
    const today = new Date();
    const year = today.getFullYear();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const todayDate = `${year}-${mm}-${dd}`
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const niceTodayDate = `${months[mm - 1]} ${dd}, ${year}`
    const [date, setDate] = useState(todayDate);

    useEffect (() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=FzeBihjEAcdFmimNkzFBoW40IJRPE9n0FkqXEImS&date=${date}`)
            .then(response => {
                console.log(response);
                setPhotoData(response.data);
            })
    }, [])

    return (
        <PhotoContainer>
            <PhotoCard title={photoData.title} imgUrl={photoData.hdurl} date={niceTodayDate} explanation={photoData.explanation} />
        </PhotoContainer>
    );
}

export default PhotoGrid