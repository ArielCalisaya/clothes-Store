import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {clothesListReducer, clothesDetailsReducer} from './reducers/clothesReducer'
import {userSigninReducer} from './reducers/userReducer'


const initialState = {}
const reducer = combineReducers({
    //states
    clothesList : clothesListReducer,
    productDetails: clothesDetailsReducer,
    userList: userSigninReducer
})

// Redux Devtools Google ext config, Delete on production step
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnchancer(applyMiddleware(thunk)))
export default store 