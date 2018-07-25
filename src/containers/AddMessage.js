//containers use connect from react-redux
import {connect} from "react-redux"
import AddMessageComponent from "../components/AddMessage"
import {addMessage} from "../actions"

const mapDispatchToProps= dispatch => ({
    dispatch: (message,author)=>{
        //dispatch from redux
        dispatch(addMessage(message,author))
    }
})
//connect to addmessagecomponent
export const AddMessage =  connect(()=>({}), mapDispatchToProps)(AddMessageComponent) 