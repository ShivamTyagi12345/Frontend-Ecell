import React from 'react'
import "./Facilities.css";
import image from './delta.png'
import photo from './top.jpeg'
import Footer from "../Footer/Footer";

const Facilities = () => {
    return (
        <div>
        <img className="photo" src = {photo}/> 
        <div className="page">
        <div className="box">
          <details className="box-detail">
            <summary className="box-detail-text">Hello</summary>
            <span class="caret"></span>
            <p className="box-detail-subtext">ABSDDMNDHBD</p>
            <p className="box-detail-subtext">am</p>
          </details>
          <details className="box-detail">
            <summary className="box-detail-text">Hello</summary>
            <p className="box-detail-subtext">i</p>
            <p className="box-detail-subtext">am</p>
          </details >
          <details className="box-detail">
            <summary className="box-detail-text">Hello</summary>
            <p className="box-detail-subtext">i</p>
            <p className="box-detail-subtext">am</p>
          </details>
          <details className="box-detail">
            <summary className="box-detail-text">Hello</summary>
            <p className="box-detail-subtext">i</p>
            <p className="box-detail-subtext">am</p>
          </details>
        </div>
        <div className="Content-grid"className="grid-items">
          <h2>Details</h2>
        <table className="spec"><tr><td>Build plate</td><td>50°C to 100°C heated glass build plate</td></tr><tr><td>Layer resolution</td><td>50 microns</td></tr><tr><td>Print technology</td><td>Fused Deposition Modelling (FDM)</td></tr><tr><td>Cylindric print area</td><td>Ø 200 mm – 400 mm h</td></tr><tr><td>Print head travel speed</td><td>30 to 300 mm/s</td></tr><tr><td>Nozzle diameter</td><td>0.4 mm (0.7 mm, 0.9 mm)</td></tr><tr><td>Nozzle temperature</td><td>180 °C to 260 °C</td></tr><tr><td>Filament diameter</td><td>1.75 mm</td></tr><tr><td>Supported materials</td><td>PLA, ABS, Flex, HIPS, PETG</td></tr><tr><td>Changeable extruder</td><td>Porcelain</td></tr></table>
          <img className="pic1" src={image}/>
        </div>
        </div>
        <Footer/>
      </div>
    )
}

export default Facilities
