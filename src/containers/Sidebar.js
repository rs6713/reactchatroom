//containers use connect from react-redux
import {connect} from "react-redux"
import SidebarComponent from "../components/Sidebar"
//dont need to import action

export const Sidebar= connect(state =>({
    users:state.users
}), {})(SidebarComponent)