import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col} from 'react-bootstrap';
import HomeFacilitiesCard from './HomeFacilitiesCard'




const Home
 = () => {
    return (
        <div className="home">
            <div className="intro">
                <p id="intro_head">Get inspired to start tinkering, <br/>building and innovating</p>
                <p id="intro_head2">Tinkering Lab is a technical facility open to all the students of National Institute of Technology Patna.</p>
                <div className="know_more"><a href={"/about"}><button className="btn_home btn2_home">KNOW MORE</button></a></div>
            </div>
            <div className="HomeFacilities">
                <span className="Homeheading">
                    <h3>Facilities</h3>
                </span>
                <span>
                   <a href="/facilities" id="facilities_head"> VIEW ALL<FontAwesomeIcon icon={faArrowRight}/> </a>
                   <br></br> 
                </span>
                <hr/>
                <div className="facilities_inner">
                <Container>
                    <Row>
                        <Col md={6} lg={3}>
                        <HomeFacilitiesCard image_url="https://tinkeringlab.iitr.ac.in:8080/media/home/3d_printer.png"
                        image_name="3D Printer" />
                        </Col>
                        <Col md={6} lg={3}>
                        <HomeFacilitiesCard image_url="https://tinkeringlab.iitr.ac.in:8080/media/home/3d_printer.png"
                        image_name="3D Printer"/>
                        </Col>
                        <Col md={6} lg={3}>
                        <HomeFacilitiesCard image_url="https://tinkeringlab.iitr.ac.in:8080/media/home/3d_printer.png"
                        image_name="3D Printer"/>
                        </Col>
                        <Col md={6} lg={3}>
                          <HomeFacilitiesCard image_url="https://tinkeringlab.iitr.ac.in:8080/media/home/3d_printer.png"
                        image_name="3D Printer"/>
                        </Col>
                     </Row>
                </Container>
               </div>
            </div>
            <div className="HomeUpdates">
                <span className="Homeheading">
                    <h3>Updates</h3>
                </span>
                <br/>
                <p>
                    Students can now work anytime inside the lab. No timing restrictions are there. Student has to apply 24 hours in advance for key permission.
                    Students can now work anytime inside the lab. No timing restrictions are there. Student has to apply 24 hours in advance for key permission.
                </p>
            </div>
            <div className="HomeFooter">
                <span>
                    For institution details visit :<br/>
                    <a href="http://www.nitp.ac.in/php/home.php" style={{color:'white'}}> NIT Patna</a>
                </span>
            </div>
  
        </div>
    )
}

export default Home
