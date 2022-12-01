
const City = () => {
    return  (
        <div style={{ marginLeft : "200px" }}>
            <div className="city-container">
                <div className="city-selection">
                    <div className="city-selection-header">
                        <div><h3>Cities</h3></div>
                        <div><button>Add</button></div>
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