/*
could put all reducers into one file, but as have messages and user objects,
split then combine in one file
*/

import {combineReducers} from "redux"
import messages from "./messages"
import users from "./users"

const chat= combineReducers({
    messages,
    users
})

export default chat