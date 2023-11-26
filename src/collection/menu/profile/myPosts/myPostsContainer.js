import { buttonClickActionCreator, textareaChangeActionCreator } from '../../../../redux/profileReducer'
import MyPosts from './myPosts'
import { connect } from 'react-redux'

// function MyPostsContainer(props) {

//         let state = props.store.getState().profile

//         let buttonClick = () => {
//                 let action = buttonClickActionCreator()
//                 props.store.dispatch(action)
//         }

//         let textareaChange = (text) => {
//                 let action = textareaChangeActionCreator(text)
//                 props.store.dispatch(action)
//         }

//         return (
//                 <MyPosts
//                         textareaChange={textareaChange}
//                         buttonClick={buttonClick}
//                         posts={state.posts}
//                         textValue={state.textValue}
//                 />
//         )
// }

let mapStateToProps = (state) => {

        return {
                 posts: state.profile.posts,
                 textValue: state.profile.textValue
         }
}

let mapDispatchToProps = (dispatch) => {
        return {
                textareaChange: (text) => { dispatch(textareaChangeActionCreator(text)) },
                buttonClick: () => { dispatch(buttonClickActionCreator()) }
        }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer