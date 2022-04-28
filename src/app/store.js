import { configureStore } from "@reduxjs/toolkit";
import sidebarSliceReducer from "../features/sidebar/sidebarSlice";
import googleMapSliceReducer from "../features/googleMap/googleMapSlice";

export const store = configureStore(
  {
    reducer: {
      sidebar: sidebarSliceReducer,
      googleMap: googleMapSliceReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
