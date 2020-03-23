import { combineReducers } from 'redux'
import restaurantReducer from './reducer'

export default combineReducers({
    restaurant: restaurantReducer
})