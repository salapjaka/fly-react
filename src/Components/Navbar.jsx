import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav className="nav-style">
      <ul >

        Navbar
        {/* <li><NavLink exact to='/' activeClassName="selected">Flights                                                                                                                                                                                                                                                                                                                                                                                </NavLink></li> */}
        {/* <li><NavLink  to='/Signup' activeClassName="selected">Signup</NavLink></li>
        <li><NavLink  to='/Signin' activeClassName="selected">Signin</NavLink></li> */}
        {/* <li><NavLink  to='/myDashboard' activeClassName="selected" >My dashboard</NavLink></li> */}
      </ul>
    </nav>
    );
  }
}

export default Navbar;