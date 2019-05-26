import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Auth from './Auth'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can cha$nge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
