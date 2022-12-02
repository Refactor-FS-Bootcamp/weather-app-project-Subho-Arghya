
const City = () => {

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Add city modal")
    }

    return  (
        <div style={{ marginLeft : "200px" }}>
            <div className="city-container">
                <div className="city-selection">
                    <div className="city-selection-header">
                        <div><h3>Cities</h3></div>
                        <div><button onClick={(e) => handleClick(e)} 
                        style={{ borderRadius : "50%" , border : "1px solid #222", fontSize: "1.3em"}}>+</button></div>
                    </div>
                    <div className="city-selection-body">
                        <div>No cities added</div>
                    </div>
                </div>
                <div className="city-description">
                </div>
            </div>
        </div>
    )
    
}

export default City