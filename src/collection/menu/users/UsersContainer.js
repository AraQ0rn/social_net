
import { addToFriendsAC, removeFromFriendsAC, setUsersAC } from '../../../redux/usersReducer'
import Users from './users'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
        return { users: state.users.users }
}

let mapDispatchToProps = (dispatch) => {
        return {
                addToFriends: (userId) => {
                        dispatch(addToFriendsAC(userId))
                },
                removeFromFriends: (userId) => {
                        dispatch(removeFromFriendsAC(userId))
                },
                setUsers: (users) => {
                        dispatch(setUsersAC(users))
                }
        }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer