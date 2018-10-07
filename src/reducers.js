import {CHANGE_SEARCHBOX_TEXT} from './constants'

const initialState = {
    searchField: ''
}

export const searchRobotsReducer = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCHBOX_TEXT:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}