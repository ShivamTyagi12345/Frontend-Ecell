import './DescriptionTable.css'

function DescriptionTable(props) {
    const {keyF, description} = props
    console.log(keyF)
    console.log(description)
    return (
        
        <div className="row">
            <div className="row-key row-item">{keyF}</div>
            <div className="row-value row-item">{description}</div>
        </div>
        
    )
}

export default DescriptionTable
