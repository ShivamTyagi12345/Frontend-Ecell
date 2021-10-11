import React,{useState} from 'react'
import "./Event.css"
import img from "../../assets/artboard_2x.png"
import img2 from "../../assets/event_header.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer/Footer";


const Events = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
var modal = document.querySelector(".eventPic_container");    
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
    return ( <>
      <div className={ isActive ? "blur" : "blur display"}></div>
      <img src={img2} alt="image" className='event_head'/>
        <div className="events">
          
          <h1>Events</h1>
          <div className="line"></div>

          <div className="events_grid">


            <div className="events_unit">
              <span className="events_name"><h3 className = "Event_name">Smart India Hackathon_ 1</h3> </span>
              <div className="events_description"> Tinkering Lab, IIT Roorkee organised a grand finale of Smart India Hackathon 2018 from June 18 to June 22 on the theme “Clean Water”. Seven teams from all over India along with the industry experts participated in the grand finale Smart India Hackathon 2018.
              <span className="events_date"> 2018-06-18</span>
              </div>
              <button data-key="1" className="events_see_photo" onClick={handleToggle}>See Photos</button>
              </div>
              <div className={ isActive ? "eventPic_container" : "eventPic_container display"}>
                <div className="pop_head">
                   <h3 className='event_name_popup'>Smart India Hackathon_ 1</h3>
                   <button className="cut" onClick={handleToggle}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>   
              <img src={img} alt="" className="imagee"/>
              </div>

              <div className="events_unit">
              <span className="events_name"><h3 className = "Event_name">Smart India Hackathon_ 2</h3> </span>
              <div className="events_description"> Tinkering Lab, IIT Roorkee organised a grand finale of Smart India Hackathon 2018 from June 18 to June 22 on the theme “Clean Water”.
              <span className="events_date"> 2018-06-18</span>
              </div>
              <button data-key="1" className="events_see_photo" onClick={handleToggle}>See Photos</button>
              </div>
              <div className={ isActive ? "eventPic_container" : "eventPic_container display"}>
                <div className="pop_head">
                   <h3 className='event_name_popup'>Smart India Hackathon 2018 _ 1</h3>
                   <button className="cut" onClick={handleToggle}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>   
              <img src={img} alt="" className="imagee"/>
              </div>


              <div className="events_unit">
              <span className="events_name"><h3 className = "Event_name">Smart India Hackathon 2018 _ 3</h3> </span>
              <div className="events_description"> Tinkering Lab, IIT Roorkee organised a grand finale of Smart India Hackathon 2018 from June 18 to June 22 on the theme “Clean Water”. Seven teams from all over India along with the industry experts participated in the grand finale Smart India Hackathon 2018.
              <span className="events_date"> 2018-06-18</span>
              </div>
              <button data-key="1" className="events_see_photo" onClick={handleToggle}>See Photos</button>
              </div>
              <div className={ isActive ? "eventPic_container" : "eventPic_container display"}>
                <div className="pop_head">
                   <h3 className='event_name_popup'>Smart India Hackathon_ 1</h3>
                   <button className="cut" onClick={handleToggle}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>   
              <img src={img} alt="" className="imagee"/>
              </div>


              <div className="events_unit">
              <span className="events_name"><h3 className = "Event_name">Smart India Hackathon 2018 _ 4</h3> </span>
              <div className="events_description"> Tinkering Lab, IIT Roorkee organised a grand finale of Smart India Hackathon 2018 from June 18 to June 22 on the theme “Clean Water”. Seven teams from all over India along with the industry experts participated in the grand finale Smart India Hackathon 2018.
              <span className="events_date"> 2018-06-18</span>
              </div>
              <button data-key="1" className="events_see_photo" onClick={handleToggle}>See Photos</button>
              </div>
              <div className={ isActive ? "eventPic_container" : "eventPic_container display"}>
                <div className="pop_head">
                   <h3 className='event_name_popup'>Smart India Hackathon 2018 _ 1</h3>
                   <button className="cut" onClick={handleToggle}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>   
              <img src={img} alt="" className="imagee"/>
              </div>


              <div className="events_unit">
              <span className="events_name"><h3 className = "Event_name">Smart India Hackathon 2018 _ 5</h3> </span>
              <div className="events_description"> Tinkering Lab, IIT Roorkee organised a grand finale of Smart India Hackathon 2018 from June 18 to June 22 on the theme “Clean Water”. Seven teams from all over India along with the industry experts participated in the grand finale Smart India Hackathon 2018.
              <span className="events_date"> 2018-06-18</span>
              </div>
              <button data-key="1" className="events_see_photo" onClick={handleToggle}>See Photos</button>
              </div>
              <div className={ isActive ? "eventPic_container" : "eventPic_container display"}>
                <div className="pop_head">
                   <h3 className='event_name_popup'>Smart India Hackathon 2018 _ 1</h3>
                   <button className="cut" onClick={handleToggle}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>   
              <img src={img} alt="" className="imagee"/>
              </div>


              <div className="events_unit">
              <span className="events_name"><h3 className = "Event_name">Smart India Hackathon 2018 _ 6</h3> </span>
              <div className="events_description"> Tinkering Lab, IIT Roorkee organised a grand finale of Smart India Hackathon 2018 from June 18 to June 22 on the theme “Clean Water”. Seven teams from all over India along with the industry experts participated in the grand finale Smart India Hackathon 2018.
              <span className="events_date"> 2018-06-18</span>
              </div>
              <button data-key="1" className="events_see_photo" onClick={handleToggle}>See Photos</button>
              </div>
              <div className={ isActive ? "eventPic_container" : "eventPic_container display"}>
                <div className="pop_head">
                   <h3 className='event_name_popup'>Smart India Hackathon_ 1</h3>
                   <button className="cut" onClick={handleToggle}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>   
              <img src={img} alt="" className="imagee"/>
              </div>


           


              </div>
              </div>
              <Footer/>
              </>
    )
}

export default Events;
