import Facility from "./Facility"
import printer from './img/printer.jpg'
import ultimaker from './img/ultimaker.jpeg'

function FacilitiesNew() {
    return (
            <Facility sampleFacility = {sampleFacility} />
    )
}

// always write {image: value} at the end of object "sampleFacility"

export const sampleFacility = [
    {   
        Id:1,
        Name: "Delta wasp 2040",
        BuildPlate : "50C to 100C heated glass build plate",
        LayerResolution: "I dont know",
        Weight: "20kg",
        Software : "Sinterit Studio 2019 Open",
        image : printer
    },
    {
        Id : 2,
        Changes: "see both facility have different key value pair",
        Name: "Ultimaker 2",
        Email: "Contactme@gmail.com",
        buildPlate : "We can fill this stuff later",
        layerResolution: "I know, but can't tell",
        weight: "10kg",
        Software : "PHP royal vision 2019 Open",
        image : ultimaker
    }
]

export default FacilitiesNew
