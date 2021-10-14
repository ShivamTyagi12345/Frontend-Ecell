
import Navbar from './Components/Navbar/Navbar';
import {Switch,Route } from     'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Achievements from './Components/Achievements/Achievements';
import FAQ from './Components/FAQ/FAQ';
import Events from  './Components/Events/Events';
import Facilities from './Components/Facilities/Facilities';
import * as bst from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FacilitiesNew from './Components/Facility/FacilitiesNew';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/FAQ">
          <FAQ/>
        </Route>
        <Route exact path="/Events">
          <Events/>
        </Route>
        <Route exact path="/achievements">
          <Achievements/>
        </Route>
        <Route exact path="/facilities">
          <Facilities/>
        </Route>
        <Route exact path="/facility">
          <FacilitiesNew />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
