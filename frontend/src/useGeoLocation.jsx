import React from "react";

export function useGeoLocation() {
  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 10000,
  };
  const failoverPosition = { latitude: 48.8583145, longitude: 2.292334 };
  const [state, setState] = React.useState({
    loading: true,
    error: null,
    latitude: null,
    longitude: null,
  });
  let watchId;

  function onEvent(event) {
    if (event.coords) {
      setState({
        loading: false,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
      });
    }
  }
  const onEventError = function (error) {
    console.log("Geolocation error: ", error);
    console.log("Setting default position to Paris's eiffel tower");
    setState({
      loading: false,
      error: null,
      ...failoverPosition,
    });
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    watchId = navigator.geolocation.watchPosition(
      onEvent,
      onEventError,
      options
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
}
