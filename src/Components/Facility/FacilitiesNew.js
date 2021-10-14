import Facility from "./Facility"

function FacilitiesNew() {
    return (
            <Facility sampleFacility = {sampleFacility} />
    )
}


export const sampleFacility = [
    {   
        Id:1,
        Name: "Delta wasp 2040",
        BuildPlate : "50C to 100C heated glass build plate",
        LayerResolution: "I dont know",
        Weight: "20kg",
        Software : "Sinterit Studio 2019 Open"
    },
    {
        Id : 2,
        Name: "Ultimaker 2",
        buildPlate : "We can fill this stuff later",
        layerResolution: "I know, but can't tell",
        weight: "10kg",
        Software : "PHP royal vision 2019 Open"
    }
]

export default FacilitiesNew
