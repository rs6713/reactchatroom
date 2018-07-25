/*
change state of messages in app
any reducer pass in current state and action, return new state
need default empty array state
*/
import * as types from "../constants/ActionTypes"

const users=(state=[], action)=>{
    switch (action.type){
        case types.ADD_USER:
            return state.concat([{
                name: action.name, id:action.id
            }])
        //the state becomes new users list passed in
        case types.USERS_LIST:
            return action.users
            
        default:
            return state
    }
}

export default users