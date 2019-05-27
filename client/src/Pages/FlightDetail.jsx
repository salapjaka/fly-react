import React, { Component } from 'react';
import Axios from 'axios';

class FlightDetail extends Component {
  
  state={
    passengers:[
      {'name':'chris'},
      {'name':'niko'},
      {'name': 'parker'}
    ]
  }

  componentDidMount(){
//    Axios.get(`/findAllPassangerForThisFLight/${id}`).then()

    
  }

  pickPassenger = (name) => {
    console.log(' i picked ',name)
  }

  showPassengers = () => {
    return this.state.passengers.map(passenger=>{
      return <button onClick={()=>{this.pickPassenger(passenger.name)}}>{passenger.name}</button>
    })
  }

  imTakingFlight = () => {
    console.log(this)
  }
  render() {
    
    return (
      <div>
        Flight details:
        Register as carrier?
        Send stuff?
        
        {this.showPassengers()}
        <br></br>
        <button onClick={this.imTakingFlight}>I'm taking this flight</button>
      </div>
    );
  }
}

export default FlightDetail;