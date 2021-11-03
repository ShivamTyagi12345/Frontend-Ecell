import './Description.css'
import DescriptionTable from './DescriptionTable'

function Description({description}) {
    let keysDesc = Object.keys(description)
    const imageUrl = keysDesc[keysDesc.length - 1]
    keysDesc = keysDesc.slice(1, -1)
    
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

        <img className="discription-image"  src={description[imageUrl]} alt="discription-img" />
            </div>
           
 
    )
}

export default Description
