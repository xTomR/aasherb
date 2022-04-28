import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: false,
  profile: false,
  searchbar: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleRoute: (state, action) => {
      if (action.payload === true) {
        state.route = true;
      } else if (action.payload === false) {
        state.route = false;
      } else {
        state.route = !state.route;
      }
    },
    toggleProfile: (state) => {
      state.profile = !state.profile;
    },
    toggleSearchbar: (state) => {
      state.searchbar = !state.searchbar;
    },
  },
});

export const { toggleProfile, toggleRoute, toggleSearchbar } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
