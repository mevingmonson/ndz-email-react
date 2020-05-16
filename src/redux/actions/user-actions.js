import axios from 'axios';
import { ActionTypes } from '../ActionTypes'

export const setUserDetails = () => (dispatch) => {

    // axios.get('http://www.mocky.io/v2/5e9fe82f2d00002900cb7dd1').then(resp => {
    //     console.log("display name")
    //     dispatch({ type: ActionTypes.SET_USER_DETAILS, payload: resp.data.displayName })
    // });
    // axios.get('http://www.mocky.io/v2/5ea0092e2d00005300cb7f68').then(resp => {
    //     console.log("menu items")
    //     dispatch({ type: ActionTypes.SET_MENU_ITEMS, payload: resp.data })
    // });

    axios.all([axios.get('http://www.mocky.io/v2/5e9fe82f2d00002900cb7dd1'), axios.get('http://www.mocky.io/v2/5ea0092e2d00005300cb7f68')]).then(axios.spread((...responses) => {
        dispatch({ type: ActionTypes.SET_USER_DETAILS, payload: responses[0].data.displayName })
        dispatch({ type: ActionTypes.SET_MENU_ITEMS, payload: responses[1].data })

    }))

}

export const setMessageDetails = () => (dispatch) => {
    axios.get('http://www.mocky.io/v2/5ea00d522d00004a00cb7fa2').then(resp => {
        dispatch({ type: ActionTypes.SET_MESSAGE_DETAILS, payload: resp.data })
    })
}