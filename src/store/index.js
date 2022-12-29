import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { comidasPrecargadasReducer } from './reducers'

const RootReducer = combineReducers({
    products : comidasPrecargadasReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));