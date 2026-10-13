import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
