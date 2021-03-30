import { combineReducers } from 'redux';
import counterReducer from './counter'
import isLoggedReducer from './isLogged'

const rootReducer = combineReducers({
    counterReducer,
    isLoggedReducer
})

export default rootReducer;