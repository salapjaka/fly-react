import React from 'react';
import './App.css';
import Flights from './Components/Flights';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import FlightDetail from './Components/FlightDetail'
import Callback from './Callback';
import Secret from './Components/Secret'
import auth0Client from './Auth'
import Axios from 'axios';


class App extends React.Component {
state={}  


setUser = (user) => {
  this.setState({user})
}

componentWillMount(){
  console.log('profile??????', auth0Client)
    console.log('idtoken', auth0Client.getIdToken())
    console.log('profile', auth0Client.getProfile())
    let user = auth0Client.getProfile()
    console.log('user',user)
    this.setState({
      user
    })
    //sign up or log in? 
    Axios.post('http://localhost:5000/doiexist', { user }).then(res=>{
      console.log("well?", res)
    }).catch(err=>console.error(err))
  }
render(){  

    return (
    <div className="App">    
      <Navbar />
      <br></br>
      <Switch>
          <Route exact path='/' component={Flights}/>
          <Route exact path='/callback' component={()=>< Callback />}/>
          <Secret exact path='/flightdetail/:id' component={() => <FlightDetail user={this.state.user}/>}/>
      </Switch>
    </div>
  );
}
}
export default App;
