import { addMessageActionCreator, textareaMessageActionCreator } from '../../../redux/messagesReducer'
import Messages from './messages'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {

        return {
                messages: state.messages,
                newMessageText: state.messages.newMessageText
        }
}

let mapDispatchToProps = (dispatch) => {
        return {
                buttonClick: () => { dispatch(addMessageActionCreator()) },
                textareaMessage: (text) => { dispatch(textareaMessageActionCreator(text)) }
        }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer