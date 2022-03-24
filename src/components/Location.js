import React from 'react'

export default function Location(props) {
    
    return (
        <div className="location-container">
        <img src={props.item.imageUrl} />
            <div className="location-content">
                <div className="location--row1">
                <h3>{props.item.location}</h3>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
            <h1>{props.item.title}</h1>
            <p>{props.item.startDate} - {props.item.endDate}</p>
            <p>{props.item.description}</p>
            </div>
        </div>
    )
}