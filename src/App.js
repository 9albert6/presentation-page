import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './components/pages/Home';
import Video from './components/pages/Video';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home}/>
        <Route exact path='/video' component={Video}/>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
