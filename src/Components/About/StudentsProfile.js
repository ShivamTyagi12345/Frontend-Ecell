import React from "react";
import './about.css';
import { FaGithub } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const StudentsProfile = (props) => {

    return (
        <div className="card m-2" style={{ width: "17rem" }}>
            <img src={props.imgUrl} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h4 className="text-center">{props.name}</h4>
                <div className="" style={{ textAlign: "center" }}>
                    <a href={props.links.facebook}><FaFacebookSquare style={{ fontSize: "30px", margin: "12px" }} /> </a>
                    <a href={props.links.linkedinIn}><FaLinkedinIn style={{ fontSize: "30px", margin: "12px" }} /></a>
                    <a href={props.links.github}><FaGithub style={{ fontSize: "30px", margin: "12px" }} /></a>
                    <a href={props.links.twitter}><FaTwitter style={{ fontSize: "30px", margin: "12px" }} /> </a>
                </div>
            </div>
        </div>
    )
}
export default StudentsProfile