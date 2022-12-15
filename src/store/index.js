import { createStore, combineReducers } from "redux";
import { comidasPrecargadasReducer } from './reducers'

const RootReducer = combineReducers({
    products : comidasPrecargadasReducer,
})

export default createStore(RootReducer);