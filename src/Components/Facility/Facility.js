
import './Facility.css'
import Table from './Table'
import top from './img/top.jpeg'
import Footer from "../Footer/Footer"
function Facility() {
    return (
        <div className="facility-grandParent">
            <img className="photo" src = {top}/> 
            <div className="content">
                <Table />
            </div>
        <Footer />
        </div>
    )
}



export default Facility
