import Menu from './menu'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
        return { nameImg: state.frends.nameImg }
}

const MenuContainer = connect(mapStateToProps)(Menu)

export default MenuContainer