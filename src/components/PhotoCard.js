import React from "react";
import styled from "styled-components";

const DateButton = styled.button `
    width: 200px;
    background-color: #00C09F;
    margin-bottom: 3%;
    border: 2px solid #174281;
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;
`

const PhotoCard = props => {
    return (
        <div className="photoCard" key={props.id}>
            <h2>{props.title}</h2>
            <img className="photo" alt="NASA photo of the day" src={props.imgUrl} />
            <p>{props.explanation}</p>
            <DateButton><p>date: {props.date}</p></DateButton>
        </div>
    );
};

export default PhotoCard