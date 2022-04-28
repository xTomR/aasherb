import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setWaypoints,
  setActiveMarker,
  setDeliveryCall,
  setWaypointName,
} from "../googleMap/googleMapSlice";
import { toggleRoute, toggleProfile, toggleSearchbar } from "./sidebarSlice";
import { useAuth } from "contexts/AuthContext";
import { useGoogleMap } from "contexts/googleMapContext";
import {
  SidebarWrapper,
  Deliveries,
  Header,
  Livraison,
  Minimize,
  Profile,
  Route,
  Searchbar,
  Toolbar,
} from "./components/index";
import axios from "axios";
import CodeQR from "./components/CodeQR";

const Sidebar = ({ delivery }) => {
  // Contexts
  const user = useAuth();
  const googleMapContext = useGoogleMap();
  const map = googleMapContext.map;
  const directions = googleMapContext.directions;
  const directionRenderer = googleMapContext.directionRenderer;
  const setGoogleMapLink = googleMapContext.setGoogleMapLink;
  const googleMapLink = googleMapContext.googleMapLink;
  const [open, setOpen] = useState(true);

  //Redux
  const route = useSelector((state) => state.sidebar.route);
  const profile = useSelector((state) => state.sidebar.profile);
  const searchbar = useSelector((state) => state.sidebar.searchbar);

  const activeMarker = useSelector((state) => state.googleMap.activeMarker);
  const waypointNames = useSelector((state) => state.googleMap.waypointNames);

  const dispatch = useDispatch();

  const dispatchActiveMarker = (param) => dispatch(setActiveMarker(param));
  const dispatchRoute = (param) => dispatch(toggleRoute(param));
  const dispatchProfile = () => dispatch(toggleProfile());
  const dispatchSearchBar = () => dispatch(toggleSearchbar());

  // Refs
  const deliveryRef = useRef({});

  // Effects
  useEffect(() => {
    deliveryRef.current[activeMarker]?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [activeMarker]);

  useEffect(() => {
    setGoogleMapLink(handleQRCode);
  }, [directions]);

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/auth/logout", {
      withCredentials: true,
    });
    user.logout();
  };

  const handleQRCode = () => {
    if (directions) {
      // const origin = directions?.routes[0]?.legs[0].start_address;
      const destination =
        directions?.routes[0]?.legs[[directions.routes[0]?.legs.length - 1]]
          .end_address;
      const waypoints = directions?.routes[0]?.legs.slice("", -1).map((x) => {
        const lat = x?.end_location.lat();
        const lng = x?.end_location.lng();
        return { lat, lng };
      });

      let thewaypoints = "";
      for (let value of Object.values(waypoints)) {
        for (value of Object.values(value)) {
          thewaypoints = thewaypoints.concat(" ", value);
        }
        thewaypoints = thewaypoints.concat(" |");
      }
      const message = `https://www.google.com/maps/dir/?api=1&origin=Your%20Location&destination=${destination}&waypoints=${thewaypoints}`;
      const testMessage = message.replace(/[ ]/g, "%20");
      return testMessage;
    } else {
      return "";
    }
  };

  return (
    <>
      <SidebarWrapper open={open} route={route}>
        <Header open={open} route={route} />

        <Minimize open={open} setOpen={setOpen} />

        <Toolbar
          profile={profile}
          route={route}
          searchbar={searchbar}
          dispatchProfile={dispatchProfile}
          dispatchRoute={dispatchRoute}
          dispatchSearchBar={dispatchSearchBar}
        >
          {profile ? <Profile user={user} handleLogout={handleLogout} /> : null}
          <Searchbar
            setCall={(position) => {
              dispatch(setDeliveryCall(position));
            }}
            setWaypoints={setWaypoints}
            directionRenderer={directionRenderer}
            map={map}
            open={open}
            setOpen={setOpen}
            route={route}
            searchbar={searchbar}
            dispatchSearchBar={dispatchSearchBar}
            dispatchRoute={dispatchRoute}
          />

          {route && (
            <Route
              directions={directions}
              setWaypoints={setWaypoints}
              dispatch={dispatch}
              googleMapLink={googleMapLink}
              waypointNames={waypointNames}
              setWaypointName={setWaypointName}
            >
              <CodeQR />
            </Route>
          )}
        </Toolbar>
        <Deliveries>
          {delivery.map((delivery) => {
            return (
              <Livraison
                key={delivery.id}
                map={map}
                ref={(element) => {
                  deliveryRef.current[delivery.id] = element;
                }}
                open={open}
                delivery={delivery}
                activeMarker={activeMarker}
                dispatchActiveMarker={dispatchActiveMarker}
              />
            );
          })}
        </Deliveries>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
