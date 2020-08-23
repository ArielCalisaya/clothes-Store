import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {clothesListReducer} from './reducers/clothesReducer'


const initialState = {}
const reducer = combineReducers({
    //states
    clothesList : clothesListReducer
})

// Redux Devtools Google ext config
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)))
export default store 