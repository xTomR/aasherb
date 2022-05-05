import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setWaypoints,
  setActiveMarker,
  setWaypointName,
} from "./googleMapSlice";
import { useGoogleMap } from "contexts/googleMapContext";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import fetchDirections from "common/functions/fetchDirections";
import { deliveryCallIcon } from "features/googleMap/icons/deliveryCallAssets";
import { userPositionIcon } from "features/googleMap/icons/userPositionAssets";
import {
  deliveryMarkerIcon,
  deliveryMarkerLabel,
} from "./icons/deliveryMarkerAssets";

const GoogleMapContainer = ({ delivery }) => {
  // Contexts
  const googleMapContext = useGoogleMap();
  const setDirections = googleMapContext.setDirections;
  const directions = googleMapContext.directions;
  const setDirectionRenderer = googleMapContext.setDirectionRenderer;

  // Redux
  const waypoints = useSelector((state) => state.googleMap.waypoints);
  const waypointNames = useSelector((state) => state.googleMap.waypointNames);
  const activeMarker = useSelector((state) => state.googleMap.activeMarker);
  const deliveryCall = useSelector((state) => state.googleMap.deliveryCall);

  const dispatch = useDispatch();

  // States
  const [userPosition, setUserPosition] = useState(null);

  // Effects
  useEffect(() => {
    dispatch(setWaypoints([]));
  }, [deliveryCall]);

  useEffect(() => {
    if (directions != null && undefined) {
      console.log(directions);
      if (directions.routes) {
        const test = directions.routes[0]?.legs.map((e) => {
          return e.end_address;
        });
      } else {
        return null;
      }
      const test2 = delivery.map((e) => {
        return e.address;
      });
      console.log(test);
    }
  }, [directions]);

  useEffect(() => {
    fetchDirections(
      deliveryCall,
      waypoints,
      setDirections,
      setUserPosition,
      dispatch
    );
  }, [waypoints, deliveryCall]);

  // Styles
  const containerStyle = {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#333",
    position: "absolute",
  };

  // GoogleMap Memos
  const GoogleMapCenter = useMemo(() => ({ lat: 45.4042, lng: -71.8929 }), []);
  const GoogleMapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      mapId: "7f88a280c3e9a066",
      backgroundColor: "#0F1114",
      // night "7f88a280c3e9a066"
      // Day: "f5497223ed7f2ab8"
    }),
    []
  );
  const GoogleMapZoom = useMemo(() => 10, []);

  // DirectionsRenderer Memos

  const DROptions = useMemo(
    () => ({
      suppressMarkers: true,
      preserveViewport: true,
      polylineOptions: {
        strokeColor: "#fff",
        strokeOpacity: 0.8,
        strokeWeight: 5,
      },
    }),
    []
  );

  // Functions
  const waypointObject = (latlng, delivery, directions) => {
    if (deliveryCall) {
      const waypoint = {
        location: { lat: latlng.lat(), lng: latlng.lng() },
      };
      const waypointName = {
        name: delivery.name,
      };
      if (waypoints.includes(waypoint)) {
        const index = waypoints.indexOf(waypoint);
        waypoints.slice(index, 1);
      } else {
        const newWaypoints = [...waypoints, waypoint];
        dispatch(setWaypoints(newWaypoints));
      }
      if (waypointNames.includes(waypointName)) {
        const index = waypoints.indexOf(waypointName);
        waypointName.slice(index, 1);
      } else {
        const newWaypointNames = [...waypointNames, waypointName];
        const test = directions.routes[0].legs.map((e) => {
          return e.end_address;
        });
        dispatch(setWaypointName(newWaypointNames));
      }
    }
  };

  // Handlers
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
    }
    dispatch(setActiveMarker(marker));
  };

  const renderMap = () => {
    return (
      <>
        <GoogleMap
          onClick={() => dispatch(setActiveMarker(null))}
          mapContainerStyle={containerStyle}
          center={GoogleMapCenter}
          zoom={GoogleMapZoom}
          options={GoogleMapOptions}
          onLoad={(map) => {
            googleMapContext.setMap(map);
          }}
        >
          {directions && (
            <DirectionsRenderer
              onLoad={(dr) => setDirectionRenderer(dr)}
              directions={directions}
              options={DROptions}
            />
          )}
          {deliveryCall && (
            <>
              <Marker
                key="call"
                position={deliveryCall}
                icon={deliveryCallIcon(window.google.maps)}
                onClick={handleActiveMarker}
              />
              <Marker
                key="user"
                position={userPosition}
                icon={userPositionIcon(window.google.maps)}
              />
            </>
          )}

          {delivery.map((delivery, index) => {
            const markerLabel = String(index + 1);
            let color = "#017DC3";
            let textColor = "#fff";
            if (activeMarker === delivery.id) {
              color = "#fff ";
              textColor = "#333";
            }

            return (
              <div key={index}>
                <Marker
                  index={toString(index)}
                  icon={deliveryMarkerIcon(window.google.maps, color)}
                  label={deliveryMarkerLabel(markerLabel, textColor)}
                  key={delivery?.id}
                  position={delivery.position}
                  onMouseOver={() => {
                    handleActiveMarker(delivery.id);
                  }}
                  onClick={(event) => {
                    handleActiveMarker(delivery.id);
                    setDirections({ ...directions });
                    waypointObject(event.latLng, delivery, directions);
                  }}
                ></Marker>
              </div>
            );
          })}
        </GoogleMap>
      </>
    );
  };

  return renderMap();
};

export default GoogleMapContainer;
