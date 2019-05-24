import React from 'react';
import './App.css';
import Flights from './Components/Flights';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import FlightDetail from './Components/FlightDetail'
// import Auth from './Components/Auth';

// let APP_API = process.env.REACT_APP_FLY_API_KEY
// console.log(APP_API)
// const auth = new Auth();
// auth.login();


class App extends React.Component {

  
  render(){  
    return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/' component={Flights}/>
          <Route path='/flightDetail' component={FlightDetail}/>
      </Switch>
    </div>
  );
}
}
export default App;
