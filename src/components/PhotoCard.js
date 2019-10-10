import React from "react";

const PhotoCard = props => {
    return (
        <div className="photoCard" key={props.id}>
            <h2>{props.title}</h2>
            <img className="photo" alt="NASA photo of the day" src={props.imgUrl} />
            <p>{props.explanation}</p>
            <p>date: {props.date}</p>
        </div>
    );
};

export default PhotoCard