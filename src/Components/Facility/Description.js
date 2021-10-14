import './Description.css'
import DescriptionTable from './DescriptionTable'

function Description({description}) {
    const keysDesc = Object.keys(description)

    // console.log(keysDesc)
    // function getValue(description, key){
    //     return Object.keys(description).find(k => description[k]=== key)
    // }
    // console.log(description.keysDesc[0])
    return (
        <div className="facility-description">
            <div className="facility-description__parent">
            <h3>
                {description["Name"]}
            </h3>
            {
                keysDesc.map(k=>{
                    let value = { keyF: k, description: description[k]}
                    return (
                        <DescriptionTable  {...value}/>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Description
