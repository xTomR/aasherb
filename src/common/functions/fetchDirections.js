const fetchDirections = (call, waypoints, setDirections, setUserPosition) => {
  const pos = {
    lat: 45.39621,
    lng: -71.96884,
  };
  setUserPosition(pos);
  if (!call) return;
  const service = new window.google.maps.DirectionsService();
  service.route(
    {
      origin: pos,
      optimizeWaypoints: true,
      destination: call,
      travelMode: window.google.maps.TravelMode.DRIVING,
      waypoints: waypoints,
    },
    (result, status) => {
      if (status === "OK" && result) {
        setDirections(result);
      }
    }
  );
};

export default fetchDirections;
