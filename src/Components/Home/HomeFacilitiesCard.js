import React, { Component }from "react";
import './Home.css';
import {Card} from 'react-bootstrap';


export class HomeFacilitiesCard extends Component {
    render() {
        return (
            <>
            <Card style={{widht:'8rem',margin:'10px 8px'}}>
                <Card.Img variant="top"  alt={this.props.image_name} src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.image_name}</Card.Title>
                </Card.Body>
            </Card>
            </>
        )
    }
}

export default HomeFacilitiesCard