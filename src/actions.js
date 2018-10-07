import {CHANGE_SEARCHBOX_TEXT} from './constants'

export const searchRobotsAction = (text) => ({
    type: CHANGE_SEARCHBOX_TEXT,
    payload: text
})