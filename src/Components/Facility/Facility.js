
import './Facility.css'
import Table from './Table'
import top from './img/top.jpeg'
function Facility() {
    return (
        <div className="facility-grandParent">
            <img className="photo" src = {top}/> 
            <div className="content">
                <Table />
            </div>
        </div>
    )
}



export default Facility
