import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact'
import NotFound from './Components/Pages/404';
import Map from './Components/Pages/Map'
import MapResults from "./Components/Pages/MapResults";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/search/map/:id' component={MapResults} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
