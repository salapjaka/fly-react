import React, { Component } from 'react';
import {Link, withRouter, Switch, Route} from 'react-router-dom';
import auth0Client from '../Auth';
import '../App.css';
import Flights from '../Components/Flights';
import FlightDetail from '../Components/FlightDetail'
import Callback from '../Callback';
import Secret from '../Components/Secret'
import Axios from 'axios';

class Main extends Component {

  componentDidMount(){
    console.log('profile',auth0Client.getProfile())
    this.setState({
      user: auth0Client.getProfile()
    })

    
  }
  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace('/');
  };

  render() {
    return (
      <div>
         <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">Home
        
      </Link>
      {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <img width="50px" src={auth0Client.getProfile().picture} alt="logo" />
          <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
          <button className="btn btn-dark" onClick={() => {this.signOut()}}>Sign Out</button>
        </div>
      }
    </nav>
    <Switch>
          <Route exact path='/' component={Flights}/>
          <Route exact path='/callback' component={()=>< Callback />}/>
          <Secret exact path='/flightdetail/:id' component={() => <FlightDetail user={this.state.user}/>}/>
     </Switch>
      </div>
    );
  }
}

export default withRouter(Main);