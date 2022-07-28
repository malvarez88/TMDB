import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// import airportsReducer from "./airports";
// import flightsReducer from "./flights";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    // airports: airportsReducer,
    // flights: flightsReducer,
    user: userReducer,
  },
});

export default store;
