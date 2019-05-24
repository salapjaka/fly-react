import React, { Component } from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'

var t;

class Flights extends Component {

  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      carriers: [],
      quotes: [],
      places: [],
      originPlace: 'MIA-sky',
      destinationPlace: 'ATH-sky',
      outboundPartialDate: '2019-05-29',
      inboundPartialDate: '2019-05-29'
    }
   }


  getFlights = (e) => {
    e.preventDefault()
    Axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${this.state.originPlace}/${this.state.destinationPlace}/${this.state.outboundPartialDate}/${this.state.inboundPartialDate}`,
      {
        'headers': {

          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "d0c4641017mshad4b11d5602a271p1a76e2jsna3f0b7c7aee5"
        }
      }
    )
      .then(searchFlights => {
        console.log('where is my info?', searchFlights)
        this.setState({
          carriers: searchFlights.data.Carriers,
          quotes: searchFlights.data.Quotes,
          places: searchFlights.data.Places,
          // outboundPartialDate: searchFlights.data.Quotes[0].InboundLeg.DepartureDate,
          // inboundPartialDate: searchFlights.data.Quotes[1].InboundLeg.DepartureDate
          // inboundPartialDate: 
        })
      }).catch(err => {
        console.log(err, 'error')
      });
  }
 

  searchFlights = (e) => {
    let val = e.target.value
    let name = e.target.name
    window.clearTimeout(t)
    t = window.setTimeout(() => {
      console.log(val)
      console.log(name)
      Axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=${val}`,
        {
          'headers': {

            "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "d0c4641017mshad4b11d5602a271p1a76e2jsna3f0b7c7aee5"
          }
        }
      )
        .then(searchFlights => {
          console.log('where is my new info?', searchFlights.data)
              this.setState({
                [name]: searchFlights.data.Places[0].PlaceId,
              })
        })
    }, 1000)
  }

  showFlights = () => {
    console.log(this.state.quotes)
    const flights = this.state.quotes.map((q,i)=>{
      let result = {

      },
      flightPlaces = {
        origin: this.state.places.find((el)=>{return el.PlaceId == q.OutboundLeg.OriginId}).CityName,
        destination: this.state.places.find((el)=>{return el.PlaceId == q.OutboundLeg.DestinationId}).CityName
      }
      result.quote = q
      result.carrier = this.state.carriers.find((el)=>{ return el.CarrierId == q.OutboundLeg.CarrierIds[0] });
      result.date = result.quote.OutboundLeg.DepartureDate;
      result.flightPlaces = flightPlaces;
    
      return result;
    });
    // 
    return flights.map((flight, i) => {
      console.log('each', flight);
      return <div>
        <Link key={i}
        to={`/flightDetail/${flight.quote.QuoteId}`}>
      {flight.quote.QuoteId} - Carrier: {flight.carrier.Name} - Date: {flight.date} - From {flight.flightPlaces.origin} - To {flight.flightPlaces.destination}
      </Link>
      </div>
    })
  }

  handleDates = (e) => {
    let val = e.target.value
    let name = e.target.name
    //clearTimeout(t)
    //t = setTimeout(() => {
      console.log(val)
      console.log(name)
      this.setState({
         [name] : val,
      })
    //},500)
  // })
  }
  
  render() {
    return (
      <div>
        <br></br>
      
      <form onSubmit ={this.getFlights}>
        <input type="text" name="originPlace" value="Miami" onChange={this.searchFlights} placeholder="origin....." />                                                                                                                                            

        <input type="text" name="destinationPlace" value="Athens" onChange={this.searchFlights} placeholder="destination....." />
        <br></br>
        Origin: {this.state.originPlace} 
        <br></br>
        Destination: {this.state.destinationPlace}
        <br></br>
        
        <input type="date" name="outboundPartialDate" onChange={this.handleDates} />                                                                                                                                            
        <input type="date" name="inboundPartialDate" onChange={this.handleDates} />                                                                                                                                            
        <br></br>
        From: {this.state.outboundPartialDate}
        <br></br>
        To: {this.state.inboundPartialDate}
        <br></br>
        <button type='submit'>Search</button>
        </form>
       {this.showFlights()}
      </div>
    );
  }
}

export default Flights;