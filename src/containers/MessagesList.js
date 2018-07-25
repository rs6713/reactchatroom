//containers use connect from react-redux
import {connect} from "react-redux"
import MessagesListComponent from "../components/MessagesList"
//dont need to import action

export const MessagesList= connect(state =>({
    messages:state.messages
}), {})(MessagesListComponent)