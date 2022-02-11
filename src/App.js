 import './App.css';
 import { Auth, EventFeed, Nav } from './components'
// import { Auth, EventFeed} from './components'
import { connect } from 'react-redux'
// import { useEffect } from 'react'
 import { Switch, Route} from 'react-router';

function App(user) {
 
  return (
 <>
  <Nav/>
  {user.username && user.email ? 
  <Switch>
  <Route path="/events"><EventFeed/></Route>
  :
 </Switch>:
      <Auth/>
  }
 </>
  );
  
}
const mapStateToProps = (state) => ({user: state.user}) 

 export default connect(mapStateToProps)(App);

