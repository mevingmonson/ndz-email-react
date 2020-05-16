import { ActionTypes } from '../ActionTypes'
import { act } from 'react-dom/test-utils'

const initialState = {
    username: '',
    menu: [],
    messageDetails: []
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ActionTypes.SET_USER_DETAILS:
            return { ...state, username: actions.payload }
        case ActionTypes.SET_MENU_ITEMS:
            return { ...state, menu: actions.payload }
        case ActionTypes.SET_MESSAGE_DETAILS:
            return { ...state, messageDetails: actions.payload }
        default: return state
    }

}

export default reducer;