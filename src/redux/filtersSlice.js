import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
