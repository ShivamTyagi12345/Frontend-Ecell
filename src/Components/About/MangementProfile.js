import React from "react";
import './about.css';
const MangementProfile = (props) => {

    return (
            <div className="card m-2" style={{ width: "17rem" }}>
                <img src={props.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
    )
}
export default MangementProfile