import { GET_ALL_RESTAURANTS } from '../actions/type'
const globalState = {
    dataRestaurant: [

    ]
}

export default function restaurantReducer(state = globalState, action) {
    console.log('actionReducers', action.payload)
    switch (action.type) {
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                dataRestaurant: action.payload
            }

        default:
            return state
    }
}
