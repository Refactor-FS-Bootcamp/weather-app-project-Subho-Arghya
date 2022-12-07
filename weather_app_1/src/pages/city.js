import { useState , useContext } from "react";
import CityModal from "../components/CityModal";
import Star from "../components/Star";
import  toast , { Toaster } from "react-hot-toast";

import { MyContext } from "../context/app-context";

const City = () => {
  const [showModal, setShowModal] = useState(false);
  const [ displayCity, setDisplayCity] = useState(null)
  const cityContext = useContext(MyContext)

  const {selectedCities ,  favoriteCities, setFavoriteCities,
  currentCity, setCurrentCity } = cityContext
  

  const handleCityModalOpen = (e) => {
    e.preventDefault();
    //console.log("Add city modal");
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false)
}

  const handleDisplayCity = (city) => {
    let displayed = {...city}
    //console.log(displayed)
    setDisplayCity(displayed)
    setCurrentCity(displayed)
  }

  const handleFavorite = () => {        
    if (!favoriteCities.includes(currentCity)) {
      let newFav = [...favoriteCities, displayCity]      
      setFavoriteCities(newFav)
      toast.success(`${currentCity.name} added to favorites`);
      
    } else {
      let newFav = favoriteCities.filter((city) => currentCity.name !== city.name)
      //console.log(newFav)
      setFavoriteCities(newFav)
      toast('❌City removed from favorites');
    }
  }

  return (
    <>
      <div style={{ marginLeft: "200px" }}>
        <div className="city-container">
          <div className="city-selection">
            <div className="city-selection-header">
              <div>
                <h3>Cities</h3>
              </div>
              <div>
                <button
                  onClick={(e) => handleCityModalOpen(e)}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #222",
                    fontSize: "1.3em",
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="city-selection-body">
              {selectedCities.length > 0 ? selectedCities.map( (city) => {
                return (
                  <div className="selected-city" 
                  onClick={() => handleDisplayCity(city)}
                  key={city.name}>
                    <div>{city.name}</div>
                    <div>{city.temp}</div>
                  </div>
                )
              }) : <div>No cities added</div> }
              
            </div>
          </div>
          {currentCity && <div className="city-description">
          <div className="city-description-header">
            <div><h4>{currentCity.name}</h4></div>
            {favoriteCities.includes(currentCity) ? <div onClick={handleFavorite}>
                <Star isFavorite={true}/>
              </div>
            : <div onClick={handleFavorite}>
              <Star isFavorite={false}/>
            </div>
             }
            
            <Toaster/>
          </div>
          <div className="city-description-body">
          <div className="city-desc-content-inner">
            <p id="description">{currentCity.desc}</p>
            <br />
            <p className="inner-det"><span>Temperature : </span>{currentCity.temp}</p>
            <p className="inner-det"><span>Humidity : </span>{currentCity.humidity}</p></div>
          </div>
      </div>}
          
        </div>
      </div>
      {showModal ? <CityModal handleModalClose={handleModalClose}/> : <></>}
    </>
  );
};

export default City;
