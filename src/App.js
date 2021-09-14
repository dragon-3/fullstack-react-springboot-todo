import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import ItemComponent from './components/ItemComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {

  

  return (
    <div className="App">
      
      <Router>
        <>
          <Switch>
            <Route path="/all-todos/:id" exact component={ItemComponent} />
            <HomeComponent />
          </Switch>
        </>
    </Router>
    </div>
  );
}

export default App;
