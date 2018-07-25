import {takeEvery} from "redux-saga/effects"
import * as types from "../constants/ActionTypes"

//function* is a generator function,
//can return something different everytime run
const handleNewMessage= function* handleNewMessage(params){
   //handle message asynch, add message with author
    yield takeEvery(types.ADD_MESSAGE, (action)=>{
        action.author= params.username
        params.socket.send(JSON.stringify(action))
    })
    //takeevery action of type addmessage, when action occurs, send message to websocket
    //pass in action and somedetails
    //so can be dispatched to all clients from server
}

export default handleNewMessage