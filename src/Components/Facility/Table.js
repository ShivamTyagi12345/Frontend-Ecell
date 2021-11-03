import { useState } from "react";
import "./Table.css";
import { sampleFacility } from './FacilitiesNew'
import Description from "./Description";

function Table() {
    const [selectedItemId, setSelectedItemId] = useState()
    const selectedItem = sampleFacility.find(facility=> facility.Id === selectedItemId)

    const handleToBeSelectedId = (e) =>{
        const getId = sampleFacility.find(facility => facility.Name === e.target.innerText)
        handleItemSelect(getId.Id)
    }

    function handleItemSelect(id){ 
        console.log(id)
        setSelectedItemId(id)
      }

  return (
      <div className="facility-box-total">
        <div className="facility-table">
              <details className="box-detail">
                <summary className="box-detail-text">3D Printers</summary>
                <span class="caret"></span>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}
                >Delta wasp 2040</p>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}
                >Ultimaker 2</p>
              </details>

              <details className="box-detail">
                <summary className="box-detail-text">3D Printers</summary>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Delta wasp 2040
                </p>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Ultimaker 2
                </p>
              </details>

              <details className="box-detail">
                <summary className="box-detail-text">3D Printers</summary>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Delta wasp 2040</p>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Ultimaker 2</p>
              </details>
              <details className="box-detail">
                <summary className="box-detail-text">3D Printers</summary>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Delta wasp 2040</p>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Ultimaker 2</p>
              </details>
              <details className="box-detail">
                <summary className="box-detail-text">3D Printers</summary>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Delta wasp 2040</p>
                <p className="box-detail-subtext"
                    onClick = {(e)=>handleToBeSelectedId(e)}>Ultimaker 2</p>
              </details>
           
    </div>


    <div className="facility-description__parent">
       {selectedItemId != null && <Description description={selectedItem}/>  }
       {selectedItemId == null && <Description description={sampleFacility[0]}/>  }
    </div>
    </div>
  );
}

export default Table;
