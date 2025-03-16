import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
    phone: "",
  },
  reducers: {
    setNameFilter(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
    setPhoneFilter(state, action) {
      return {
        ...state,
        phone: action.payload,
      };
    },
  },
});

export const selectNameFilter = (state) => state.filter.name;
export const selectPhoneFilter = (state) => state.filter.phone;

export const { setNameFilter, setPhoneFilter } = slice.actions;

export default slice.reducer;
