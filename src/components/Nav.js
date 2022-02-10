import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav({username}){
    return username ?
    <nav>
        <NavLink to="/events"><button>See All Events</button></NavLink>
    </nav>
    :
    <nav><i>Hello Fellow Tweeter, login or signup!</i></nav>

}
const mapsStateToProps = state => ({username: state.user.username, email: state.user.email, bio: state.user.bio})

export default connect(mapsStateToProps)(Nav)