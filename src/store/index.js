import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { comidasPrecargadasReducer } from './reducers'

const RootReducer = combineReducers({
    products : comidasPrecargadasReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));

// import { configureStore } from "@reduxjs/toolkit";

// import placeReducer from "./place.slice";

// export const store = configureStore({
//   reducer: {
//     place: placeReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });