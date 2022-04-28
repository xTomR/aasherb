import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  waypoints: [],
  activeMarker: null,
  deliveryCall: null,
  waypointNames: [],
};

export const googleMapSlice = createSlice({
  name: "googleMap",
  initialState,
  reducers: {
    setWaypoints: (state, action) => {
      state.waypoints = action.payload;
    },
    setActiveMarker: (state, action) => {
      state.activeMarker = action.payload;
    },
    setDeliveryCall: (state, action) => {
      state.deliveryCall = action.payload;
    },
    setWaypointName: (state, action) => {
      state.waypointNames = action.payload;
    },
  },
});

export const {
  setWaypoints,
  setActiveMarker,
  setWaypointName,
  setDeliveryCall,
} = googleMapSlice.actions;
export default googleMapSlice.reducer;
