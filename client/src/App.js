import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/' component={Home}/>
    </Switch>
    </Router>
  );
}

export default App;
