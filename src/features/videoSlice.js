import { createSlice } from "@reduxjs/toolkit";
import TotalData from "../data.json";

const dataSlice = createSlice({
  name: "videoSlice",
  initialState: {
    search: {},
    data: TotalData,
  },
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload;
    },
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getSearch, getData } = dataSlice.actions;
export default dataSlice.reducer;
