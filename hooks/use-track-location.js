import { useContext, useState } from "react";
import { ACTION_TYPES, StoreContext } from "../store/store-context";

const TrackMyLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  // const [latLong, setLatLong] = useState("");
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const success = () => {
    const latitude = "39.88295835401416"; //position.coords.latitude;
    const longitude = "32.8583974576751"; // position.coords.longitude;

    // setLatLong(`${latitude},${longitude}`);
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });

    setLocationErrorMsg("");
    setIsFindingLocation(false);
  };
  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
  };
  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    success();
    // if (!navigator.geolocation) {
    //   setLocationErrorMsg("Geolocation is not supported by your browser");
    //   setIsFindingLocation(false);
    // } else {
    //   // status.textContent = 'Locating…';
    //   navigator.geolocation.getCurrentPosition(success, error);
    // }
  };
  return { handleTrackLocation, locationErrorMsg, isFindingLocation };
};

export default TrackMyLocation;
