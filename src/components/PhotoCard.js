import React from "react";

const PhotoCard = props => {
    return (
        <div className="photoCard" key={props.id}>
            <img className="photo" alt="NASA photo of the day" src={props.imgUrl} />
            <h2>{props.title}</h2>
            <p>date: {props.date}</p>
            <p>{props.explanation}</p>
        </div>
    );
};

export default PhotoCard