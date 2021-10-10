import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col} from 'react-bootstrap';
import HomeFacilitiesCard from './HomeFacilitiesCard'
import Footer from "../Footer/Footer";



const Home
 = () => {
    return (
        <div className="home">
            <div className="intro">
                <div className="alignitem">
                <p id="intro_head">INNOVATE. INSPIRE. TINKER. </p>
                <p style={{marginTop:"10px"}}> <marquee id="intro_head2" direction="right" height="100px">TIMING : 10 AM - 11 PM,   MONDAY - SATURDAY</marquee></p>
                </div>
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
            <Footer/> 
        </div>
    )
}

export default Home
