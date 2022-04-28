import { createContext, useState, useContext } from "react";

const GoogleMapContext = createContext();

export function useGoogleMap() {
  return useContext(GoogleMapContext);
}

export function GoogleMapProvider({ children }) {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);
  const [googleMapLink, setGoogleMapLink] = useState("");

  return (
    <GoogleMapContext.Provider
      value={{
        map,
        setMap,
        directions,
        setDirections,
        directionRenderer,
        setDirectionRenderer,
        googleMapLink,
        setGoogleMapLink,
      }}
    >
      {children}
    </GoogleMapContext.Provider>
  );
}

export default GoogleMapContext;
