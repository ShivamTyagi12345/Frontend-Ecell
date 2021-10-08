import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock } from '@fortawesome/free-solid-svg-icons'
import './Achievements.css'



export class Achievements_unit extends Component {
    render() {
        return (
            <>
            <div className="col-lg-6 my-3">
                <div className="card zoom">
                    <img className="card-img-top" alt={this.props.achievement_name} src={this.props.img_url}/>
                    <div className="card-body p-5">
                        <h5 className="card-title">{this.props.achievement_name}</h5>
                        <div style={{textAlign:"justify", color:"#393939", opacity: .5}}>
                            <p className="card-text">{this.props.achievement_description}</p>
                            <div className="d-flex justify-content-between">
                                <span className="ach_member"><FontAwesomeIcon icon={faUsers} />{this.props.members} Members</span>
                                <span className="ach_date"> <FontAwesomeIcon icon={faClock} /> {this.props.acheivement_date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Achievements_unit
