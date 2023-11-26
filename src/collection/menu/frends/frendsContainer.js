import { connect } from 'react-redux'
import Frends from './frends'


let mapStateToProps = (state) => {
        return {
                nameImg: state.frends.nameImg
        }
}

const FrendsContainer = connect(mapStateToProps)(Frends)

export default FrendsContainer