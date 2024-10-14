import React from "react"

export default function Card(props) {
    let badgeLabel
    if (props.openSpots === 0) {
        badgeLabel = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeLabel = "ONLINE"
    }
    return (
        <div className="card">
            {badgeLabel && <div className="badge">{badgeLabel}</div>}
            <img className="photo" src={props.coverImg} alt="display-photo" />
            <div className="row1">
                <img className="star" src="star.png" alt="star" />
                <span className="rating"> {props.stats.rating.toFixed(1)} </span>
                <span className="review-count">({props.stats.reviewCount}) • </span>
                <span className="country">{props.location}</span>
            </div>
            <p className="stats">{props.title}</p>
            <p className="cost"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}