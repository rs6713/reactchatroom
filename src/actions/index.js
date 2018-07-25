import * as types from "../constants/ActionTypes"

let nextMessageId=0
let nextUserId=0

//user adds message
export const addMessage= (message,author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser= name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

//receive message other users
export const messageReceived= (message,author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
})

//when user joins/leaves the chat
export const populateUsersList = users =>({
    type: types.USERS_LIST,
    users
})

/*
reducers take care creating new state when action dispatched
*/