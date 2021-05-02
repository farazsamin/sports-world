import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetail from './components/LeagueDetail/LeagueDetail'




function App() {
  
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
          
        </Switch>
      </Router>
  );
}

export default App;
