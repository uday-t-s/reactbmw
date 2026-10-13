import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./Slice/bookingSlice";
import orderSlice from "./Slice/orderSlice";

export const store = configureStore({
  reducer: {
    booking: bookingSlice,
    order: orderSlice,
  },
});
