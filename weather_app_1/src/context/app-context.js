import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [selectedCities, setSelectedCities] = useState([
    {
      cities: "Blr"
    }
  ]);

  const value = {
    selectedCities,
    setSelectedCities
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
