import React from "react";
import star from "./Star.png";


export default function Card (props) {

    let badgeText

    if(props.openSpout === 0) {
        badgeText = "SOLD OUT"
    }else if(props.location == "ONLINE") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div> }
            <div className="img-container">
            <img src = {props.img} className="card--image" alt="head image" />
            </div>
            <div className="card--stats">
                <img src = {star} className="card--star" alt="star icon" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price" ><span className=" bold">From ${props.price}</span> / person</p>
        </div>
    )
}
