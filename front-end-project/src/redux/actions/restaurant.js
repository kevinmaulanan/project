import Axios from 'axios'
import { GET_ALL_RESTAURANTS } from './type'



export const getDataRestaurant = () => dispatch => {
    Axios.get(process.env.REACT_APP_API_URL + '/browse_restaurant')
        .then(res => {
            console.log(res.data.result)
            dispatch({
                type: GET_ALL_RESTAURANTS,
                payload: res.data.result
            })
        })
        .catch(err => {
            console.log(err)
            console.log('disiinin')
        })
}