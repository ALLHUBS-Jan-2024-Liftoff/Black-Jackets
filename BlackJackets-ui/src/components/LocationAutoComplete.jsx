import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useRef } from "react";

const LocationAutoComplete = ({ value, handleInput }) => {
  const inputref = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAKbnYKJDdDvlzRONmCSSFalPZFOnAAULU",
    libraries: ["places"],
  });

//   console.log(isLoaded);

  const handleOnPlacesChanged = () => {
    // let address = inputref.current.getPlaces()[0].formatted_address;
    // console.log(address);
    handleInput(inputref.current.getPlaces()[0].formatted_address);
  };

  return (
    <div className="form-group mb-2">
      <label className="form-label">Location</label>
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => (inputref.current = ref)}
          onPlacesChanged={handleOnPlacesChanged}
        >
          <input
            type="text"
            name="location"
            // value={value}
            className="form-control"
            placeholder={value}
            // onChange={}
            // onSelect={onChange}
            required
          />
        </StandaloneSearchBox>
      )}
    </div>
  );
};

export default LocationAutoComplete;
