
import './App.css';
import { Switch,Route } from 'react-router-dom';  
import Home from './Compunents/home';
import mbHome from './Compunents/mbHome';
import Navbar from './Compunents/navbar';
import About from './Compunents/About';
import KeyStats from './Compunents/KeyStats';
function App() {
  return (
    <div className="App">
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/mbHome" component={mbHome}/>
  <Route exact path="/Navbar" component={Navbar}/>
  <Route exact path="/About" component={About}/>
  <Route exact path="/KeyStats" component={KeyStats}/>
  </Switch>
    </div>
  );
}

export default App;
